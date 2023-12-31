
import './App.css'
import CountDown from './components/countDown'


function App() {

  return (
    <CountDown
      variant='info'
      showHours={false}
      expiryTimeStamp={1704003433}
      onExpire={() => {
        alert('Time is UP!')
      }}
      size='large' />

  )
}

export default App
