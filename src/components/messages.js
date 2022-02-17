import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../redux/actions'

const Messages = () => {

  const dispatch = useDispatch();

  const list = useSelector(state => state.messages?.list || [])

  const handleOnDelete = (id) => {
    dispatch(actions.deleteMessage(id));
  }

  return <div className='messages'>
    <table bordered={true}>
      <thead>
        <tr>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((data, index) => {
          return <tr key={index}>
            <td>{data.message}</td>
            <td>
              <button onClick={() => handleOnDelete(data.id)}>
                Delete
              </button>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}

export default React.memo(Messages)
