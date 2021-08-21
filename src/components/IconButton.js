function IconButton({ cStyle = {}, icon, onClick = () => {}, bgColor = 'white', color = 'black', text }) {
  return (
    <button
      style={{
        ...cStyle,
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: bgColor,
        color: color
      }}
      onClick={onClick} >
        {icon}
        <p>{text}</p>
      </button>
  )
}

export default IconButton