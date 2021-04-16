 import { ChatEngine } from 'react-chat-engine';
 import './App.css';

 const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="cb3f0dee-0d92-43eb-baad-f7af7a9ce23c"
            userName="chatTest"
            userSecret="123"
            renderChatFeed={() => <ChatFeed />}
        />
    )
 };

 export default App;