// Valores que utilizaremos para activar la barra con los titulos del feed
export function constantesFeed() {
    const feedTitleSelected = 'feed-article-title-selected'
    const feedTitleNotSelected = 'feed-article-title-not-selected'
    const feedUnderLineVisible  = 'feed-article-title-underline-visible'
    const feedUnderLineHidden = 'feed-article-title-underline-hidden'

    return ({feedTitleSelected, feedTitleNotSelected, feedUnderLineVisible, feedUnderLineHidden})
}

// Valores que utilizaremos para activar la barra con los resultados recientes.
export function constanteSearchBar() {
    const lateralPanelVisible = 'lateral-panel-visible'
    const lateralPanelHidden = 'lateral-panel-hidden'

    return ({lateralPanelVisible, lateralPanelHidden})
}

// Valores que utilizaremos para activar o desactivar el icono de eliminar texto de la searchBar
export function constanteButtonSVG() {
    const lateralButtonSVGVisible = 'lateral-button-svg-visible'
    const lateralButtonSVGHidden = 'lateral-button-svg-hidden'

    return ({lateralButtonSVGVisible, lateralButtonSVGHidden})
}