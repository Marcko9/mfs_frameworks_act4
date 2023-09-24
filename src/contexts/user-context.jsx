import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserContextProvider({children}){
    
    const [loginOk, setLoginOk] = useState(false);
    
    useEffect(() => {
    
    }, []);

    return <UserContext.Provider value={{
        loginOk,
        // setLoginOk
    }}>{children}</UserContext.Provider>;
}

export function useUserContext(){
    return useContext(UserContext);
}

export default UserContextProvider;