import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex w-full justify-center items-center">
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
