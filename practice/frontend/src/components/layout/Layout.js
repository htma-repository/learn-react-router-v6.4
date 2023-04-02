import React from "react";
import MainNavigation from "../MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

const Layout = () => {
  /* A hook that is provided by the `react-router-dom` package. It allows us to access the navigation state. */
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {/* Checking if the navigation state is loading, if it is, it will
        display a loading message. If it is not, it will display the outlet. */}
        {navigation.state === "loading" ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
};

export default Layout;
