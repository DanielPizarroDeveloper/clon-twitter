import '../css/Tendency.css'
import { FollowCard } from './SubComponentsTendency/FollowCard'
import { OptionCard } from './SubComponentsTendency/OptionsCard'
import { TendencyCard } from './SubComponentsTendency/TendencyCard'
import { SubscribeCard } from './SubComponentsTendency/SubscribeCard'
import { SearchBar } from './SubComponentsTendency/SearchBar'

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