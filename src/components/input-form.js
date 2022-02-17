import { useCallback, useState } from 'react';

const InputForm = () => {
  const [message, setMessage] = useState('')

  const handleOnChange = (event) => {
    setMessage(event.target.value)
  }

  const handleOnSubmit = useCallback(() => {
  }, [message])

  return <div>
    <input value={message} placeholder='Enter message here' onChange={handleOnChange} />
    <br />
    <br />
    <button onClick={handleOnSubmit}>Submit</button>
  </div>
}

export default InputForm
