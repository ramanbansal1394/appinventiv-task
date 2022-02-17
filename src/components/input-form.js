import { useCallback, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Messages from './messages';

import * as actions from '../redux/actions'

let timer = null

const InputForm = () => {
  const messageRef = useRef();
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
      return
    }
    dispatch(actions.sendMessage({
      id: new Date().getTime(),
      message
    }));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'auto'
    });
  }, [message, dispatch])

  return <div>
    <input placeholder='Enter message here' onChange={handleOnChange} />
    <br />
    <br />
    <button onClick={handleOnSubmit}>Submit</button>
    <Messages ref={messageRef} />
  </div>
}

export default InputForm
