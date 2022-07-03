import { useState } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import { Title } from "../components/Title/Title";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = () => {
    alert("Login with email:" + email + " password:" + password);
  };
  return (
    <div>
      <Header />
      <Title text="Login" />
      <Input
        value={email}
        setValue={setEmail}
        label={"Email"}
        placeholder="email"
      />
      <Input
        value={password}
        setValue={setPassword}
        label="Password"
        placeholder="password"
      />
      <Button text="Login" onClick={onClick} type="primary" disabled={false} />
    </div>
  );
};
