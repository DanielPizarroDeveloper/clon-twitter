export function AccountCard() {
    return(
        <section className='lateral-menu-section-profile'>
          <article className='lateral-menu-article-profile'>
            <div className='lateral-menu-profile'>
              <div className='lateral-menu-profile-content'>
                <img className='lateral-menu-avatar' src="https://unavatar.io/danielpizarros_" alt="" />
                <div className='lateral-menu-account-info'>
                  <strong><span className='lateral-menu-user-name'>Danielpizarro_</span></strong>
                  <span className='lateral-menu-user-account'>@Danielpizarros_</span>
                </div>
                <button className='feed-post-option'>
                  <svg className='feed-post-option-svg' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                </button>
              </div>
            </div>
          </article>
        </section>
    )
}