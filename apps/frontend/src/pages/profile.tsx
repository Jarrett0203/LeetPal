import UserForm from "@/components/forms/UserForm";
import { UserManagement } from "@/utils/enums/UserManagement";
import React from "react";

type profileProps = {};

const profile: React.FC<profileProps> = () => {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            My Profile
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <UserForm
            formType={UserManagement.Profile}
          />
        </div>
      </div>
    </>
  );
};
export default profile;
