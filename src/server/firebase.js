import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9SUDZ8TYRSWhjaOwc5bRlii7SnJwlKfU",
  authDomain: "personal-portfolio-dac39.firebaseapp.com",
  projectId: "personal-portfolio-dac39",
  storageBucket: "personal-portfolio-dac39.appspot.com",
  messagingSenderId: "456336833565",
  appId: "1:456336833565:web:c48f916bfa3ed5effc5af4",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
