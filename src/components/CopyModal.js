function CopyModal({ onExit, onCopySubmit }) {
  return (
    <div className="modal">
      {/* <div className="modal-backdrop" onClick={onExit}></div> */}
      <div className="modal-content">
        <p>Hello World</p>
        <button onClick={onCopySubmit}>Add</button>
      </div>
    </div>
  )
}

export default CopyModal