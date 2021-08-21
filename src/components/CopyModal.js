import { useState } from 'react'

import FlatButton from './FlatButton'

function CopyModal({ keyCode, onAddClick, onExitClick }) {
  const [data, setData] = useState('')

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Go to Class Schedule on AISIS and paste rows from the tables below</h4>

        <textarea
          rows="5"
          className="copy-text"
          placeholder="Paste here..."
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <FlatButton cStyle={{ width: '128px' }} text="Add" onClick={() => onAddClick(keyCode, data)} />
        <FlatButton cStyle={{ width: '128px' }} text="Cancel" isOutlined={true} onClick={onExitClick} />
      </div>
    </div>
  )
}

export default CopyModal