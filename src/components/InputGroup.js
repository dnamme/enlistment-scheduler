import InputHeader from './InputHeader'

function InputGroup({ group, onCopyClick }) {
  const onSelect = () => {
  }

  return (
    <div className={`input-group`}>
      <InputHeader color={group.color} onCopyClick={onCopyClick} />
      {
        group.courses.map((course) =>
          <div key={`GROUP_${course.code}_${course.section}`} className={`input-row ${course.free_slots > 0 ? '' : 'disabled'}`}>
            <input type="radio" checked={course.selected} onChange={onSelect} />
            <p>{course.code}</p>
            <p>{course.section}</p>
            <p>{course.name}</p>
            <p>{course.time}</p>
            <p>{course.room}</p>
            <p>{course.instructor}</p>
            <p>{course.free_slots}</p>
          </div>
        )
      }
    </div>
  )
}

export default InputGroup