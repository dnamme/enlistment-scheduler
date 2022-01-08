import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { randomColor } from "randomcolor"
import { FaArrowDown } from "react-icons/fa"

import CopyModal from "./components/CopyModal"
import InputHeader from "./components/InputHeader"
import InputRow from "./components/InputRow"
import PreEnlistedRow from "./components/PreEnlistedRow"
import Timetable from "./components/Timetable"

import "./css/App.css"
import "./css/Input.css"
import "./css/Modal.css"
import "./css/Timetable.css"

function App() {
  const [preEnlistedData, setPreEnlistedData] = useState([])
  const [data, setData] = useState([
    {
      color: randomColor(),
      keyCode: uuidv4(),
      courses: [],
    },
  ])
  const [groupedData, setGroupedData] = useState({
    start: 8,
    end: 17,
    data: [],
  })

  useEffect(() => {
    // rebuild timetable
    let nstart = 24
    let nend = 0
    let ndata = [[], [], [], [], []]

    const daysOfWeek = ["M", "T", "W", "TH", "F", "S"]

    // adding pre-enlisted
    preEnlistedData.forEach((row) => {
      let schedLoc = row.schedLoc
      let rawDays = schedLoc.split("/")[0].split(" ")[0]
      let days = []
      for (let i = 0; i < 6; i++) {
        if (rawDays.includes(daysOfWeek[i]) || rawDays.includes("D"))
          days[i] = true
        else days[i] = false
      }

      let rstart = parseInt(schedLoc.split("/")[0].split(" ")[1].split("-")[0]) // in xxxx form
      let rend = parseInt(schedLoc.split("/")[0].split(" ")[1].split("-")[1]) // in xxxx form

      let rstart_hr = Math.floor(rstart / 100) + (rstart % 100) / 60
      let rend_hr = Math.floor(rend / 100) + (rend % 100) / 60

      if (rstart_hr < nstart) nstart = rstart_hr
      if (rend_hr > nend) nend = rend_hr

      let st_hr = Math.floor(rstart / 100)
      let ed_hr = Math.floor(rend / 100)

      for (let i = 0; i < 6; i++) {
        if (days[i]) {
          if (i === 5 && ndata.length <= 5) ndata[i] = []

          ndata[i].push({
            color: row.color, // random
            code: row.code,
            start: rstart_hr, // in x.x form
            end: rend_hr, // in x.x form
            startTime: `${st_hr > 12 ? st_hr - 12 : st_hr}:${Math.floor(
              rstart % 100
            )
              .toString()
              .padStart(2, "0")} ${rstart < 1200 ? "AM" : "PM"}`,
            endTime: `${ed_hr > 12 ? ed_hr - 12 : ed_hr}:${Math.floor(
              rend % 100
            )
              .toString()
              .padStart(2, "0")} ${rend < 1200 ? "AM" : "PM"}`,
            uuid: row._uuid,
          })
        }
      }
    })

    // adding selected input
    data.forEach((group) => {
      for (let i = 0; i < group.courses.length; i++) {
        if (group.courses[i].selected) {
          let rawDays = group.courses[i].time.split(" ")[0]
          let days = []
          for (let j = 0; j < 6; j++) {
            if (rawDays.includes(daysOfWeek[j]) || rawDays.includes("D"))
              days[j] = true
            else days[j] = false
          }

          let intStart = parseInt(
            group.courses[i].time.split(" ")[1].split("-")[0]
          ) // in xxxx form
          let intEnd = parseInt(
            group.courses[i].time.split(" ")[1].split("-")[1]
          ) // in xxxx form

          let rstart_hr = Math.floor(intStart / 100) + (intStart % 100) / 60 // in x.x form
          let rend_hr = Math.floor(intEnd / 100) + (intEnd % 100) / 60 // in x.x form

          if (rstart_hr < nstart) nstart = rstart_hr
          if (rend_hr > nend) nend = rend_hr

          let st_hr = Math.floor(intStart / 100)
          let ed_hr = Math.floor(intEnd / 100)

          for (let j = 0; j < 6; j++) {
            if (days[j]) {
              ndata[j].push({
                color: group.color,
                code: group.courses[i].code,
                start: rstart_hr, // in x.x form
                end: rend_hr, // in x.x form
                startTime: `${st_hr > 12 ? st_hr - 12 : st_hr}:${(
                  intStart % 100
                )
                  .toString()
                  .padStart(2, "0")} ${rstart_hr < 12 ? "AM" : "PM"}`,
                endTime: `${ed_hr > 12 ? ed_hr - 12 : ed_hr}:${(intEnd % 100)
                  .toString()
                  .padStart(2, "0")} ${rend_hr < 12 ? "AM" : "PM"}`,
                uuid: group.courses[i]._uuid,
              })
            }
          }

          break
        }
      }
    })

    // change state
    setGroupedData({
      start: nstart,
      end: nend,
      data: ndata,
    })
  }, [preEnlistedData, data])

  const selectClassFromGroup = (kc, code, section) => {
    let nrd = data

    nrd.forEach((group) => {
      if (group.keyCode === kc) {
        group.courses.forEach((row) => {
          if (row.code === code && row.section === section) row.selected = true
          else row.selected = false
        })
      }
    })

    setData([...nrd])
  }

  const onManualAddSubmit = (kc, d) => {}

  const onCopySubmit = (kc, d) => {
    setCopyModalCode(null)

    let raw_rows = d.split("\n")
    let new_data = []

    if (kc !== -1) {
      // split
      for (let i = 0; i < raw_rows.length; i++) {
        raw_rows[i] = raw_rows[i].split("\t")
      }

      // combine
      for (let i = 0; i < raw_rows.length - 1; i++) {
        if (raw_rows[i].length === 5 && raw_rows[i + 1].length === 10) {
          raw_rows[i][4] += " " + raw_rows[i + 1][0]
          for (let j = 1; j < 10; j++) {
            raw_rows[i].push(raw_rows[i + 1][j])
          }
        }
      }

      raw_rows.forEach((cols) => {
        if (cols.length === 14) {
          let rawDays = cols[4].split(" ")[0].toUpperCase()
          const daysOfWeek = ["M", "T", "W", "TH", "F", "S"]
          let days = []

          if (rawDays.includes("TUTORIAL")) days.fill(false, 0, 6)
          else {
            for (let i = 0; i < 6; i++) {
              if (rawDays.includes(daysOfWeek[i]) || rawDays.includes("D"))
                days[i] = true
              else days[i] = false
            }
          }

          let st = parseInt(cols[4].split(" ")[1].split("-")[0])
          let en = parseInt(cols[4].split(" ")[1].split("-")[1])

          new_data.push({
            code: cols[0],
            section: cols[1],
            name: cols[2],
            units: cols[3],
            time: cols[4], // raw string
            room: cols[5],
            instructor: cols[6],
            max_slots: cols[7],
            lang: cols[8],
            level: cols[9], // not needed
            free_slots: cols[10],
            remarks: cols[11],
            s: cols[12], // not needed
            p: cols[13], // not needed
            selected: false, // default
            _uuid: uuidv4(),
            _days: days,
            _start: Math.floor(st / 100) + (st % 100) / 100, // in x.x (hr) form
            _end: Math.floor(en / 100) + (st % 100) / 100, // in x.x (hr) form
          })
        }
      })

      let nrd = data
      nrd.forEach((group) => {
        if (group.keyCode === kc) {
          group.courses.push(...new_data)
        }
      })

      // create new group if last has data
      if (nrd.length > 0 && nrd[nrd.length - 1].courses.length > 0) {
        nrd.push({
          color: randomColor(),
          keyCode: uuidv4(),
          courses: [],
        })
      }

      setData(nrd)
    } else {
      let nrped = preEnlistedData

      raw_rows.forEach((row) => {
        let cols = row.split("\t")

        if (cols.length === 8) {
          new_data.push({
            code: cols[0],
            units: cols[1], // not needed
            title: cols[2],
            section: cols[3],
            instructor: cols[4],
            schedLoc: cols[5], // T-TH 1400-1600 / TBA
            credit: cols[6], // not needed
            remarks: cols[7], // not needed
            color: randomColor(), // random
            _uuid: uuidv4(),
          })
        }
      })

      setPreEnlistedData([...nrped, ...new_data])
    }
  }

  const [manualAddCode, setManualAddCode] = useState(null)
  const [copyModalCode, setCopyModalCode] = useState(null)

  const deleteGroup = (kc) =>
    setData(data.filter((group) => group.keyCode !== kc))
  const deleteRow = (kc, code, section) => {
    if (kc !== -1) {
      let nrd = data

      nrd.forEach((group) => {
        if (group.keyCode === kc) {
          for (let i = group.courses.length - 1; i >= 0; i--) {
            if (
              group.courses[i].code === code &&
              group.courses[i].section === section
            )
              group.courses.splice(i, 1)
          }
        }
      })

      setData([...nrd])
    } else {
      let nrped = preEnlistedData

      for (let i = nrped.length - 1; i >= 0; i--) {
        if (nrped[i].code === code && nrped[i].section) nrped.splice(i, 1)
      }

      setPreEnlistedData([...nrped])
    }
  }

  const emptyTextWrapperStyle = { padding: "32px" }
  const emptyTextStyle = {
    textAlign: "center",
    margin: "0 auto",
    maxWidth: "512px",
  }

  return (
    <div className="app">
      <div style={{ overflowY: "scroll" }}>
        {/* modals */}
        {
          // manualAddCode != null && <AddModal
          //   keyCode={manualAddCode}
          //   onAddClick={() => {}}
          //   onExitClick={() => {}} />
        }
        {copyModalCode != null && (
          <CopyModal
            keyCode={copyModalCode}
            onAddClick={onCopySubmit}
            onExitClick={() => setCopyModalCode(null)}
          />
        )}

        <header>
          <h3>Enlistment Scheduler</h3>
        </header>

        <div>
          {/* pre-enlisted header */}
          <InputHeader
            onAddClick={() => {}}
            onCopyClick={() => setCopyModalCode(-1)}
            isPreEnlisted={true}
          />
          {/* pre-enlisted rows or empty text */}
          {preEnlistedData.length > 0 ? (
            preEnlistedData.map((row) => (
              <PreEnlistedRow
                key={`PRE-ENLISTED_${row.code}_${row.section}_${row._uuid}`}
                row={row}
                onDelete={() => deleteRow(-1, row.code, row.section)}
              />
            ))
          ) : (
            <div style={emptyTextWrapperStyle}>
              <p style={emptyTextStyle}>
                Looks like you haven't added any pre-enlisted classes yet! If
                you have any, click the <strong>Paste from AISIS</strong> button
                to add.
              </p>
            </div>
          )}
        </div>

        {/* build headers and rows */}
        {data.map((group, gi) => (
          <div key={`INPUT-GROUP_${group.keyCode}`}>
            <InputHeader
              key={`INPUT-HEADER_${group.code}`}
              color={group.color}
              onAddClick={() => {}}
              onCopyClick={() => setCopyModalCode(group.keyCode)}
              onDeleteClick={() => deleteGroup(group.keyCode)}
              showDelete={data.length > 1 && gi != data.length - 1}
            />

            {group.courses.length > 0 ? (
              group.courses.map((row) => (
                <InputRow
                  key={`INPUT-ROW_${group.keyCode}_${row.code}_${row.section}_${row._uuid}`}
                  row={row}
                  onSelect={() =>
                    selectClassFromGroup(group.keyCode, row.code, row.section)
                  }
                  onDelete={() =>
                    deleteRow(group.keyCode, row.code, row.section)
                  }
                />
              ))
            ) : (
              <div style={emptyTextWrapperStyle}>
                <p style={emptyTextStyle}>
                  Click the <strong>Paste from AISIS</strong> button to add your
                  classes!
                </p>
              </div>
            )}
          </div>
        ))}

        {/* bottom */}
        <div id="bottom" />
      </div>

      <Timetable data={groupedData} />

      {/* scroll to bottom */}
      <a className="scroll-to-bot" href="#bottom">
        <div>
          <FaArrowDown size="24px" />
        </div>
      </a>

      {/* footer */}
      <footer>
        <p>&copy; Emman Evangelista &bull; v.1.0.4</p>
      </footer>
    </div>
  )
}

export default App
