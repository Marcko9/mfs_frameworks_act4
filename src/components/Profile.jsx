import React from 'react'

export const Profile = ({avatar, username, bio}) => {
  return (
    
    <div className="container mt-5">    
        <div className="row d-flex justify-content-center">
            <div className="col-md-7">
                <div className="card p-3 py-4">
                    <div className="text-center">
                        <img src={avatar} width="100" className="rounded-circle"/>
                    </div>
                
                    <div className="text-center mt-3">
                        <span className="bg-secondary p-1 px-4 rounded text-white">{username}</span>
                        <div className="px-4 mt-3">
                            <p className="fonts">{ bio }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
