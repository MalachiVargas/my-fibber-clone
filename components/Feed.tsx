import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Tweet } from '../typings'
import Tweetbox from './Tweetbox'
import TweetComponent from './Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface FeedProps {
  tweets: Tweet[]
}

function Feed({ tweets: tweetsProp }: FeedProps) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)

  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreshing...')
    const tweets = await fetchTweets()
    setTweets(tweets)
    toast.success('Feed Updated!', {
      id: refreshToast
    })
  }
  return (
    <div className="col-span-7 max-h-screen overflow-scroll border-x scrollbar-hide lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="hover:rotate-100 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out active:scale-125"
        />
      </div>
      <div>
        <Tweetbox setTweets={setTweets} />
      </div>
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default Feed
