import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => {
            setShowInfo(!showInfo)
          }}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question

// {questions.map((person) => {
//         const { id, title, info } = person
//         return (
//           <article key={id}>
//             <div>
//               <h4>{title}</h4>
//               <span>
//                 <AiOutlinePlus onClick={() => buttonHandler(id)} />
//               </span>
//               <span>
//                 <AiOutlineMinus />
//               </span>
//               {button ? '' : <p>{info}</p>}
//             </div>
//           </article>
