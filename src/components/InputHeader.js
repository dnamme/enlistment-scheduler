import { FaClipboardList, FaPlus, FaTrashAlt } from 'react-icons/fa'
import IconButton from './IconButton'

function InputHeader({ color, onAddClick, onCopyClick, onDeleteClick }) {
  const mrgLeft = { margin: '4px 8px' }

  return (
    <div className="input-header" style={{ backgroundColor: color }}>
      {/* color indicator */}
      <div className="color-indicator" style={{ marginLeft: '8px', marginRight: 'auto' }}>
        <div style={{
          backgroundColor: color,
          width: '24px',
          height: '24px',
          clipPath: 'circle(50%)'
        }} />

        <p style={{}}>{color}</p>
      </div>

      {/* buttons */}
      <IconButton cStyle={mrgLeft} icon={<FaPlus />} text="Manual Add" onClick={onAddClick} />
      <IconButton cStyle={mrgLeft} icon={<FaClipboardList />} text="Paste from AISIS" onClick={onCopyClick} />
      <IconButton cStyle={mrgLeft} icon={<FaTrashAlt />} text="Delete Group" onClick={onDeleteClick} />
    </div>
  )
}

export default InputHeader