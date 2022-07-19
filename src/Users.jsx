import React, { useState , useEffect} from 'react'
export default function Users() {
    const [user ,setUser] = useState([]);
    useEffect(()=>async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data =await res.json();
        setUser(data)
    },[])
  return (
    <><h3>Users</h3>
    <ol>
    {user.map((el)=><li key={el.id}>{el.name}</li>)}

    </ol>
    </>
  )
}
