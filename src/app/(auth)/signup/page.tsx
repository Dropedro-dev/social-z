import { Logo } from "@/components/UI/logo";
import SignupForm from "@/components/auth/signupForm";
import Link from "next/link";

const Page = () => {
    return(
        <div className="max-w-lg mx-auto mt-12 px-6">
          <Logo size={56} />
          <h1 className=" mt-10 text-2xl">Crie a sua conta</h1>
          <div className="mt-10 mb-14 flex flex-col gap-8">
            <SignupForm />
          </div>
          <div className="flex flex-col justify-center items-center gap1 md:flex-row">
            <div className="text-gray-500">Já tem uma conta? &nbsp;</div>
            <Link href='/signin' className="hover:underline">Entrar no Z</Link>
          </div>
          
        </div>
    )
}

export default Page;