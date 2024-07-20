import '../css/Menu.css'
import { AccountCard } from './SubComponentsMenu/AccountCard'
import { NavMenu } from './SubComponentsMenu/NavMenu'

export function Menu() {
    return (
      <aside className='lateral-menu'>
        <NavMenu />
        <AccountCard />
      </aside>
    )
}