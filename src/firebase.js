import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDO-ErTfBJEi0n3mK0q2NiKtXkORR0BTOg",
  authDomain: "snapchat-clone-yt-57083.firebaseapp.com",
  projectId: "snapchat-clone-yt-57083",
  storageBucket: "snapchat-clone-yt-57083.appspot.com",
  messagingSenderId: "987900954371",
  appId: "1:987900954371:web:a19eb7e625cd08b825cb36",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
