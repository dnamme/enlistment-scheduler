import { useState } from 'react'

import CopyModal from './CopyModal'
import InputGroup from "./InputGroup"

function InputContainer({ onManualSubmit, onCopySubmit }) {
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
      <InputGroup onCopyClick={toggleModal} />
    </div>
  )
}

export default InputContainer