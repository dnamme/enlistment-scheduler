import InputHeader from './InputHeader'

function InputGroup({ group, onCopyClick }) {
  return (
    <div className="input-group">
      <InputHeader color={group.color} onCopyClick={onCopyClick} />
      {
        group.courses.map((course) =>
          <div key={`GROUP_${course.code}_${course.section}`} className="input-row">
            <input type="radio" checked={course.selected} onChange={() => console.log('hi')} />
          </div>
        )
      }
    </div>
  )
}

export default InputGroup