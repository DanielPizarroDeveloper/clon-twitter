import '../css/Tendency.css'

export function Tendency(){
    return(
        <aside className='lateral-tendency'>
          <section className='lateral-tendency-section'>
            <div className='lateral-tendency-buscar' tabIndex='0'>
              <svg className='lateral-tendency-svg-fill' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
              <input className='lateral-input-buscar' placeholder='Buscar' />
            </div>
            <div className='lateral-panel-result'>
              <span className='lateral-busqueda-resultado'>
                Prueba a buscar personas, listas o palabras clave
              </span>
            </div>
          </section>
          
          <article className='lateral-tendency-article'>
            <div className='lateral-tendency-article-content'>
              <h2>
                Suscríbete a Premium
              </h2>
              <p className='lateral-tendency-parrafo'>
                Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos por anuncios.
              </p>
              <button className='lateral-tendency-button'>
                Suscribirse
              </button>
            </div>
          </article>

          <article className='lateral-tendency-article'>
            <div className='lateral-tendency-article-content'>
              <h2>
                Qué está pasando
              </h2>
            </div>

            <div className='lateral-tendency-group-trending'>
              <div className='lateral-tendency-trending'>
                <img className='lateral-tendency-image-trending' src='https://pbs.twimg.com/semantic_core_img/1811478255695765504/hO4QYqEX?format=jpg&name=240x240'></img>
                <div className='lateral-tendency-content-trending'>
                  <h3>Canadá vs Uruguay</h3>
                  <span className='lateral-tendency-span'>Copa América · Comienza a las 20:00</span>
                </div>
              </div>

              <div className='lateral-tendency-trending'>
                <div className='lateral-tendency-content-span'>
                  <span className='lateral-tendency-span'>Deportes · Tendencia</span>
                  <h3>Copa Chile</h3>
                  <span className='lateral-tendency-span'>420 mil post</span>
                </div>
              </div>

              <div className='lateral-tendency-trending'>
                <div className='lateral-tendency-content-span'>
                  <span className='lateral-tendency-span'>Deportes · Tendencia</span>
                  <h3>Copa Chile</h3>
                  <span className='lateral-tendency-span'>420 mil post</span>
                </div>
              </div>

              <div className='lateral-tendency-trending'>
                <div className='lateral-tendency-content-span'>
                  <span className='lateral-tendency-span'>Deportes · Tendencia</span>
                  <h3>Copa Chile</h3>
                  <span className='lateral-tendency-span'>420 mil post</span>
                </div>
              </div>

              <div className='lateral-tendency-trending'>
                <div className='lateral-tendency-content-span'>
                  <span className='lateral-tendency-span'>Deportes · Tendencia</span>
                  <h3>Copa Chile</h3>
                  <span className='lateral-tendency-span'>420 mil post</span>
                </div>
              </div>

              <div className='lateral-tendency-link'>
                <div className='lateral-tendency-content-span'>
                  <span className='lateral-tendency-text-link'>Mostrar más</span>
                </div>
              </div>
            </div>
          </article>

          <article className='lateral-tendency-article'>
            <div className='lateral-tendency-article-content'>
              <h2>
                A quién seguir
              </h2>  
              <div className='lateral-tendency-panel-seguidor'>
                <div className='lateral-tendency-article-sugerencia'>
                  <div className='lateral-tendency-sugerencia-seguidor'>
                    <img className='lateral-tendency-avatar' src="https://unavatar.io/danielpizarros_" alt="" />
                    <div className='lateral-tendency-info-cuenta'>
                      <span className='lateral-tendency-nombre-usuario'>Daniel Pizarro</span>
                      <span className='lateral-tendency-cuenta'>@danielpizarros_</span>
                    </div>
                  </div>
                  <button className='lateral-tendency-button-seguir'>Seguir</button>
                </div>

                <div className='lateral-tendency-article-sugerencia'>
                  <div className='lateral-tendency-sugerencia-seguidor'>
                    <img className='lateral-tendency-avatar' src="https://unavatar.io/nervomusic" alt="" />
                    <div className='lateral-tendency-info-cuenta'>
                      <span className='lateral-tendency-nombre-usuario'>NERVO</span>
                      <span className='lateral-tendency-cuenta'>@nervomusic</span>
                    </div>
                  </div>
                  <button className='lateral-tendency-button-seguir'>Seguir</button>
                </div>
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
              <div className='lateral-tendency-link'>
                <div className='lateral-tendency-content-span'>
                  <span className='lateral-tendency-text-link'>Mostrar más</span>
                </div>
              </div>
            </div>
          </article>
        </aside>
    )
}