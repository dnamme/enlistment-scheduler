function CourseBlock({ course, start }) {
  const style = {
    gridRowStart: (course.start - start)*2 + 2,
    gridRowEnd: (course.end - start)*2 + 2,
    backgroundColor: course.color ? course.color : 'white'
  }

  return (
    <div className="course-block" style={style}>
      <p className="time start">{course.startTime}</p>
      <p className="course-code">{course.code}</p>
      <p className="time end">{course.endTime}</p>
    </div>
  )
}

export default CourseBlock