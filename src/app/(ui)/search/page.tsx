import { TweetItem } from "@/components/tweet/tweet-item"
import { GeneralHeader } from "@/components/UI/general-header"
import { SearchInput } from "@/components/UI/search-Input"
import { tweet } from "@/data/twee"
import { redirect } from "next/navigation"


type Props = {
    searchParams : {
        q: string | undefined
    }
}

const Page = ({searchParams}: Props) => {
    if(!searchParams) redirect('/')
    return (
        <div>
            <GeneralHeader backHref="/" >
                <SearchInput defaultValue={searchParams.q} />
            </GeneralHeader>
            <div className="border-2 border-gray-900">
                <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet} />
            </div>
        </div>
    )
}

export default  Page;