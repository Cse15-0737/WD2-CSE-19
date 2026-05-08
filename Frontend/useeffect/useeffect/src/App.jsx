// import React, {useState, useEffect} from "react";
// function App(){
//   const [formData, setFormData] = useState ({
//     name:"", 
//     email:"",
//     password:""
//   });
//   // UseEffect 
//   useEffect(()=>{
//     console.log("Form Updated", formData)
//   },[formData])
//   // Input change.

// }

import React, {useState, useEffect} from "react";

const App = () => {
  return (
    <div>
     <form action="">
      <label htmlFor="">
        Name: <input type="text"/>
        </label>
        <br></br>
        <label htmlFor="">
        Email: <input type="email"/>
      </label>
      <br></br>
       <label htmlFor="">
      Password: <input type="password"/>
     </label>
     </form>

    </div>
  )
}

export default App