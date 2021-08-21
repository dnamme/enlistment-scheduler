function IconButton({ cStyle = {}, icon, bgColor = 'white', color = 'black', text }) {
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
      }}>
        {icon}
        <p>{text}</p>
      </button>
  )
}

export default IconButton