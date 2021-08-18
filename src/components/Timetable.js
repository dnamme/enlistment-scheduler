import CourseBlock from './CourseBlock'

function Timetable({ data }) {
  const daysOfWeek = ['M', 'T', 'W', 'Th', 'F', 'S']

  const colStyle = {
    gridTemplateRows: `min-content repeat(${(data.end - data.start)*2}, 1fr)`
  }

  const timeStamps = [
    <p className="heading">Time</p>
  ];

  for (let i = data.start; i < data.end; i++) {
    timeStamps.push(
      <p style={{
        gridRowStart: (i - data.start)*2 + 2,
        gridRowEnd: (i - data.start)*2 + 3
      }}>{i}</p>
    )
  }

  return (
    <div className="timetable">
      <div style={{...colStyle, alignContent: 'flex-start'}}>{timeStamps}</div>
      {data.data.map((col, index) => (
        <div key={index} style={colStyle}>
          <p className="heading">{daysOfWeek[index]}</p>
          {col.map((course) => <CourseBlock course={course} start={data.start} />)}
        </div>
      ))}
    </div>
  )
}

export default Timetable