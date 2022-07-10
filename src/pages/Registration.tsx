import { useState } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import { Title } from "../components/Title/Title";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const onClick = () => {
    alert(
      "Register with email:" + email + " name:" + name + " password:" + password
    );
  };
  return (
    <div>
      <Title text="Login" />
      <Input
        value={name}
        setValue={setName}
        label={"Name"}
        placeholder="name"
      />
      <Input
        value={email}
        setValue={setEmail}
        label={"Email"}
        placeholder="email"
      />
      <Input
        value={password}
        setValue={setPassword}
        label={"Password"}
        placeholder="password"
      />
      <Input
        value={passwordConf}
        setValue={setPasswordConf}
        label="Confirm password"
        placeholder="confirm password"
      />
      <Button
        text="Sign Up"
        onClick={onClick}
        type="primary"
        disabled={false}
      />
    </div>
  );
};
