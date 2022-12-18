import { useLayoutEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../Header/Header";

export function PrivateRoot({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(
    !!JSON.parse(localStorage.getItem("user"))?.token
  );

  //console.log(isAuthorized);

  useLayoutEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setIsAuthorized(!!user?.token);
  }, []);

  if (!isAuthorized) return <Navigate to={"/logIn"} />;
  return (
    <>
      <Header />
      {children}
    </>
  );
}
