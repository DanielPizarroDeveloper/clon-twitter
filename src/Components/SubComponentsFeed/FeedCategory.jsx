export function FeedCategory() {
    return(
        <article className='feed-article'>
          <div className='feed-article-border'>
            <button className='feed-article-button'>
              <div className='feed-article-button-content'>
                <span className='feed-article-title'><strong>Para ti</strong></span>
                <span className='feed-article-title-underline'></span>
              </div>
            </button>
            <button className='feed-article-button'>
              <div className='feed-article-button-content'>
                <span className='feed-article-title'><strong>Siguiendo</strong></span>
                <span className='feed-article-title-underline'></span>
              </div>
            </button>
          </div>
        </article>
    )
}