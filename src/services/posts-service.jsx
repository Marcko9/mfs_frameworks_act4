//import data from "./posts.json";

export function getPosts(){
    // return data.posts;
    /*return new Promise ((resolve) => {
        setTimeout(() => {
            resolve([...data.posts]);
        }, 3000);
    });*/

    const urlAPI = 'https://three-points.herokuapp.com/api/posts';
    return (
     fetch(urlAPI, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
            //"Accept": "application/json"
        },
    })
    .then((response) => response.json())

    .catch(err => console.log(err))
    );
      
}