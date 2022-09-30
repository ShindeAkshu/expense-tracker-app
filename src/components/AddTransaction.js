import React ,{useState} from 'react'

const AddTransaction = () => {
  const[text,setText] = useState('');
  const[amount,setAmount] = useState(0);
  return (
    <>
      <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...'/>
        </div>
       
       <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
