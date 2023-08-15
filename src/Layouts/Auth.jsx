import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-background h-screen flex justify-center items-center">
      <div className="bg-white rounded-[20px] pt-[34px] px-[45px] pb-[45px]">
        <div className="flex">
          <img src={require("../assets/images/auth.png")} />
        </div>
        {children}
      </div>
      <div className="fixed bottom-[20px] left-0 right-0 flex justify-center items-center flex-col">
        <img src={require("../assets/images/Logo.png")} />
        <p>تمامی حقوق این سامانه برای فراز اس‌ام‌اس محفوظ می‌باشد.</p>
      </div>
    </div>
  );
};

export default AuthLayout;
