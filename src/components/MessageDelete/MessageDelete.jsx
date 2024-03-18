import './MessageDelete.css'

const MessageDelete = ({ message, onDelete, onClose }) => {
    return (
        <div className='mainDeleteDiv'>
            <div className="divShowTitle">{message.title}</div>
            <div className="deleteButtonDiv">
                <div><button onClick={onDelete} className='deleteYes'>Yes</button></div>
                <div><button onClick={onClose} className='deleteNo'>No</button></div>
            </div>
        </div>
    )
}

export default MessageDelete;