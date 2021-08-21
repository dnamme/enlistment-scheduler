import { FaClipboardList, FaPlus, FaTrashAlt } from 'react-icons/fa'

function InputHeader({ color, onCopyClick }) {
  const onAdd = () => {
  }

  const onDelete = () => {
  }

  return (
    <div className="input-header">
      <div style={{
        width: '24px',
        height: '24px',
        boxSizing: 'border-box',
        borderRadius: '24px',
        backgroundColor: color,
        border: '2px solid black'
      }} />
      <div className="square-button" onClick={onAdd}>
        <FaPlus /> Add Manually
      </div>
      <div className="square-button" onClick={onCopyClick}>
        <FaClipboardList /> Paste from AISIS
      </div>
      <div className="square-button" onClick={onDelete}>
        <FaTrashAlt /> Delete Group
      </div>
    </div>
  )
}

export default InputHeader