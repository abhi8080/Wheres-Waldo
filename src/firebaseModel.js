import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import firebaseConfig from "./firebase-config";

initializeApp(firebaseConfig);
const db = getFirestore();

export default async function getLocation(character) {
  const docRef = doc(db, "characters", `${character}`);
  const docSnap = await getDoc(docRef);

  const xValue = docSnap.data().xValue;
  const yValue = docSnap.data().yValue;
  return { xValue, yValue };
}

function sort(leaderBoardList) {
  return leaderBoardList.sort((a, b) => {
    const minA = parseInt(a.time.substring(0, 1));
    const minB = parseInt(b.time.substring(0, 1));
    const secA = parseInt(a.time.substring(2, 4));
    const secB = parseInt(b.time.substring(2, 4));

    if (minA < minB) {
      return -1;
    } else if (minB < minA) {
      return 1;
    } else if (secA < secB) {
      return -1;
    } else if (secB < secA) {
      return 1;
    } else return 0;
  });
}

export async function getPlayers() {
  let leaderboard = [];
  const colRef = collection(db, "playersOnLeaderboard");
  const snapshot = await getDocs(colRef);
  snapshot.docs.forEach((doc) => {
    const player = {
      name: doc.data().Name,
      time: doc.data().Time,
    };
    leaderboard.push(player);
  });
  return sort(leaderboard);
}
function generateDocumentID(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export async function saveScoreInDataBase(minutes, seconds, name) {
  const documentID = generateDocumentID(30);
  await setDoc(doc(db, "playersOnLeaderboard", documentID), {
    Time: `${minutes}:${seconds}`,
    Name: `${name}`,
  });
}
