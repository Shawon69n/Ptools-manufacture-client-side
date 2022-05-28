import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin,setAdmin] = useState(false);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`https://fathomless-wave-90975.herokuapp.com/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                },
               
            })
            .then(res=>res.json())
            .then(data => {
               setAdmin(data.admin)
            })
        }
    } ,[])
    return [admin]
}

export default useAdmin;