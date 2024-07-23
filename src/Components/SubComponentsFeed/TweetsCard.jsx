export function TweetsCard({name, account, date, description, image1, comments, SVGComment, retweet, SVGRetweet, like, SVGLike, view, SVGView, saveSVG, shareSVG, optionSVG}) {
    return (
        <section className='feed-section'>
            <article className='feed-post'>
              <div className='feed-post-info' >
                <div className='feed-post-user'>
                  <img className='feed-article-avatar' src="https://unavatar.io/danielpizarros_" alt="" />
                  <span className='feed-post-name'><strong>{name}</strong></span>
                  <span className='feed-post-username'>{account}· {date}</span>
                </div>

                <button className='feed-post-button-svg'>
                  <div className='feed-svg-background-light-blue'></div>
                  <svg className='feed-post-option-svg' viewBox="0 0 24 24" aria-hidden="true"><g><path d={optionSVG}></path></g></svg>
                </button>
              </div>

              <div className='feed-post-content'>
                <p className='feed-post-content-text'>{description}</p>
                {/* <p className='feed-post-content-text'>The therapy:</p> */}

                <img className='feed-post-image' src={image1} alt=''></img>
              
                <div className='feed-post-panel-svg'>
                  <div className='feed-post-change-color'>
                    <button className='feed-post-button-svg'>
                      <div className='feed-svg-background-light-blue'></div>
                      <div className='feed-post-change-color'>
                        <svg className='feed-post-response-svg' viewBox="0 0 24 24" aria-hidden="true"><g><path d={SVGComment}></path></g></svg>
                      </div>
                    </button>
                    <span className='feed-post-svg-number-response'>{comments}</span>
                  </div>

                  <div className='feed-post-change-color'>
                    <button className='feed-post-button-svg'>
                      <div className='feed-svg-background-light-green'></div>
                      <div className='feed-post-change-color'>
                      <svg className='feed-post-repost-svg' viewBox="0 0 24 24" aria-hidden="true"><g><path d={SVGRetweet}></path></g></svg>
                      </div>
                    </button>
                    <span className='feed-post-svg-number-repost'>{retweet}</span>
                  </div>

                  <div className='feed-post-change-color'>
                    <button className='feed-post-button-svg'>
                      <div className='feed-svg-background-light-pink'></div>
                      <div className='feed-post-change-color'>
                        <svg className='feed-post-like-svg' viewBox="0 0 24 24" aria-hidden="true"><g><path d={SVGLike}></path></g></svg>
                      </div>
                    </button>
                    <span className='feed-post-svg-number-like'>{like}</span>
                  </div>

                  <div className='feed-post-change-color'>
                    <button className='feed-post-button-svg'>
                      <div className='feed-svg-background-light-blue'></div>
                      <div className='feed-post-change-color'>
                        <svg className='feed-post-view-svg' viewBox="0 0 24 24" aria-hidden="true"><g><path d={SVGView}></path></g></svg>
                      </div>
                    </button>
                    <span className='feed-post-svg-number-view'>{view}</span>
                  </div>

                  <div className='feed-post-button-more-options'>
                    <button className='feed-post-button-svg'>
                      <div className='feed-svg-background-light-blue'></div>
                      <div className='feed-post-button-svg'>
                      <svg className='feed-post-svg' viewBox="0 0 24 24" aria-hidden="true"><g><path d={saveSVG}></path></g></svg>
                      </div>
                    </button>

                    <button className='feed-post-button-svg'>
                      <div className='feed-svg-background-light-blue'></div>
                        <div className='feed-post-button-svg'>
                        <svg className='feed-post-svg' viewBox="0 0 24 24" aria-hidden="true"><g><path d={shareSVG}></path></g></svg>
                      </div>
                    </button>             
                  </div>
                </div>
              </div>
            </article>
        </section>
    )
}