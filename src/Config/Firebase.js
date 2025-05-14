import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBtcW3Sx_8LTCtoOQQGDSoj6hfUCWCbs48",
  authDomain: "chat-app-66bd1.firebaseapp.com",
  projectId: "chat-app-66bd1",
  storageBucket: "chat-app-66bd1.firebasestorage.app",
  messagingSenderId: "1059399217535",
  appId: "1:1059399217535:web:0ce986d0b64c6006a56a4a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (username, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "test, this is test method",
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
  } catch (error) {
    console.log("this is :", error);
    toast.error(error.code);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error("error");
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("error");
    toast.error("error");
  }
};

export { signUp, login, logout, auth, db };
