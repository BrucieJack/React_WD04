import { useParams } from "react-router-dom";

export const FullPost = () => {
  const { id } = useParams<{ id: string }>();

  return <h1>{id}</h1>;
};
