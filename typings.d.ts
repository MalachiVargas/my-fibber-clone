export interface Tweet extends TweetBody {
  id: string
  createdAt: string
}

export type TweetBody = {
  text: string
  username: string
  profileImg: string
  image?: string
}

export interface Comment extends CommentBody {
  id: string
  createdAt: string
}

export type CommentBody = {
  comment: string
  username: string
  profileImg: string
  tweetRef: string
}
