import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA-t-8PFVR7stxfdPPhqw9j7in2QARz4Wg",
  authDomain: "business-card-maker-3fb16.firebaseapp.com",
  databaseURL: "https://business-card-maker-3fb16-default-rtdb.firebaseio.com",
  projectId: "business-card-maker-3fb16",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDataBase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();