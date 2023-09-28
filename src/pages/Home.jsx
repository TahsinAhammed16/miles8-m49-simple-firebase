import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { signOut } from "firebase/auth";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);

  const auth = getAuth(app);
  // console.log(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUserDetails(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(result => {
        console.log(result)
        setUserDetails(null);
      })
      .catch(() => {
      });
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col-reverse items-center">
        <div className="flex gap-3">
          <button
            onClick={handleGoogleSignIn}
            className="bg-blue-900 rounded-lg p-2 px-3 text-white font-bold text-lg mt-5"
          >
            Google login
          </button>
          <button
            onClick={handleGoogleSignOut}
            className="bg-blue-900 rounded-lg p-2 px-3 text-white font-bold text-lg mt-5"
          >
            Sign Out
          </button>
        </div>
        <div className="mt-6">
          {userDetails && (
            <div className="flex flex-col items-center">
              <img
                className="rounded-full mb-4"
                src={userDetails.photoURL}
                alt=""
              />
              <h3 className="text-xl font-semibold">
                User: {userDetails.displayName}
              </h3>
              <h3 className="text-sm">Email: {userDetails.email}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
