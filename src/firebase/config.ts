import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
  // Production
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // Development
  authEmulatorHost: process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST,
};

export function initFirebase(onProduction: boolean): firebase.app.App {
  if (firebase.apps.length === 0) {
    onProduction ? initProductionFirebase() : initDevelopmentFirebase();
  }

  return firebase.app();
}

function initProductionFirebase() {
  firebase.initializeApp({
    apiKey: config.apiKey,
    authDomain: `${config.projectId}.firebaseapp.com`,
    projectId: config.projectId,
    appId: config.appId,
  });
}

function initDevelopmentFirebase() {
  firebase.initializeApp({ apiKey: config.apiKey });
  firebase.auth().useEmulator(`http://${config.authEmulatorHost}`);
}
