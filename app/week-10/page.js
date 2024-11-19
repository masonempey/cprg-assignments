"use client";

import { useUserAuth } from "./_utils/auth-context"; // Update path if necessary
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // If the user is authenticated, redirect to shopping list
      router.push("/shopping-list/page.js");
    }
  }, [user, router]); // The redirect will occur when the 'user' changes

  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn(); // Sign in with GitHub
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut(); // Sign out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in to continue.</p>
          <button onClick={handleGitHubSignIn}>Sign In with GitHub</button>
        </div>
      )}
    </div>
  );
}
