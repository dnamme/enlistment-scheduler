function CourseBlock({ course }) {
  const style = {
    gridRowStart: course.start + 2,
    gridRowEnd: course.end + 2,
    backgroundColor: course.color ? course.color : 'white'
  }

  return (
    <p className="course-block" style={style}>{course.name}</p>
  )
}

export default CourseBlock