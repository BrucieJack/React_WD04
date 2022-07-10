import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Button } from "./components/Button";
import { User } from "./components/User/User";
import { Header } from "./components/Header/Header";
import { EmojiContainer } from "./components/Emojies/EmojiContainer";
import { ListPosts } from "./components/PostsList/PostsList";
import { List } from "./components/List/List";
import { FullPost } from "./pages/FullPost";
import { createContext, useState } from "react";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}>({
  isDark: false,
  setIsDark: (value: boolean) => {},
});

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <Context.Provider value={{ isDark, setIsDark }}>
      <div className="App">
        <Router />
      </div>
    </Context.Provider>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/emoji" component={EmojiContainer} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/postlist" component={ListPosts} />
        <Route path="/post/:id" component={FullPost} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
