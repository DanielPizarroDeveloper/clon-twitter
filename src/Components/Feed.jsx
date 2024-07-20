import '../css/Feed.css'
import { FeedCategory } from './SubComponentsFeed/FeedCategory'
import { ComposeTweetCard } from './SubComponentsFeed/ComposeTweetCard'
import { TweetsCard } from './SubComponentsFeed/TweetsCard'

export function Feed() {
    return(
        <main className="feed">
          <FeedCategory />
          <ComposeTweetCard />
          <TweetsCard />
        </main>
    )
}