import { useState } from 'react'

import FlatButton from './FlatButton'

function CopyModal({ keyCode, onAddClick, onExitClick }) {
  const [data, setData] = useState('')

  return (
    <div className="modal">
      <div className="modal-content">
        <h5 style={{ margin: 0, alignSelf: 'flex-start' }}>How to add classes from AISIS:</h5>

        <ol style={{ paddingLeft: '24px', alignSelf: 'flex-start' }}>
          <li>Go to AISIS Online and navigate to Class Schedule</li>
          <li>Click the Display Class Schedule button for any department, course, or category number</li>
          <li>Copy the entire row (or entire rows for multiple courses) from the table on AISIS
            <ul>
              <li>Don't worry if there are extra spaces! The tool will work as long as you don't type or change anything important!</li>
            </ul>
          </li>
          <li>Paste the text in the textbox below</li>
        </ol>

        <textarea
          rows="5"
          className="copy-text"
          placeholder="Paste here..."
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <FlatButton cStyle={{ width: '128px', margin: '32px 0 16px 0' }} text="Add" onClick={() => onAddClick(keyCode, data)} />
        <FlatButton cStyle={{ width: '128px' }} text="Cancel" isOutlined={true} onClick={onExitClick} />
      </div>
    </div>
  )
}

export default CopyModal