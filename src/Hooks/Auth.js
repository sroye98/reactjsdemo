import React, { useState, useEffect, useContext, createContext } from "react";

import { fakeAuth } from '../Constants';

const authContext = createContext();

const userObj = {
  username: 'sroye',
  roles: [
    'admin'
  ]
};

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return ( 
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (identifier, password, cb) => {
    return fakeAuth.signin(identifier, password, () => {
      setUser(userObj);
      cb();
    });
  };

  const signup = (username, email, password, cb) => {
    return fakeAuth.signup(username, email, password, () => {
      setUser(userObj);
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  const sendPasswordResetEmail = email => {
    return true;
  };

  const confirmPasswordReset = (code, password) => {
    return true;
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    // const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     setUser(user);
    //   } else {
    //     setUser(false);
    //   }
    // });

    // Cleanup subscription on unmount
    return () => setUser(null);
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}