function CopyModal({ onExit, onCopySubmit }) {
  return (
    <div className="modal">
      {/* <div className="modal-backdrop" onClick={onExit}></div> */}
      <div className="modal-content">
        <h3>Go to Class Schedule on AISIS and paste rows from the tables below</h3>
        <form className="copy-form">
          <input type="text" placeholder="Paste here..."></input>
          <input class="button" type="submit" value="Add" onClick={onCopySubmit}></input>
        </form>
      </div>
    </div>
  )
}

export default CopyModal