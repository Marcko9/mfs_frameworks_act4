export async function getProfile(){

    //const urlAPI = `https://three-points.herokuapp.com/api/users/${userId}`;
    const urlAPI = `https://three-points.herokuapp.com/api/users/6136944fcd79ba24707e2f82`;
    console.log(urlAPI);
    return (
     await fetch(urlAPI, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Accept": "application/json"
        },
    })
    .then((response) => response.json())
    .catch(err => console.log(err))
    );
      
}