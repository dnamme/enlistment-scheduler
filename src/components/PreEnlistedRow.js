import { FaTimes } from "react-icons/fa"

function PreEnlistedRow({ row, onDelete }) {
  return (
    <div className="input-row">
      <p>{row.code}</p>
      <p>{row.section}</p>
      <p>{row.title}</p>
      <p>{row.instructor}</p>
      <p>{row.schedLoc}</p>

      <FaTimes
        style={{ cursor: "pointer", marginLeft: "auto" }}
        onClick={onDelete}
      />
    </div>
  )
}

export default PreEnlistedRow
