import InputHeader from './InputHeader'

function InputGroup({ courses, onCopyClick }) {
  return (
    <div className="input-group">
      <InputHeader onCopyClick={onCopyClick} />
    </div>
  )
}

export default InputGroup