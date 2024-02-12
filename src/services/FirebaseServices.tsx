import { getApp, initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./FirebaseConfig";
const firebase = firebaseConfig;
let app: any = null;
export function initFirebase() {
  if (!app) return (app = initializeApp(firebase));
}
export const storage = getStorage(initFirebase());

export function getAuthInstance() {
  const app = getApp();
  return getAuth(app);
}

export function getStore() {
  initFirebase();
  const app = getApp();
  return initializeFirestore(app, { ignoreUndefinedProperties: true });
}
export function signOutFromFirebase() {
  const auth = getAuth();
  return signOut(auth);
}
