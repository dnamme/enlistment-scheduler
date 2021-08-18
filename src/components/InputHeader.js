import { FaPlus, FaTrashAlt } from 'react-icons/fa'

function InputHeader() {
  const onAdd = () => {
  }

  const onDelete = () => {
  }

  return (
    <div className="input-header">
      <FaPlus className="square-button" onClick={onAdd} />
      <FaTrashAlt className="square-button" onClick={onDelete} />
    </div>
  )
}

export default InputHeader