import InputContainer from './components/InputContainer'
import Timetable from './components/Timetable'
import './css/App.css'
import './css/Input.css'
import './css/Timetable.css'

function App() {
  return (
    <div className="app">
      <InputContainer />
      <Timetable />
    </div>
  )
}

export default App