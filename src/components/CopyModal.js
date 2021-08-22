import { useState } from 'react'

import sc1 from './../img/screenshots/sc1.png'

import FlatButton from './FlatButton'

function CopyModal({ keyCode, onAddClick, onExitClick }) {
  const [data, setData] = useState('')

  return (
    <div className="modal">
      <div className="modal-content">
        <h5 style={{ margin: 0, alignSelf: 'flex-start' }}>How to add classes from AISIS:</h5>

        <ol style={{ paddingLeft: '24px', alignSelf: 'flex-start' }}>
          <li>Go to <strong>AISIS Online</strong></li>
          {
            keyCode === -1
              ? <li>Find your list of pre-enlisted classes</li>
              : <>
                  <li>Navigate to <strong>Class Schedule</strong></li>
                  <li>Click the <strong>Display Class Schedule</strong> button after choosing any department, course, or category number</li>
                </>
          }
          <li>Copy the entire row (or entire rows for multiple courses) from the table on AISIS</li>
          <li>Paste the text in the textbox below
            <ul>
              <li>Do not copy the table headings!</li>
              <li>Make sure that each row/class are on separate lines! Example:
                <img
                  src={sc1}
                  alt="Sample of textarea with input"
                  style={{
                    width: '100%',
                    height: 'auto',
                    filter: 'drop-shadow(0 0 2px black)'
                  }} />
              </li>
            </ul>
          </li>
        </ol>

        <textarea
          rows="8"
          className="copy-text"
          placeholder="Paste here..."
          // placeholder="COURSE-CODE	SECTION	COURSE-TITLE	UNITS	TIME	ROOM	INSTRUCTOR	MAX-SLOTS	LANG	LEVEL	FREE-SLOTS	REMARKS	S	P"
          value={data}
          style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
          wrap="none"
          onChange={(e) => setData(e.target.value)}
        />

        <FlatButton cStyle={{ width: '128px', margin: '32px 0 16px 0' }} text="Add" onClick={() => onAddClick(keyCode, data)} />
        <FlatButton cStyle={{ width: '128px' }} text="Cancel" isOutlined={true} onClick={onExitClick} />
      </div>
    </div>
  )
}

export default CopyModal