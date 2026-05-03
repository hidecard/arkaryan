// Firebase REST API wrapper for server-side usage
const FIREBASE_PROJECT_ID = 'messager-4abd8';

// Use Firebase REST API instead of SDK for server-side compatibility
export const firestoreRestApi = {
  projectId: FIREBASE_PROJECT_ID,
  baseUrl: `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents`,
};

// Helper function to make Firestore REST API calls
export async function firestoreGet(collection: string, docId: string) {
  const url = `${firestoreRestApi.baseUrl}/${collection}/${docId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Firestore GET failed: ${response.status}`);
    }
    const data = await response.json();
    return firestoreDocToJson(data);
  } catch (error) {
    console.error('Firestore GET error:', error);
    throw error;
  }
}

// Create or update document
export async function firestoreSet(collection: string, docId: string, data: Record<string, any>) {
  const url = `${firestoreRestApi.baseUrl}/${collection}/${docId}`;
  const firestoreData = jsonToFirestoreDoc(data);

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(firestoreData),
    });

    if (!response.ok) {
      throw new Error(`Firestore SET failed: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Firestore SET error:', error);
    throw error;
  }
}

// Convert Firestore document format to plain JSON
function firestoreDocToJson(doc: any): any {
  if (!doc.fields) return {};

  const result: any = {};
  for (const [key, value] of Object.entries(doc.fields)) {
    result[key] = firestoreValueToJson(value as any);
  }
  return result;
}

function firestoreValueToJson(value: any): any {
  if (value.stringValue !== undefined) return value.stringValue;
  if (value.integerValue !== undefined) return parseInt(value.integerValue);
  if (value.doubleValue !== undefined) return value.doubleValue;
  if (value.booleanValue !== undefined) return value.booleanValue;
  if (value.timestampValue !== undefined) return value.timestampValue;
  if (value.mapValue) return firestoreDocToJson(value.mapValue);
  if (value.arrayValue?.values) return value.arrayValue.values.map(firestoreValueToJson);
  return null;
}

// Convert plain JSON to Firestore document format
function jsonToFirestoreDoc(data: Record<string, any>): any {
  const fields: any = {};
  for (const [key, value] of Object.entries(data)) {
    fields[key] = jsonToFirestoreValue(value);
  }
  return { fields };
}

function jsonToFirestoreValue(value: any): any {
  if (typeof value === 'string') return { stringValue: value };
  if (typeof value === 'number') {
    if (Number.isInteger(value)) return { integerValue: value.toString() };
    return { doubleValue: value };
  }
  if (typeof value === 'boolean') return { booleanValue: value };
  if (value instanceof Date) return { timestampValue: value.toISOString() };
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      return { arrayValue: { values: value.map(jsonToFirestoreValue) } };
    }
    return { mapValue: { fields: jsonToFirestoreDoc(value).fields } };
  }
  return { nullValue: null };
}

// For backward compatibility
export const db = { firestoreRestApi, firestoreGet, firestoreSet };

export default db;
