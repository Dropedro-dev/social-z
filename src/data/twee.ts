import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: 'Outro dia mágico',
    image: 'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp',
    likeCount: 523,
    commentCount: 61,
    retweetCount: 0,
    liked: true,
    retweted: false,
    dataPost: new Date(2024, 8, 1, 10, 0, 0)
}