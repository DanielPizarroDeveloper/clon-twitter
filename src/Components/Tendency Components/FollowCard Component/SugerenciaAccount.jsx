import { useState } from 'react';

export function SugerenciaAccount({avatar, name, account, status}) {
  
  const [isFollowing, setIsFollowing] = useState(status)
  const text = isFollowing === true ? 'Siguiendo' : 'Seguir'

  const followAction = () => {
    isFollowing == false ? setIsFollowing(true) : setIsFollowing(false)
  }

  const changeStyle = isFollowing
  ? 'lateral-tendency-button-siguiendo' :
  'lateral-tendency-button-seguir'

  return(
      <article className='lateral-tendency-panel-seguidor'>
        <div className='lateral-tendency-panel-seguidor'>
          <div className='lateral-tendency-article-sugerencia'>
            <div className='lateral-tendency-sugerencia-seguidor'>
              <img className='lateral-tendency-avatar' src={avatar} alt="" />
              <div className='lateral-tendency-info-cuenta'>
                <span className='lateral-tendency-nombre-usuario'>{name}</span>
                <span className='lateral-tendency-cuenta'>{account}</span>
              </div>
            </div>
            <div className='lateral-tendency-panel-button' >
                <button onClick={followAction} className={changeStyle}>
                    <span className='lateral-tendency-msj-seguir'>{text}</span>
                    <span className='lateral-tendency-msj-dejar-seguir'>Dejar de seguir</span>
               </button>
            </div>
          </div>
        </div>
      </article>
  )
}