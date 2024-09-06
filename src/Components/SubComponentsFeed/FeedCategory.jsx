import { useState } from 'react';
import { useInitializeFeed } from '../../Hook/selecteFeed'
import { constantesFeed } from '../../Constants/constantesCSS'

export function FeedCategory() {
  
  const [forYou, setForYou] = useState(true)
  const {feedTitleSelected, feedTitleNotSelected, feedUnderLineVisible, feedUnderLineHidden} =  constantesFeed()
  var { classNameParaTi, classNameUnderlineParaTi, classNameSiguiendo, classNameUnderlineSiguiendo } = useInitializeFeed({forYou})
  
  const changeStyle = (status) => {
    status == true ? 
    (classNameParaTi = feedTitleSelected,  classNameSiguiendo = feedTitleNotSelected, classNameUnderlineParaTi = feedUnderLineVisible, classNameUnderlineSiguiendo = feedUnderLineHidden) : 
    (classNameParaTi = feedTitleNotSelected,  classNameSiguiendo = feedTitleSelected, classNameUnderlineParaTi = feedUnderLineHidden, classNameUnderlineSiguiendo = feedUnderLineVisible)
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
    <>
      <div className='feed-bar-responsive'>
        <div className='feed-bar-responsive-content'>
          <div className='feed-bar-responsive-panel-img'>
            <img className='feed-bar-responsive-user-img' src="https://unavatar.io/danielpizarros_" alt="" />
          </div>
          <button className='feed-bar-responsive-div'>
            <svg className='feed-bar-responsive-svg' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
          </button>
          <div className='feed-bar-responsive-text'>
            <span>Obtén Premium</span>
          </div>
        </div>
      </div>
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
    </>
  )
}