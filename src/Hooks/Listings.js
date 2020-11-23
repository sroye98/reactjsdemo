import React, { useState, useEffect, useContext, createContext } from "react";

import { fakeApi } from '../Constants';

const listingContext = createContext();

export function ProvideListing({ children }) {
  const listingSvc = useProvideAuth();

  return ( 
    <listingContext.Provider value={listingSvc}>
      {children}
    </listingContext.Provider>
  );
}

export const useListing = () => {
  return useContext(listingContext);
};

function useProvideListing() {
  const [listings, setListings] = useState(JobListings);

  const add = (listingObj, cb) => {
    return fakeApi.addListing(listingObj, () => {
      cb();
    });
  };

  const edit = (id, listingObj, cb) => {
    return fakeApi.editListing(id, listingObj, () => {
      cb();
    });
  };

  const del = (id, cb) => {
    return fakeApi.deleteListing(id, () => {
      cb();
    });
  };

  const get = (id, cb) => {
    return fakeApi.getListing(id, () => {
      cb();
    });
  };

  const gets = (cb) => {
    return fakeApi.getListings(() => {
      cb();
    });
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
    return () => setListings([]);
  }, []);

  // Return the user object and auth methods
  return {
    listings,
    add,
    edit,
    del,
    get,
    gets
  };
}