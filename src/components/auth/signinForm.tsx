'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../UI/input";
import { Button } from "../UI/buttom";


const SigninForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passField, setPassField] =   useState('');

    const handleEnterButton =() => {
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
                placeholder="Digite sua senha"
                value={passField}
                onChange={t => setPassField(t)}
            />
            <Button
                label="Entrar"
                onClick={handleEnterButton}
                size={1}
            />
        </>
    )
}

export default SigninForm;