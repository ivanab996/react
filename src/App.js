import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { useState } from "react";
import { Counter } from "./components/Counter";


function App() {
  const [ username, setUsername] = useState('');
  
  function handleSubmit(username) {
      setUsername(username);
  }

  return (

    <div>
      <Counter initialValue={11} step={1.23} precision={2} />
      {username === '' && <SignInPage onSubmit={handleSubmit}/>}
      {username !== '' && <ChatPage />}
    </div>
  );
}

export default App;
