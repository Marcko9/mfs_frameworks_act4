import './index.css'
import { NavBar } from './components/NavBar.jsx'
import { SearchBar } from './components/SearchBar'
import { PostList } from './components/PostList'
import { Profile } from './components/Profile'
import { useEffect, useState } from 'react'
import { Login } from './components/Login'
import { getProfile } from './services/profile-service'

function App() {

  const [showProfile, setShowProfile] = useState(false);
  const [showWebDetail, setShowWebDetail] = useState(true);
  const [searchValue, setSearchValue] = useState(null);
  const [loginOk, setLoginOk] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userId, setUserId] = useState(null);
  

  const onProfileClick = async() => {
        console.log('onProfileClick');
        console.log({showWebDetail});
        console.log({showProfile});
        setUserId("6136944fcd79ba24707e2f82");
        console.log({userId});
        await getProfile().then((data) => setCurrentUser(data));
        console.log({currentUser});
        if(!showProfile){
            setShowWebDetail(false);
            setShowProfile(true);
        }
  }

  const onLogoClick = () => {
      console.log('onLogoClick');
      console.log({showWebDetail});
      console.log({showProfile});
      if(!showWebDetail){
          setShowWebDetail(true);
          setShowProfile(false);
      }
  }

  const onLoginComplete = async () => {
    setLoginOk(true);
    await getProfile().then((data) => setCurrentUser(data));
    console.log('Login completo');
    console.log({currentUser});

  }
  
  const onLogout = () => {
    if(localStorage.getItem('token')){
      console.log('Usuario logeado');
      localStorage.removeItem('token');
      setLoginOk(false);
    }
  }

  useEffect(() => {
      if(localStorage.getItem('token')){
        console.log('Usuario logeado');
        setLoginOk(true);
        


      }
      
    }, [])
    
  //console.log({loginOk});
  if(!loginOk){
    return(
      <>
        <Login onLoginComplete={onLoginComplete}></Login>
      </>
    );
  }  
  
  return (
    <>
      <NavBar
        onProfileClick={onProfileClick}
        onLogoClick={onLogoClick} />
      {showProfile &&
      <Profile 
        avatar={currentUser.avatar}
        username={currentUser.username}
        bio={currentUser.bio}
        onLogout={onLogout}
        currentUser={currentUser}
        // avatar={"https://picsum.photos/id/237/200/200"}
        // username={"@dobby"}
        // bio={"Enim ullamco esse est nostrud adipisicing qui deserunt esse esse ea eiusmod.Velit mollit ipsum nulla cupidatat duis qui aliquip dolore dolor do aliqua nulla."}
        // onLogout={onLogout}
      />}
      
      {
        !showProfile && 
        <SearchBar 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        /> 
      }
      {
        !showProfile &&
        <PostList searchValue={searchValue} currentUser={currentUser}/>
      }
      
    </>
  )
  
}

export default App
