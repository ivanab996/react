import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { useState } from "react";
import { Counter } from "./components/Counter";


function App() {
  const [ username, setUsername] = useState('');
  const [ avatarIndex, setAvatar] = useState(0);
  
  function handleSubmit(user) {
      setUsername(user.username);
      setAvatar(user.avatarIndex);
  }


  return (

    <div>
      <Counter initialValue={11} step={1.23} precision={2} />
      {username === '' && <SignInPage onSubmit={handleSubmit} />}
      {username !== '' && <ChatPage username={username} avatarIndex={avatarIndex}/>}
    </div>
  );
}

export default App;
