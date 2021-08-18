function CourseBlock({ course }) {
  const style = {
    gridRowStart: course.start + 2,
    gridRowEnd: course.end + 2,
    backgroundColor: course.color ? course.color : 'white'
  }

  return (
    <p className="course-block" style={style}>
      <p className="time start">{course.startTime}</p>
      <p className="course-code">{course.code}</p>
      <p className="time end">{course.endTime}</p>
    </p>
  )
}

export default CourseBlock