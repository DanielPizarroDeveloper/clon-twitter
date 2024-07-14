import { Menu } from './Components/Menu'
import { Tendency } from './Components/Tendency'
import './App.css'

function App() {
  return (
    <div style={{display:'flex', flexDirection: 'column'}}>
      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Menu />
        <Tendency/>
      </div>
    </div>
  )
}

export default App