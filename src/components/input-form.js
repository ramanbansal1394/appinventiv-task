import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../redux/actions'

let timer = null

const InputForm = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleOnChange = (event) => {
    if (timer) {
      clearInterval(timer)
    }
    timer = setTimeout(() => {
      setMessage(event.target.value)
    }, 500)
  }

  const handleOnSubmit = useCallback(() => {
    if (!message) {
      alert('Please enter message')
    }
    dispatch(actions.sendMessage({
      id: new Date().getTime(),
      message
    }));
  }, [message])

  return <div>
    <input placeholder='Enter message here' onChange={handleOnChange} />
    <br />
    <br />
    <button onClick={handleOnSubmit}>Submit</button>
  </div>
}

export default InputForm
