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
            </li>
          </ul>
        </nav>
      </section>
    )
}