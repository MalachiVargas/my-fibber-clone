export interface Tweet extends TweetBody {
  _id: string
  _createdAt: string
}

export type TweetBody = {
  text: string
  username: string
  profileImg: string
  image?: string
}

export interface Comment extends CommentBody {
  _id: string
  _createdAt: string
  tweet_ref: string
}

export type CommentBody = {
  comment: string
  username: string
  profileImg: string
  tweetId: string
}
