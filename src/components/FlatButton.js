function FlatButton({
  cStyle = {},
  text,
  isOutlined = false,
  onClick,
  themeColor = "#3F51B5",
  textColor,
}) {
  return (
    <button
      style={{
        ...cStyle,
        color: isOutlined ? themeColor : "white",
        backgroundColor: isOutlined ? "transparent" : themeColor,
        border: isOutlined ? `1px solid ${themeColor}` : "none",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default FlatButton
