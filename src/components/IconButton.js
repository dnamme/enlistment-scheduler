function IconButton({ cStyle = {}, icon, onClick = () => {}, bgColor = 'white', color = 'black', text }) {
  return (
    <button
      style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: bgColor,
        color: color,
        ...cStyle
      }}
      onClick={onClick} >
        {icon}
        <p style={{ fontWeight: 600 }}>{text}</p>
      </button>
  )
}

export default IconButton