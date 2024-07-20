import { useState } from 'react';
import listAccount from '../../mocks/Tendency/Follow.json'

export function FollowCard() {
  const Accounts = listAccount;
  const [isFollowing, setIsFollowing] = useState(true)
  const text = isFollowing === true ? 'Siguiendo' : 'Seguir'

  return(
    <article className='lateral-tendency-article'>
      <div className='lateral-tendency-article-content'>
        <h2>
          A quién seguir
        </h2>
      </div>

      {
        Accounts.map(({id, avatar, name, account}) => (
          <div className='lateral-tendency-panel-seguidor' key={id}>
            <div className='lateral-tendency-article-sugerencia'>
              <div className='lateral-tendency-sugerencia-seguidor'>
                <img className='lateral-tendency-avatar' src={avatar} alt="" />
                <div className='lateral-tendency-info-cuenta'>
                  <span className='lateral-tendency-nombre-usuario'>{name}</span>
                  <span className='lateral-tendency-cuenta'>{account}</span>
                </div>
              </div>
              <div className='lateral-tendency-panel-button'>
                <button className='lateral-tendency-button-seguir'>{text}</button>
              </div>
            </div>
          </div>
        ))
      }

      <div className='lateral-tendency-link'>
        <span className='lateral-tendency-text-link'>Mostrar más</span>
      </div>
    </article>
    )
}