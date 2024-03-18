import { useState } from "react";
import MessageEdit from "../MessageEdit/MessageEdit";
import './MessageShow.css'
import MessageDelete from "../MessageDelete/MessageDelete";

const MessageShow = ({ message, onDelete, onEdit }) => {
    const [updateOpen, setUpdateOpen] = useState(false)
    const [openDeleteOptions, setOpenDeleteOptions] = useState(false)
    const handleUpdateOpen = () => {
        setUpdateOpen(!updateOpen)
    }

    const handleDeleteText=()=>{
        setOpenDeleteOptions(false)
        onDelete(message)
    }

    const handleSubmitEditedText = (updatedMessage) => {
        onEdit(updatedMessage)
        setUpdateOpen(false)
    }

    const handleCloseDeleteOptions = () => {
        setOpenDeleteOptions(false)
    }

    let content = <div className="inidvidualDivShow">
        <div className="divShowTitle">{message.title}</div>
        <div className="divShowButtonDiv">
            <div><button onClick={handleUpdateOpen} className="divShowUpdate">Update</button></div>
            <div><button className="divDeleteUpdate" onClick={() => {
                setOpenDeleteOptions(true)
            }}>Delete</button></div>
        </div>
    </div>;

    if (updateOpen) {
        content = <MessageEdit message={message} onSubmitEdit={handleSubmitEditedText} />
    }
    if (openDeleteOptions) {
        content = <MessageDelete message={message} onDelete={handleDeleteText} onClose={handleCloseDeleteOptions} />
    }

    return (
        <div className="mainIndividualDiv">
            {content}
        </div>
    )
}

export default MessageShow;