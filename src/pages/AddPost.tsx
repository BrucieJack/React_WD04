import { useContext, useState } from "react";

import { Button } from "../components/Button";
import { Input } from "../components/Input/Input";
import { Title } from "../components/Title/Title";
import { Context } from "../context/ThemeContext";

export const AddPost = () => {
  const [title, setTitle] = useState("");
  const [lessonNumber, setLN] = useState("");
  const [text, setText] = useState("");
  const context = useContext(Context);

  const onClick = () => {};

  return (
    <div
      style={{
        backgroundColor: context.isDark ? "#000" : "#fff",
      }}
    >
      <Title text="Add new post" />
      <Input
        value={title}
        setValue={setTitle}
        label={"Title"}
        placeholder="title"
      />
      <Input
        value={lessonNumber}
        setValue={setLN}
        label="Lesson number"
        placeholder="lesson number"
      />
      <Input value={text} setValue={setText} label="Text" placeholder="text" />
      //Добавить добавление файла
      <Button text="Add" onClick={onClick} type="primary" disabled={false} />
    </div>
  );
};
