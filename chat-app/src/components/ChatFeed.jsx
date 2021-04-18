import MessageForm from './MessageForm';
import  MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed = (props) => {
    // render the props, destructure
    const { chats, activeChat, userName, messages } = props;

    // create a chat variable, IF it exists, as well as the activeChat
    const chat = chats && chats[activeChat]
    
    // console.log(chat, userName, messages)

    const renderMessages = () => {
        // create variable keys to fetch all the messages
        const keys = Object.keys(messages);

        // console.log(keys);
        
        // render the messages
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessage = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                // create a div that will act as the 
                // container for the messages
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    {/* create another div for the message itself */}
                    <div className="message-block">
                        
                    </div>
                </div>
            )
        })
    }

    // call renderMessages
    renderMessages();

    return (
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed;