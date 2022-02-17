import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../redux/actions'

const InputForm = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  const handleOnChange = (event) => {
    setMessage(event.target.value)
  }

  const handleOnSubmit = useCallback(() => {
    dispatch(actions.sendMessage(message));
    setMessage('')
  }, [message])

  return <div>
    <input value={message} placeholder='Enter message here' onChange={handleOnChange} />
    <br />
    <br />
    <button onClick={handleOnSubmit} disabled={!message.trim()}>Submit</button>
  </div>
}

export default InputForm
