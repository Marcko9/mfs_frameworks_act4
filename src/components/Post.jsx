import { useEffect, useState } from "react";
import { useUserContext } from "../contexts/user-context";


export function Post({createdAt, author="XX", text, comments, image ="https://picsum.photos/300/250", likes }) {

    const value = useUserContext();

    const [likesCounter, setLikesCounter] = useState(likes);

    const [imgSrc, setImgSrc] = useState("Invalid Image Source");
    useEffect(() => {
        //getPosts().then((posts) => setPosts(posts));
        setImgSrc(image)
        
    }, []);


  return (
    <div className="container mt-2">
        <div className="card h-100">
            <img src={ image } className="card-img-top" alt="Imagen" style={{minHeight:"15em", maxHeight:"15em"}} onError={(e) => {e.target.src = "https://picsum.photos/300/250"; e.onError = null;} } />
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <h5 className="postDate me-auto">{ createdAt }</h5>
                    <button className='btn btn-danger' onClick={() => setLikesCounter(likesCounter + 1)} ><i className="bi bi-heart-fill"></i>{likesCounter || "0"}</button>
                </div>
                <h5 className="userInfo">@{author}</h5>
                <p className="card-text">{text || "..."}</p>
                
            </div>
            <div className="card-footer">
                <h6 className="card-subtitle comment"><i className="bi bi-chat-right me-2 comment"></i>Comments ({ comments })</h6>
                <h6>{value.foo}</h6>
            </div>
        </div>
    </div>
  );
}
