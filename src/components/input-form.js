import { useState } from 'react';

const InputForm = () => {
  const [message, setMessage] = useState('')

  const handleOnChange = (event) => {
    setMessage(event.target.value)
  }

  return <div>
    <input value={message} placeholder='Enter message here' onChange={handleOnChange} />
    <br />
    <br />
    <button>Submit</button>
  </div>
}

export default InputForm
