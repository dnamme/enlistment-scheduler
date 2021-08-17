import CourseBlock from './CourseBlock'

function Timetable({ data }) {
  const daysOfWeek = ['M', 'T', 'W', 'Th', 'F', 'S']

  return (
    <div className="timetable">
      {data.map((col, index) => (
        <div key={index}>
          <p className="day">{daysOfWeek[index]}</p>
          {col.map((course) => <CourseBlock course={course} />)}
        </div>
      ))}
    </div>
  )
}

export default Timetable