import { useContext, useState } from "react";

import { Button } from "../components/Button";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import { Title } from "../components/Title/Title";
import { Context } from "../context/ThemeContext";

const _emailRegExp = /(^|\s+)[\w\-.]+@([\w-]+\.)+[\w-]{2,4}($|\s+)/;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(Context);
  const [error, setError] = useState("");

  const onClick = () => {
    if (_emailRegExp.test(email) === false) {
      setError("Неверный email");
    } else {
      setError("");
    }

    if (password === "") {
      setError("Введите пароль");
    } else {
      setError("");
    }

    const promise = fetch("https://studapi.teachmeskills.by/auth/jwt/create/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    promise
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (
          data?.detail?.includes(
            "No active account found with the given credentials."
          )
        ) {
          setError("Такого пользователя не существует");
          return;
        }

        console.log({ data });
      });
  };

  return (
    <div
      style={{
        backgroundColor: context.isDark ? "#000" : "#fff",
      }}
    >
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
      <p style={{ color: "red" }}>{error}</p>
      <Button text="Login" onClick={onClick} type="primary" disabled={false} />
    </div>
  );
};
