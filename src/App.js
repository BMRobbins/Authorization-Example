import Header from "./components/Header";
import LogInUI from "./components/LogInUI";
import { useState } from "react";
import UserContent from "./components/UserContent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Header logoutHandler={logoutHandler} isLoggedIn={isLoggedIn} />
      {!isLoggedIn && <LogInUI loginHandler={loginHandler} />}
      {isLoggedIn && <UserContent />}
    </>
  );
}

export default App;
