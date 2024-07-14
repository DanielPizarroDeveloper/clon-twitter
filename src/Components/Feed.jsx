export function Feed() {
    return(
        <main style={{width: '38.5%', borderLeft: '1px solid white', borderRight: '1px solid white', height: '100dvh'}}>
          <article>
            <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid white'}}>
              <article>
                Para ti
              </article>
              <article>
                Siguiendo
              </article>
            </div>
            ¡¿Que esá pensando?!
            Cualquier persona puede responder
            <hr></hr>
            (Iconos - Imagen - Gif - Encuesta - Emoji - Programación - Ubicación) [Boton Postear]
          </article>

          <section style={{textAlign: 'center'}}>
            Sección de noticias donde se cargara la información
          </section>
        </main>
    )
}