// simple admin page
async function getInformation(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json()
    return data
}

export default async function AdminPage(){
    const data = await getInformation()
    // console.log("data",data)
    return(<>
        <h1>This is the admin page</h1>
        <h1>Name: {data.name}</h1>
        <h1>Email: {data.email}</h1>
        <h1>Phone: {data.username}</h1>

    </>
    )
}