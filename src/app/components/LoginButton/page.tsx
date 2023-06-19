'use client'

import { signIn, signOut } from "next-auth/react";

/** After logout, send user to home */
const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut({
      callbackUrl: '/'
    })}>
      Sign Out
    </button>
  );
};

/** After login, send user to the dashboard */
const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn('github', {
      callbackUrl: '/dashboard'
    })}>
      Sign In
    </button>
  );
};

export { LogoutButton, LoginButton };
