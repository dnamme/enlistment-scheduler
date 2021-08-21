import { FaClipboardList, FaPlus, FaTrashAlt } from 'react-icons/fa'

function InputHeader({ onCopyClick }) {
  const onAdd = () => {
  }

  const onDelete = () => {
  }

  return (
    <div className="input-header">
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