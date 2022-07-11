import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/ThemeContext";

export const Activation = () => {
  const params = useParams<{ uid: string; token: string }>();
  const context = useContext(Context);

  useEffect(() => {
    fetch("https://studapi.teachmeskills.by/auth/users/activation/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: params.token, uid: params.uid }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log({ data });
      });
  }, []);

  return (
    <div>
      <h1>
        Спасибо за регистрацию! Аккаунт успешно зарегистрирован!{params.token}
        {params.uid}
      </h1>
    </div>
  );
};
