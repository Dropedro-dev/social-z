'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../UI/input";
import { Button } from "../UI/buttom";


const SignupForm = () => {
    const router = useRouter();
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('');
    const [passField, setPassField] =   useState('');

    const handleEnterButton =() => {
        router.replace('/home');
    }

    return(
        <>
            <Input 
                type="text"
                placeholder="Digite seu nome"
                value={nameField}
                onChange={t => setNameField(t)}
            />
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
                label="cadastrar"
                onClick={handleEnterButton}
                size={1}
            />
        </>
    )
}

export default SignupForm;