
import './App.css'
import CountDown from './components/countDown'


function App() {
  return (
    <CountDown autoStart={false} expiryTimeStamp={1743360903} onExpire={() => {
      alert('Time is UP!')
    }} size='large' />
  )
}

export default App
