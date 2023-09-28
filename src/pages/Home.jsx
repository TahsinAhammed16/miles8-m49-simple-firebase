import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const Home = () => {
  const auth = getAuth(app);
  console.log(app);
const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto mt-2">
      <div className="flex justify-center">
        <button
          onClick={handleGoogleSignIn}
          className="bg-blue-900 rounded-lg p-2 px-3 text-white font-bold text-lg"
        >
          Google login
        </button>
      </div>
    </div>
  );
};

export default Home;
