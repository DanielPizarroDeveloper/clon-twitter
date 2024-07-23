import listAccount from '../../mocks/Tendency/Follow.json'
import { SugerenciaAccount } from './FollowCard Component/SugerenciaAccount'

export function FollowCard() {
  const Accounts = listAccount;

  return(
    <article className='lateral-tendency-article'>
      <div className='lateral-tendency-article-content'>
        <h2>
          A quién seguir
        </h2>
      </div>

       {
        Accounts.map(({id, avatar, name, account, status}) => (
          <SugerenciaAccount 
            key={id}
            avatar={avatar}
            name={name}
            account={account}
            status={status}
          />
        ))
    }

      <div className='lateral-tendency-link'>
        <span className='lateral-tendency-text-link'>Mostrar más</span>
      </div>
    </article>
    )
}