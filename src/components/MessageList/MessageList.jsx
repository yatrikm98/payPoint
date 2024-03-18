import MessageShow from "../MessageShow/MessageShow"
import './MessageList.css'

const MessageList = ({ messages, onDelete, onEdit }) => {
    const renderedMessages = messages?.map((message, i) => {
        return <MessageShow message={message} key={i} onDelete={onDelete} onEdit={onEdit} />
    })
    return (
        <div>
            {messages.length > 0 ? <div className="mainTitle">Entered Text</div> : <div></div>}
            <div className="mainDivList">
                {renderedMessages}
            </div>
        </div>
    )
}

export default MessageList;