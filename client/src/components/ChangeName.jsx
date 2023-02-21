import { useState } from "react";

function ChangeName({ onLogin, setErrors, user }) { 
    const [name, setName] = useState("");

    

    function handleSubmit(e) {
        e.preventDefault();        
        fetch(`/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name                     
          }),
        }).then((r) => {
         
          if (r.ok) {
            r.json().then((user) =>  onLogin(user));
          } else {
            
            r.json().then((err) =>
            console.log(err.error));
            //  setErrors(err.error));
          }
        });
      }

    return (
        <form onSubmit={handleSubmit}>          
            <label htmlFor="name">Change Name</label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />          
           
            <button type="submit">Submit</button>
        </form>
            
            )
}

            export default ChangeName