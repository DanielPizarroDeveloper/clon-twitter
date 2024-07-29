import { useEffect, useState, useRef } from 'react'
import { useInitializeSearchBar } from '../../Hook/selecteFeed'

export function SearchBar() {
  
  const clickBar = useRef(null)
  const [result, setResult] = useState(false)
  const {lateralPanelResult} = useInitializeSearchBar({result})
  //var SVGLupa = null

  useEffect(() => {
    // if(clickBar.current.value != null || clickBar.current.value != '') {
    //   SVGLupa = 'XXX'
    //   return
    // }

    //Validamos si se hace click fuera del elemento input
    const handleClickOutside = (event) => {
      if (clickBar.current && !clickBar.current.contains(event.target)) {
        setResult(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [clickBar]);

  const handlerChangeResult = () => {
    var status = !result
    setResult(status)
  }
  
  return(
      <section className='lateral-tendency-section'>
        <div className='lateral-tendency-buscar' tabIndex='0'>
          <svg className='lateral-tendency-svg-fill' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
          <input className='lateral-input-buscar' placeholder='Buscar' name='buscar' ref={clickBar} onClick={handlerChangeResult}/>
          <svg style={{padding: '5px', position: 'relative', top: '7px', right: '-15px', width: '15px', height: '15px', backgroundColor: '#1d9bf0', borderRadius: '100px'}} className='SVGLupa' viewBox="0 0 15 15" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-cqee49 r-1or9b2r r-5soawk"><g><path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path></g></svg>
        </div>
        <div className={lateralPanelResult}>
          <span className='lateral-busqueda-resultado'>
            Prueba a buscar personas, listas o palabras clave
          </span>
        </div>
      </section>
  )
}