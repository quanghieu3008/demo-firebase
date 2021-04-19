import admin from 'firebase-admin';
import 'firebase/storage';

const { privateKey } = JSON.parse(process.env.FIRESTORE_PRIVATE_KEY);

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        privateKey,
        projectId: process.env.FIRESTORE_PROJECT_ID,
        clientEmail: process.env.FIRESTORE_CLIENT_EMAIL,
      }),
      storageBucket: process.env.FIRESTORE_CLIENT_STORAGE_BUCKET,
      databaseURL: process.env.FIRESTORE_DATABASE_URL,
    });
  } catch (error) {
    throw new Error(`Firebase admin initialization error: ${error.stack}`);
  }
}

const fireCook = admin.firestore();

const storages = admin.storage().bucket();

export { fireCook, storages };
