import { useState, createContext, useEffect } from "react";
import { auth, db } from "../services/firebaseconection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { 
    doc, // acessar os documentos
    getDoc, // pegar os documentos
    setDoc // criar os documentos
 } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    const navigate = useNavigate();

    function signIn(email, password){
        console.log(email);
        console.log(password);
        alert('Logado com sucesso')
    }

    // Cadastrar um novo user
    async function signUp(name, email, password){
        setLoadingAuth(true);

        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value)=>{
            let uid = value.user.uid

            await setDoc(doc(db, 'users', uid), {
                nome: name,
                avatarUrl: null
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: name,
                    email: value.user.email,
                    avatarUrl: null
                };
                console.log('Cadastrado com sucesso')
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                navigate('/dashboard');
            })
        })
        .catch((error)=>{
            console.log(error);
            setLoadingAuth(false)
        })
    }

    function storageUser(data){
        localStorage.setItem('ticketsPRO', JSON.stringify(data));
    }

    return(
        <AuthContext.Provider 
        value={{
            signed: !!user, // false (booleano)
            user,
            signIn,
            signUp,
            loadingAuth
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;