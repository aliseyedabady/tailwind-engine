import React from "react";
import AuthLayout from "../../Layouts/Auth";
import Btn from "../../Components/Btn";
import Input from "../../Components/Input";

const Login = () => {
  return (
    <AuthLayout>
      <Input
        placeholder={"09120000000"}
        img={require("../../assets/images/mobile.png")}
      />
      <Input
        placeholder={"09120000000"}
        img={require("../../assets/images/mobile.png")}
      />
      <Input
        placeholder={"09120000000"}
        img={require("../../assets/images/mobile.png")}
      />
      <Input
        placeholder={"09120000000"}
        img={require("../../assets/images/mobile.png")}
      />
      <Input
        placeholder={"09120000000"}
        img={require("../../assets/images/mobile.png")}
      />{" "}
      <Input
        placeholder={"09120000000"}
        img={require("../../assets/images/mobile.png")}
      />
      <Btn text="ورود" />
    </AuthLayout>
  );
};

export default Login;
