import React from 'react'; 
import style from './Style/NoteCard.css'


const NoteCard = ({ time, text, add, remove }) => {




  return (
    <div className = "container" style={style}>
      <noscript>Please Enable Js in your Browser</noscript>
        <div className= "card">
        <input type="text" value={text} placeholder='Write your Job here and write the dead line then press Add'/>

          <div className="controls">
            <span>{time}</span>
            <a onClick={remove}>Remove</a>
            <a onClick={add}>Add</a>
            </div>          
        </div>
    </div>
  )
}
export default NoteCard;