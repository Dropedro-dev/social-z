import { HomeHeader } from "@/components/home/home-header";
import { TweetPost } from "@/components/tweet/tweet-post";
import { HomeFeed } from "./home-feed";
const Page = () => {
    return(
        <div>
            <HomeHeader />
            <TweetPost />
            <HomeFeed />
        </div>
    )
}

export default Page;