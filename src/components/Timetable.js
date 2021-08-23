import CourseBlock from "./CourseBlock"

function Timetable({ data }) {
  const daysOfWeek = ["M", "T", "W", "Th", "F", "S"]

  const colStyle = {
    gridTemplateRows: `48px repeat(${(data.end - data.start) * 2}, 1fr)`,
  }

  const timeStamps = [<p key={`TIMETABLE-HEADING`} className="heading" />]

  for (let i = data.start; i < data.end; i += 0.5) {
    if (!Number.isInteger(i)) continue

    timeStamps.push(
      <p
        key={`TIMETABLE-TIME_${i}`}
        className="timestamp"
        style={{
          gridRowStart: (i - data.start) * 2 + 2,
          gridRowEnd: (i - data.start) * 2 + 3,
        }}
      >
        {i}
      </p>
    )
  }

  return (
    <div className="timetable">
      <div style={{ ...colStyle, alignContent: "flex-start" }}>
        {timeStamps}
      </div>
      {data.data.map((col, index) => (
        <div key={`TIMETABLE-COL_${daysOfWeek[index]}`} style={colStyle}>
          <p className="heading">{daysOfWeek[index]}</p>

          {col.map((course) => (
            <CourseBlock
              key={`TIMETABLE-BLOCK_${daysOfWeek[index]}_${course.code}_${course.uuid}`}
              course={course}
              start={data.start}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Timetable
