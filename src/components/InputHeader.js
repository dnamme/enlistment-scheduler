import { FaClipboardList, FaPlus, FaTrashAlt } from 'react-icons/fa'
import IconButton from './IconButton'

function InputHeader({ color, onAddClick, onCopyClick, onDeleteClick, showDelete = true, isPreEnlisted = false }) {
  const mrgLeft = { margin: '4px 8px' }

  const flStyle = {
    marginLeft: '8px',
    marginRight: 'auto',
  }

  return (
    <div className="input-header" style={{ backgroundColor: color, position: 'sticky', top: 0 }}>
      {/* color indicator / pre-enlisted heading */}
      {
        isPreEnlisted
          ? <h5 style={{ ...flStyle, marginTop: 0, marginBottom: 0, color: 'white' }}>Pre-Enlisted Classes</h5>
          : <div className="color-indicator" style={flStyle}>
              <div style={{
                backgroundColor: color,
                width: '24px',
                height: '24px',
                clipPath: 'circle(50%)'
              }} />
              <p>{color}</p>
            </div>
      }

      {/* buttons */}
      {/* <IconButton cStyle={mrgLeft} icon={<FaPlus />} text="Manual Add" onClick={onAddClick} /> */}
      <IconButton cStyle={mrgLeft} icon={<FaClipboardList />} text="Paste from AISIS" onClick={onCopyClick} />
      { showDelete && !isPreEnlisted && <IconButton cStyle={mrgLeft} icon={<FaTrashAlt />} text="Delete Group" onClick={onDeleteClick} /> }
    </div>
  )
}

export default InputHeader