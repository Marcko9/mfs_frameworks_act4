import './index.css'
import { NavBar } from './components/NavBar.jsx'
import { SearchBar } from './components/SearchBar'
import { PostList } from './components/PostList'
import { Profile } from './components/Profile'
import { useEffect, useState } from 'react'
import { Login } from './components/Login'

function App() {

  const [showProfile, setShowProfile] = useState(false);
  const [showWebDetail, setShowWebDetail] = useState(true);
  const [searchValue, setSearchValue] = useState(null);
  const [loginOk, setLoginOk] = useState(false);
  

  const onProfileClick = () => {
        console.log('onProfileClick');
        console.log({showWebDetail});
        console.log({showProfile});
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

  const onLoginComplete = () => {
    setLoginOk(true);
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
        avatar={"https://picsum.photos/id/237/200/200"}
        username={"@dobby"}
        bio={"Enim ullamco esse est nostrud adipisicing qui deserunt esse esse ea eiusmod.Velit mollit ipsum nulla cupidatat duis qui aliquip dolore dolor do aliqua nulla."}
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
        <PostList searchValue={searchValue} />
      }
      
    </>
  )
  
}

export default App
