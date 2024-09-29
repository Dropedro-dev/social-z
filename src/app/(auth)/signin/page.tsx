import Logo from "@/components/UI/logo";
import SigninForm from "@/components/auth/signinForm";
import Link from "next/link";
const Page = () => {
    return(
        <div className="max-w-lg mx-auto mt-12 px-6">
          <Logo size={56} />
          <h1 className=" mt-10 text-2xl">Entre na sua conta</h1>
          <div className="mt-10 mb-14 flex flex-col gap-8">
            <SigninForm />
          </div>
          <div className="flex flex-col justify-center items-center gap1 md:flex-row">
            <div className="text-gray-500">Ainda não tem umaconta? &nbsp;</div>
            <Link href='/signup' className="hover:underline">Cadastre-se</Link>
          </div>
          
        </div>
    )
}

export default Page;