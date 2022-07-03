import "./App.css";
import { Login } from "./pages/Login";

// import { Button } from "./components/Button";
// import { User } from "./components/User/User";
// import { Header } from "./components/Header/Header";
// import { EmojiContainer } from "./components/Emojies/EmojiContainer";
// import { List } from "./components/List/List";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <EmojiContainer /> */}
      {/* <Button text="1" disabled={true} type={"primary"} /> */}
      {/* <Button text="2" disabled={true} type={"secondary"} /> */}
      {/* <User username="Jack Sparrow" /> */}
      {/* <List /> */}
      <Login />
    </div>
  );
}

export default App;
