// import React from 'react';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center my-24">
      <h1 className="font-bold text-4xl text-red-500 mb-5">404 Error</h1>
      <p className="font-bold text-2xl text-red-500 mb-5">Sorry, an unexpected error has occurred.</p>
      <p className="font-bold text-xl text-red-500 mb-5">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}