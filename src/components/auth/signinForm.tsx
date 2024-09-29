'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../UI/input";
import { faHeart } from "@fortawesome/free-regular-svg-icons";


const SigninForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passField, setPassField] =   useState('');

    const hadleEnterButton =() => {
        router.replace('/home');
    }

    return(
        <>
            <Input 
                type="email" 
                placeholder="Digite seu email"
                value={emailField}
                onChange={t => setEmailField(t)}
            />
            <Input 
                type="password"
                placeholder="Dogote sua senha"
                icon={faHeart}
                value={passField}
                onChange={t => setPassField(t)}
            />
            <button>Entrar</button>
        </>
    )
}

export default SigninForm;