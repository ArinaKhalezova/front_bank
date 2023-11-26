import Userfront, { LogoutButton } from "@userfront/toolkit/react";

const Logout = () => {
  Userfront.init("demo1234");

  return (
    <div>
        <LogoutButton />
    </div>
  );

};

export default Logout;



