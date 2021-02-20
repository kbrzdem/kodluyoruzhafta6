import React, { useState } from "react";

function UserCard(){
    const [ username, setUsername] = useState("")

    return(
        <>
                <div className="form-field">
                    <label>Kullanıcı Adı</label>
                    <input type="text" placeholder="" className="input" 
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    <small className="input-text">En az 3 karakter</small>
           
                    </div>
            
                <div className="user">
                    <p className="ka">
                        { username } 
                    </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                         Accusantium unde reprehenderit deleniti consequatur voluptate, earum quaerat in cumque deserunt velit quam praesentium,
                          rem dolores, perspiciatis repudiandae minima natus? Sapiente, consequuntur!</p>
                </div>
        </>

    )
} 

export default UserCard