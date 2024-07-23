import '../css/Feed.css'
import { FeedCategory } from './SubComponentsFeed/FeedCategory'
import { ComposeTweetCard } from './SubComponentsFeed/ComposeTweetCard'
import { TweetsCard } from './SubComponentsFeed/TweetsCard'
import ListPost from '../mocks/Feed/FeedContent.json'

export function Feed() {
  const Posts = ListPost;
  return(
      <main className="feed">
        <FeedCategory />
        <ComposeTweetCard />

        {
          Posts.map(({id, name, account, date, description, image1, comments, commentSVG, retweet, retweetSVG, like, likeSVG, view, viewSVG, saveSVG, shareSVG, optionSVG}) => (
            <TweetsCard 
              key={id}
              name={name}
              account={account}
              date={date}
              description={description}
              image1={image1}
              SVGComment = {commentSVG}
              comments={comments}
              SVGRetweet = {retweetSVG}
              retweet={retweet}
              SVGLike = {likeSVG}
              like={like}
              SVGView = {viewSVG}
              view={view}
              saveSVG={saveSVG}
              shareSVG={shareSVG}
              optionSVG={optionSVG}
            />
          ))
        }
      </main>
  )
}