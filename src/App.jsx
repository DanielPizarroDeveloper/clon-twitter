import { Menu } from './Components/Menu'
import { Feed } from './Components/Feed'
import { Tendency } from './Components/Tendency'
import './App.css'

function App() {
  return (
    <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Menu />
      <Feed />
      <Tendency />
    </div>
  )
}

export default App