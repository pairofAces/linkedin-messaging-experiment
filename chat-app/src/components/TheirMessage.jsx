const TheirMessage = ({ lastMessage, message }) => {
    // the following will provide a boolean value of whether or not the 
    // first message is by the User
    const isFirstMessageByUser = !lastMessage || 
        lastMessage.sender.userName !== message.sender.userName;


    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {message?.attachments?.length > 0 
                ? (
                    <img 
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ float: 'right' }}
                    />
                ) : (
                    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor= '#3b2a50'}}>
                        {message.text}
                    </div>
                )
    }
        </div>
    )
}

export default TheirMessage;