import { useContext, useState } from "react";

import { Button } from "../components/Button";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import { Title } from "../components/Title/Title";
import { Context } from "../context/ThemeContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(Context);

  const onClick = () => {
    fetch("https://studapi.teachmeskills.by/auth/jwt/create/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  };

  return (
    <div
      style={{
        backgroundColor: context.isDark ? "#000" : "#fff",
      }}
    >
      <Title text="Login" />
      <Input value={email} setValue={setEmail} label={"Email"} placeholder="email" />
      <Input value={password} setValue={setPassword} label="Password" placeholder="password" />
      <Button text="Login" onClick={onClick} type="primary" disabled={false} />
    </div>
  );
};
