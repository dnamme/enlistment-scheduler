import { useState } from 'react'

function CopyModal({ index, onExit, onCopySubmit }) {
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

        <button style={{margin: `1rem 0`}} onClick={() => onCopySubmit(data)}>Add</button>
        <button className="outline" onClick={onExit}>Cancel</button>
      </div>
    </div>
  )
}

export default CopyModal