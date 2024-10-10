import { TweetItem } from "@/components/tweet/tweet-item"
import { tweet } from "@/data/twee"

export const HomeFeed = () => {
    return (
        <div>
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
        </div>
    )
}