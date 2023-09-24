import React, { useEffect, useState } from 'react'
import { useUserContext } from "../contexts/user-context";

export const Login = ({onLoginComplete}) => {

    const [error, setError] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    
    //const value = useUserContext();
    

   
    const urlAPI = 'https://three-points.herokuapp.com/api/login';
    
    useEffect(()=> {
        if(localStorage.getItem('token')){
            //console.log({navigate});
            console.log('Usuario logeado');

        }
    },[]);

    
    const login = async () => {
        const userData = {
            username,
            password
        }
        console.log({userData});
        try{
            const response = await fetch(urlAPI,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        //"Accept": "application/json"
                    },
                    body: JSON.stringify(userData)
                }
            );
            
            if(response.ok){
                const {token} = await response.json();
                // const data = await response.json();
                console.log({token});
                localStorage.setItem("token", token);
                //localStorage.setItem("token",JSON.stringify(token).slice(1,-1));
                onLoginComplete(true);
            }
            else{
                if(response.status === 401){
                    localStorage.removeItem('token');
                    onLoginComplete(false);
                }
                setError(true);
            }
        }
        catch(err){
            console.log(err);
            setError(err);

           
        }
    }

   
    return (

  

    <div className='container mt-5' style={{width:"25em"}}>
        {
            error && 
            <div className="alert alert-danger">Invalid email or password</div>
        }
        
        {
            !error && 
            <div className="alert alert-primary text-center">Bienvenido</div>
        }

        {/* <form onSubmit={ProceedLogin}> */}
            <div className="form-group">
                <label>Usuario</label>
                <input type="text" className="form-control" id="inputUser" aria-describedby="UserHelp" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form-group mt-3">
                <label >Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-large btn-primary mt-3" onClick={login}>Login</button>
        {/* </form> */}
    </div>
    
)
}
