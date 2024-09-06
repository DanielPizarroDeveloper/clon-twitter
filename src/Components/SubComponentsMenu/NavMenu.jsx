import ListadoOpcionesMenu from '../../mocks/Menu/ListMenu.json'

export function NavMenu() {
  const ListadoMenu = ListadoOpcionesMenu;

    return(
      <section className="lateral-menu-icon">
        <nav>
          <ul className='lateral-list-ul'>
            <li className='lateral-menu-li'>
              <button className='lateral-menu-button'>
                <svg className='svg-fill' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
              </button>
            </li>

            {
              ListadoMenu.map(({id, title, elementSVG, secondElementSVG}) => (
                <li className='lateral-menu-li' key={id}>
                  <button className='lateral-menu-button'>
                    <svg className='svg-fill' viewBox="0 0 24 24" aria-hidden="true"><g><path d={elementSVG}></path><path d={secondElementSVG}></path></g></svg>
                    <span className='lateral-menu-option'>{title}</span>
                  </button>
                </li>
              ))
            }

            <li className='lateral-menu-li'>
              <button className='lateral-menu-button-post'>
                <span className='lateral-menu-button-text'>Postear</span>
              </button>
              <button className='lateral-menu-button-post-responsive'>
                <svg className='svg-fill' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
              </button>
            </li>
          </ul>
        </nav>
      </section>
    )
}