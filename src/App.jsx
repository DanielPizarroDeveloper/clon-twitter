import { Menu } from './Components/Menu'
import { Feed } from './Components/Feed'
import { Tendency } from './Components/Tendency'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Menu />
      <Feed />
      <Tendency />
    </div>
  )
}

export default App