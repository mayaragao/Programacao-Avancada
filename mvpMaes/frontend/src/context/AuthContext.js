
import React, { createContext , useState, useEffect} from "react";
import api from '../api';
import history from "../history";
const Context = createContext();

function AuthProvider({children}){
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [token, setToken] =useState("");

    const navigateToExperiences = () => {
        history.push("experiencias")

    }
        useEffect(()=> {
            const token = localStorage.getItem('token');
            if (token !== undefined) {  
                api.defaults.headers.Authorization = `Bearer ${token}`;
                setAuthenticated(true);
            }           
            setLoading(false);  
        },[])

            if (loading) {
                return <h1>Loading...</h1>
            }

        async function handleLogin(username, password) {
             let data;
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
                    navigateToExperiences();
                            }).catch((error) =>  {                
                    console.log(error);
                    alert("Não foi possível realizar a autenticação, tente novamente.")
            })        
            
            return data;
    }

        return (
            <Context.Provider value={{authenticated: authenticated, handleLogin}}>
                {children}
            </Context.Provider>
        )
    }

export  {Context, AuthProvider};