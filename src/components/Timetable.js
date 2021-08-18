import CourseBlock from './CourseBlock'

function Timetable({ data }) {
  const daysOfWeek = ['M', 'T', 'W', 'Th', 'F', 'S']

  return (
    <div className="timetable">
      {data.data.map((col, index) => (
        <div key={index} style={{
          gridTemplateRows: `min-content repeat(${(data.end - data.start)*2}, 1fr)`
        }}>
          <p className="day">{daysOfWeek[index]}</p>
          {col.map((course) => <CourseBlock course={course} start={data.start} />)}
        </div>
      ))}
    </div>
  )
}

export default Timetable