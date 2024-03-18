import { useState } from 'react';
import './App.css'
import MessageCreate from './components/MessageCreate/MessageCreate';
import MessageList from './components/MessageList/MessageList';
import { FaLongArrowAltRight } from "react-icons/fa";

const App = () => {
  const [messages, setMessages] = useState([])
  const [openTextBox, setOpenTextBox] = useState(false)


  const handleAddMessages = (text) => {
    setMessages([...messages, { id: Math.floor(Math.random() * 111), title: text }])
  }

  const handleDeleteMessage = (editedMessage) => {
    const updatedMessages = messages.filter((message) => {
      return message.id !== editedMessage.id
    })
    setMessages(updatedMessages)
  }

  const handleEditMessage = (editMessage) => {
    const editedMessage = messages.map((message) => {
      if (editMessage.id === message.id) {
        return { ...message, title: editMessage.title }
      }
      return message
    })
    setMessages(editedMessage)
  }


  return (
    <div>
      <div className='buttonDiv'>
        <div className='textAndIcon'>
          <p className='title'>Add Text</p>
          <p className='reactIcon'><FaLongArrowAltRight /></p>
        </div>
        <button className='button' onClick={() => {
          setOpenTextBox(!openTextBox)
        }}>+</button>
      </div>
      {openTextBox && <MessageCreate message={handleAddMessages} onClose={() => setOpenTextBox(false)} />}
      <MessageList messages={messages} onDelete={handleDeleteMessage} onEdit={handleEditMessage} />
    </div>
  )
}

export default App;