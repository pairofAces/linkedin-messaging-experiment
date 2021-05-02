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
                        {
                            isMyMessage ? <MyMessage /> : <TheirMessage />
                        }

                        {/* create another div, to contain the read-receipts */}
                        <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                            read-receipts
                        </div>
                    </div>
                </div>
            )
        })
    }

    // call renderMessages -> removed b/c I'm invoking it within the 
    // return statement below
    // renderMessages();

    // in case there is no (chat)
    if (!chat) return "Loading..."

    return (
        // create the container divs for chat feed and title
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>

            {/* render messages here */}
            {renderMessages()}

            <div style={{ height: '100px' }}/>

            {/* create the messaging form below */}
        </div>
    )
}

export default ChatFeed;