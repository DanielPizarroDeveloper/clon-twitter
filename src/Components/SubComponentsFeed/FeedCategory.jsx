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