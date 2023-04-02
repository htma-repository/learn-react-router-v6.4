import React from "react";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  /* A hook that is used to get the error object from the router. */
  const error = useRouteError();

  // console.log(JSON.parse(error.data).message);

  let errorTitle = "An error occurred!";
  let errorMessage = "Something went wrong!";

  /* Checking if the error status is 500 and if it is it is setting the errorMessage to the value
specified. */
  if (error.status === 500) {
    // const data = JSON.parse(error.data);
    errorMessage = error.data.message;
  }

  /* Checking if the error status is 404 and if it is it is setting the errorTitle and errorMessage to
the values specified. */
  if (error.status === 404) {
    errorTitle = "Not Found!";
    errorMessage = "Page your visit not found!";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={errorTitle}>
        <p>{errorMessage}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
