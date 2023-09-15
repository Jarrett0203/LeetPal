import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { SyncLoader } from "react-spinners";

const Layout = ({ children }: PropsWithChildren) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const redirectToSignIn =
    !session && router.pathname !== "/signin" && router.pathname !== "/signup";
  const isLoading = status === "loading";

  if (isLoading) {
    return (
      <div className="min-vh-100 d-flex bg-dark justify-content-center align-items-center">
        <SyncLoader color="#ffffff" size={25} />
      </div>
    );
  }

  if (redirectToSignIn) {
    signIn();
  }

  return (
    <div className=" dark:bg-gray-900 h-screen shadow-md">
      {!redirectToSignIn && (
          <div className="divide-y divide-neutral-500 mx-auto">
            <Navbar session={session} />
          {children}
          </div>
      )}
    </div>
  );
};

export default Layout;
