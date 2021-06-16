
import React, { createContext , useState, useEffect} from "react";
import api from '../api';
const Context = createContext();

function AuthProvider({children}){
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [token, setToken] =useState();

        useEffect(()=> {
            const token = localStorage.getItem('token');
            if (token !== undefined) {
                api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
                setAuthenticated(true);
            }           
            setLoading(false);  
        },[])

            if (loading) {
                return <h1>Loading...</h1>
            }

        async function handleLogin(username, password) {
            
        await api.post("auth/login", {
                    username: username,
                    password: password,
            }).then(response => {
                    console.log(response);
                    setToken(response.data.token);
                    console.log(token);
                    localStorage.setItem('token', JSON.stringify(token));
                    api.defaults.headers.Authorization = token;
                    setAuthenticated(true);

            }).catch((error) =>  {
                    console.log(error);
                    alert("Não foi possível realizar a autenticação, tente novamente.")
            })        
            
            return null;
    }

        return (
            <Context.Provider value={{authenticated: authenticated, handleLogin}}>
                {children}
            </Context.Provider>
        )
    }

export  {Context, AuthProvider};