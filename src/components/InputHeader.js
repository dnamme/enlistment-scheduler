import { FaClipboardList, FaPlus, FaTrashAlt } from 'react-icons/fa'

function InputHeader() {
  const onAdd = () => {
  }

  const onDelete = () => {
  }

  const onPaste = () => {
  }

  return (
    <div className="input-header">
      <div className="square-button" onClick={onAdd}>
        <FaPlus />Add
      </div>
      <div className="square-button" onClick={onPaste}>
        <FaClipboardList />Paste from AISIS
      </div>
      <div className="square-button" onClick={onDelete}>
        <FaTrashAlt />Delete Group
      </div>
    </div>
  )
}

export default InputHeader