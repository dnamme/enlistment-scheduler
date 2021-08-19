import { useState } from 'react'

function CopyModal({ onExit, onCopySubmit }) {
  const [data, setData] = useState('')

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Go to Class Schedule on AISIS and paste rows from the tables below</h4>

        <form className="copy-form">
          <input
            type="text"
            placeholder="Paste here..."
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <input
            type="submit"
            class="button"
            value="Add"
            onClick={onCopySubmit}
          />
        </form>

        <button className="outline" onClick={onExit}>Cancel</button>
      </div>
    </div>
  )
}

export default CopyModal