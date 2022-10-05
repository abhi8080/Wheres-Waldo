import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  getDocs,
} from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX5KCcAgavPCVjtbiRZdWUtxAp7VEX-wI",
  authDomain: "where-s-waldo-58777.firebaseapp.com",
  projectId: "where-s-waldo-58777",
  storageBucket: "where-s-waldo-58777.appspot.com",
  messagingSenderId: "350851221586",
  appId: "1:350851221586:web:4ebb3abe9042b66091f78b",
};
initializeApp(firebaseConfig);
const db = getFirestore();

export default async function getLocation(character) {
  const docRef = doc(db, "characters", `${character}`);
  const docSnap = await getDoc(docRef);

  const xValue = docSnap.data().xValue;
  const yValue = docSnap.data().yValue;
  return { xValue, yValue };
}

export async function getPlayers() {
  let leaderboard = [];
  const colRef = collection(db, "playersOnLeaderboard");
  const snapshot = await getDocs(colRef);
  snapshot.docs.forEach((doc) => {
    const player = {
      name: doc.data().Name,
      score: doc.data().Score,
    };
    leaderboard.push(player);
  });
  return leaderboard;
}
