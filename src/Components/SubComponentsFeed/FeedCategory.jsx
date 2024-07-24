import { useState } from 'react';

export function FeedCategory() {  
  const [forYou, setForYou] = useState(true)
    
    var classNameParaTi = null
    var classNameUnderlineParaTi = null
    var classNameSiguiendo = null
    var classNameUnderlineSiguiendo = null

    forYou == true ?
    (classNameParaTi = 'feed-article-title-selected', classNameUnderlineParaTi = 'feed-article-title-underline-visible') :
    (classNameParaTi = 'feed-article-title-not-selected', classNameUnderlineParaTi = 'feed-article-title-underline-hidden')

    forYou == false ?
    (classNameSiguiendo = 'feed-article-title-selected', classNameUnderlineSiguiendo = 'feed-article-title-underline-visible') :
    (classNameSiguiendo = 'feed-article-title-not-selected', classNameUnderlineSiguiendo = 'feed-article-title-underline-hidden')

    const changeStyle = (status) => {
      status == true ? 
      (classNameParaTi = 'feed-article-title-selected',  classNameSiguiendo = 'feed-article-title-not-selected', classNameUnderlineParaTi = 'feed-article-title-underline-visible', classNameUnderlineSiguiendo = 'feed-article-title-underline-hidden') : 
      (classNameParaTi = 'feed-article-title-not-selected',  classNameSiguiendo = 'feed-article-title-selected', classNameUnderlineParaTi = 'feed-article-title-underline-hidden', classNameUnderlineSiguiendo = 'feed-article-title-underline-visible')
    }

    const handlerChangeToSiguiendo = () => {
      setForYou(true)
      var status = forYou
      changeStyle(status)
    }

    const handlerChangeToParaTi = () => {
      setForYou(false)
      var status = forYou
      changeStyle(status)
    }

    return(
      <article className='feed-article'>
        <div className='feed-article-border'>
          <button className='feed-article-button' onClick={handlerChangeToSiguiendo} >
            <div className='feed-article-button-content'>
              <span className={classNameParaTi}><strong>Para ti</strong></span> 
              <span className={classNameUnderlineParaTi}></span>
            </div>
          </button>

          <button className='feed-article-button' onClick={handlerChangeToParaTi}>
            <div className='feed-article-button-content'>
              <span className={classNameSiguiendo}><strong>Siguiendo</strong></span>
              <span className={classNameUnderlineSiguiendo}></span>
            </div>
          </button>
        </div>
      </article>
    )
}