import '../css/Tendency.css'
import { FollowCard } from './Tendency Components/FollowCard'
import { OptionCard } from './Tendency Components/OptionsCard'
import { TendencyCard } from './Tendency Components/TendencyCard'
import { SubscribeCard } from './Tendency Components/SubscribeCard'
import { SearchBar } from './Tendency Components/SearchBar'

export function Tendency(){
    return(
        <aside className='lateral-tendency'>
          <SearchBar />
          <SubscribeCard />
          <TendencyCard />
          <FollowCard />
          <OptionCard />
        </aside>
    )
}