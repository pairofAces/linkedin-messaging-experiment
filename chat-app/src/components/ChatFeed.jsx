import MessageForm from './MessageForm';
import  MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed = (props) => {
    // render the props, destructure
    const { chats, activeChat, userName, messages } = props;

    // create a chat variable, IF it exists, as well as the activeChat
    const chat = chats && chats[activeChat]
    
    return (
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed;