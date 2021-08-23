function CourseBlock({ course, start }) {
  const style = {
    gridRowStart: (course.start - start) * 2 + 2,
    gridRowEnd: (course.end - start) * 2 + 2,
  }

  return (
    <div className="course-block" style={style}>
      <div
        className="course-block-bg"
        style={{ backgroundColor: course.color ? course.color : "beige" }}
      />
      <p className="time start">{course.startTime}</p>
      <p className="course-code">{course.code}</p>
      <p className="time end">{course.endTime}</p>
    </div>
  )
}

export default CourseBlock
