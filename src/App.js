import React, {useState, useEffect} from 'react'
//imports locais
import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'
import './styles.css'


function App() {
  const [numVoltas,setNumvoltas] = useState(0)
  const [running,setRunning] = useState(false)
  const [tempo,setTempo] = useState(0)

  useEffect(() => {
    let timer = null
    if (running) {
      console.log('toggle!')
      timer = setInterval(() => {
        setTempo(old => old + 1)
        console.log('interval',running)
      }, 1000);
    }
    return () => {
      if (timer) {
        //truthy valor que é convertido para true
        clearInterval(timer)
      }
    }
  },[running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
      setNumvoltas(numVoltas + 1)
    }

  const decrement = () => {
    if (numVoltas > 0) {
      setNumvoltas(numVoltas - 1)
    }
  }

  const reset = () => {
    setNumvoltas(0)
    setTempo(0)
  }
 
  return (
    <div >
      <MostraVoltas voltas={numVoltas}/>
      <Button text='+' className='bigger' onClick={increment}/>
      <Button text='-' className='bigger' onClick={decrement}/>
      <br/>
      {
        numVoltas > 0 &&
        <MostraTempo text='Tempo medio por volta.' className='tempo' tempo={tempo / numVoltas}/>
      }
      <MostraTempo text='Tempo Total.' className='tempoTotal' tempo={tempo}/>
      <br/>
      <Button onClick={toggleRunning} text={ running ? 'Pausar!' : 'Iniciar!'}/>
      <Button onClick={reset} text='Reiniciar!'/>
    </div>
  );
}

export default App
