'use client'

import { Tweet } from "@/types/tweet"
import { formatRelativeTime } from "@/utils/format-relative";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFilled, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import { useState } from "react";

type Props = {
    tweet: Tweet;
    hideComments?: boolean;
}
export const TweetItem = ({tweet, hideComments}: Props) =>{
    const [liked, setLiked] = useState(tweet.liked);
    const [tweeted, setTweeted] = useState(tweet.retweted);

    const handleLikeButton = () => setLiked(!liked);

    const handleRetweetedButton = () => setTweeted(!tweeted);

    return (
        <div className="flex gap-2 p-6 border-b-2 border-gray-900">
            <div>
                <Link href={`/${tweet.user.slug}`}>
                    <img 
                        src={tweet.user.avatar}
                        alt={tweet.user.name}
                        className="size-10 rounded-full"
                    />
                </Link>
            </div>
            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3">
                    <div className="font-bold text-lg">
                        <Link href={`/${tweet.user.slug}`}>{tweet.user.name}</Link>
                    </div> 
                    <div className="text-xs text-gray-500">@{tweet.user.slug} - {formatRelativeTime(tweet.dataPost)}</div>
                </div>
                <div className="py-4 text-lg">{tweet.body}</div>
                {tweet.image &&
                    <div className="w-full">
                        <img 
                            src={tweet.image}
                            alt=""
                            className="w-full ronded-2xl"
                        />
                    </div>
                }
                <div className="flex mt-6 text-gray-500">
                    {!hideComments &&
                        <div className="flex-1">
                            <Link href={`/tweet/${tweet.id}`}>
                            <div className="inline-flex items-center gap-2 cursor-poiter">
                                <FontAwesomeIcon icon={faComment} className="size-6" />
                                <div className="text-lg">{tweet.commentCount}</div>
                            </div>
                            </Link>
                        </div>
                    }
                    <div className="flex-1">
                        <div 
                            onClick={handleRetweetedButton}
                            className={`inline-flex items-center gap-2 cursor-poiter ${tweeted && 'text-green-500'}`}
                        >
                            <FontAwesomeIcon icon={faRetweet} className="size-6" />
                            <div className="text-lg">{tweet.retweetCount}</div>
                        </div>
                    </div>
                    <div className="flex-1">
                    <div 
                        onClick={handleLikeButton}
                        className={`inline-flex items-center gap-2 cursor-poiter ${liked && 'text-red-500'}`}
                    >
                            <FontAwesomeIcon icon={liked ? faHeartFilled : faHeart} className="size-6" />
                            <div className="text-lg">{tweet.likeCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}