import { constantesFeed } from '../Constants/constantesCSS'

export function useInitializeFeed({forYou}){
    const {feedTitleSelected, feedTitleNotSelected, feedUnderLineVisible, feedUnderLineHidden} =  constantesFeed()

    var classNameParaTi = null
    var classNameUnderlineParaTi = null
    var classNameSiguiendo = null
    var classNameUnderlineSiguiendo = null
    
    forYou == true ?
    (classNameParaTi = feedTitleSelected, classNameUnderlineParaTi = feedUnderLineVisible) :
    (classNameParaTi = feedTitleNotSelected, classNameUnderlineParaTi = feedUnderLineHidden)
    
    forYou == false ?
    (classNameSiguiendo = feedTitleSelected, classNameUnderlineSiguiendo = feedUnderLineVisible) :
    (classNameSiguiendo = feedTitleNotSelected, classNameUnderlineSiguiendo = feedUnderLineHidden)

    const changeStyle = (status) => {
      status == true ? 
      (classNameParaTi = feedTitleSelected,  classNameSiguiendo = feedTitleNotSelected, classNameUnderlineParaTi = feedUnderLineVisible, classNameUnderlineSiguiendo = feedUnderLineHidden) : 
      (classNameParaTi = feedTitleNotSelected,  classNameSiguiendo = feedTitleSelected, classNameUnderlineParaTi = feedUnderLineHidden, classNameUnderlineSiguiendo = feedUnderLineVisible)
    }

    return ({classNameParaTi, classNameUnderlineParaTi, classNameSiguiendo, classNameUnderlineSiguiendo, changeStyle})
}