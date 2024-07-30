import { useEffect, useState, useRef } from 'react'
import { useInitializeSearchBar, useInitializeButtonSearch } from '../../Hook/selecteFeed'

function useEffectSearchBar() {
  const isFirstInput = useRef(false)
  const [search, setSearch] = useState(null)
  const [result, setResult] = useState(false)
  const [clickBarChange, setClickBarChange] = useState(false)

  const { lateralButtonSVG } = useInitializeButtonSearch({result})
  const {lateralPanelResult} = useInitializeSearchBar({clickBarChange})

  //Validamos si hay texto en el input para mostrar el botón de eliminar texto
  useEffect(() => {
    if (isFirstInput.current == false) {
      isFirstInput.current = true
      setResult(true)
    }
    
    search != null && search != '' ? setResult(true) : setResult(false)

  }, [search])

  //Validamos si se hace click fuera del elemento input
  useEffect(() => {
    const handleClickOutside = () => {
      clickBarChange ? setClickBarChange(!clickBarChange) : setClickBarChange(!clickBarChange)
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }

  }, [clickBarChange])

  return ({setSearch, setResult, lateralButtonSVG, lateralPanelResult})
}

export function SearchBar() {
  const {setSearch, setResult, lateralButtonSVG, lateralPanelResult} = useEffectSearchBar()

  const Msj = () => {
    var inputSearch = document.getElementsByName('buscar')
    inputSearch[0].value = null
    setResult(false)
  }

  const handlerChangeInput = (event) => {
    var newValue = event.target.value
    setSearch(newValue)
    setResult(true)
  }
  
  return(
      <section className='lateral-tendency-section'>
        <div className='lateral-tendency-buscar' tabIndex='0'>
          <svg className='lateral-tendency-svg-fill' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
          <input className='lateral-input-buscar' placeholder='Buscar' name='buscar' onChange={handlerChangeInput}/>
          <button className={lateralButtonSVG} onClick={Msj}>
            <svg className='lateral-svg-buscar' viewBox="0 0 15 15" aria-hidden="true"><g><path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path></g></svg>
          </button>
        </div>
        <div className={lateralPanelResult}>
          <span className='lateral-busqueda-resultado'>
            Prueba a buscar personas, listas o palabras clave
          </span>
        </div>
      </section>
  )
}