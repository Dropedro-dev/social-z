import { user } from "@/data/user"
import { redirect } from "next/navigation";

const Page = () => {
    redirect('/'+user.slug);

    return null;
}