import { useState } from 'react'

import CopyModal from './CopyModal'
import InputGroup from "./InputGroup"

function InputContainer({ data, onManualSubmit, onCopySubmit }) {
  const [modalActive, setModalActive] = useState(false)

  const toggleModal = () => setModalActive(!modalActive)

  const _onCopySubmit = (data) => {
    toggleModal()
    onCopySubmit(data)
  }

  return (
    <div className="input-container">
      {
        modalActive
          ? <CopyModal onExit={toggleModal} onCopySubmit={_onCopySubmit} />
          : <></>
      }

      { data.map((g) =>
        <InputGroup key={`INPUT-GROUP_${g.code}`} group={g} onCopyClick={toggleModal} />)
      }
    </div>
  )
}

export default InputContainer