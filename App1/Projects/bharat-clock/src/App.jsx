import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'

function App() {
  return <center>
    <ClockHeading />
    <ClockSlogan />
    <CurrentTime />
  </center>
}

export default App
