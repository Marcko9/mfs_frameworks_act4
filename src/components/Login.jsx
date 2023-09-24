import React, { useEffect, useState } from 'react'

export const Login = ({loginOk, onLoginComplete}) => {

    const [error, setError] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

   
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
            <div className="alert alert-primary">Login</div>
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

            <button type="submit" className="btn btn-large btn-primary mt-3" onClick={login}>Submit</button>
        {/* </form> */}
    </div>
    
)
}
