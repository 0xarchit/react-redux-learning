import Display from './components/Display';
import ButtonsContainer from './components/ButtonContainer';
import './App.css'
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer />
      </div>
  )
}

export default App
