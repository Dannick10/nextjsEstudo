import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});


const auth = getAuth(app);
export { auth };
export default app;
