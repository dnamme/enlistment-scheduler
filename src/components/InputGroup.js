import InputHeader from './InputHeader'

function InputGroup({ courses, onCopyClick }) {
  return (
    <div className="input-group">
      <InputHeader onCopyClick={onCopyClick} />
      {/* insert rows here */}
    </div>
  )
}

export default InputGroup