import TendencyNow from '../../mocks/Tendency/Tendency.json'

export function TendencyCard() {
    const Tendency = TendencyNow
    return(
        <article className='lateral-tendency-article'>
            <div className='lateral-tendency-article-content'>
              <h2>
                Qué está pasando
              </h2>
            </div>

            <div className='lateral-tendency-group-trending'>
              <div className='lateral-tendency-important-trending'>
                <img className='lateral-tendency-image-trending' src='@img\Futbol.jpg'></img>
                <div className='lateral-tendency-content-trending'>
                  <h3>Canadá vs Uruguay</h3>
                  <span className='lateral-tendency-span'>Copa América · Comienza a las 20:00</span>
                </div>
              </div>

              {
                Tendency.map(({id, title, SubTitle, numberPost}) => (
                  <div className='lateral-tendency-trending' key={id}>
                    <div className='lateral-tendency-content-span'>
                      <span className='lateral-tendency-span'>{title}</span>
                      <h3  key={id}>
                        {SubTitle}
                      </h3>
                      <span className='lateral-tendency-span'>{numberPost}</span>
                    </div>
                    <button className='lateral-tendency-button-svg'>
                      <div className='lateral-tendency-background'></div>
                      <svg className='lateral-tendency-option-svg' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                    </button>
                  </div>
                ))
              }
            </div>
            
            <div className='lateral-tendency-link'>
              <span className='lateral-tendency-text-link'>Mostrar más</span>
            </div>
          </article>
    )
}