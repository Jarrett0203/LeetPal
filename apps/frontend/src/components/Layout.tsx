import { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoadingModal from "./LoadingModal";
import SlideOver from "./SlideOver";

const Layout = ({ children }: PropsWithChildren) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [openSlideOver, setOpenSlideOver] = useState(false);

  const redirectToSignIn =
    !session &&
    router.pathname !== "/signin" &&
    router.pathname !== "/signup" &&
    !router.pathname.includes("error");
  const isLoading = status === "loading";

  if (isLoading) {
    return <LoadingModal isLoading={isLoading} />;
  }

  if (redirectToSignIn) {
    signIn();
  }

  return (
    <>
    <div className="dark:bg-gray-900 min-h-screen pb-10 shadow-md">
      {!redirectToSignIn && (
        <div className="flex flex-col divide-y divide-neutral-500">
          <Navbar session={session} setSlideOver={setOpenSlideOver} openSlideOver={openSlideOver} />
          <div className="px-5">
          {children}
          </div>
        </div>
      )}
    </div>
    <SlideOver open={openSlideOver} setOpen={setOpenSlideOver} />
    </>
  );
};

export default Layout;
