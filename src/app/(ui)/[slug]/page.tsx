import { Button } from "@/components/UI/buttom";
import { GeneralHeader } from "@/components/UI/general-header";
import { user } from "@/data/user";
import Link from "next/link";

const Page = () => {
    let isMe = true;

    return (
        <div>
            <GeneralHeader backHref={'/'}>
                <div className="font-bold text-lg">{user.name}</div>
                <div className="font-xs text-gray-500">{user.postCount} posts</div>
            </GeneralHeader>
            <section className="border-b-2 border-gray-900">
                <div 
                    className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
                    style={{backgroundImage: 'url('+ user.cover +')' }}
                ></div>
                <div className="-mt-12 ml-6 flex justify-between items-end">
                    <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="size-24 rounded-full"
                    />
                    <div className="w-32">
                        {isMe ?
                        <Link href={`/${user.slug}/edit`}>
                            <Button label="Editar Perfil" size={2}/>
                        </Link>
                        :
                        <Button label="Seguir" size={2}/>
                        }
                  </div>
                </div>
                <div className="px-6 mt-4">
                    <div className="text-xl font-bold">{user.name}</div>
                    <div className="text-gray-500">@{user.slug}</div>
                    <div className="py-5 text-lg text-gray-500">{user.bio}</div>
                </div>
            </section>
        </div>
    )
}

export default Page;