const firebaseConfig = {
    apiKey: "AIzaSyB92wRfrvkKws3dMN-5kJ0mjOmipczfjzA",
    authDomain: "bnksiweb.firebaseapp.com",
    projectId: "bnksiweb",
    storageBucket: "bnksiweb.firebasestorage.app",
    messagingSenderId: "14172542319",
    appId: "1:14172542319:web:03a0668ecbb4aac97e449a",
    measurementId: "G-S8XZ0R6K2M"
};

// Firebaseの初期化
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();