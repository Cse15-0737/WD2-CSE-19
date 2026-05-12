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
 const [formData, setformData]=useState({
  name: "",
  email: "",
  password: ""
 })

 useEffect(()=>{
  console.log("form data update", formData);
 }, [formData])

 const handleChange =(e)=>{
  setformData({
   ...formData,
   [e.target.name]:e.target.value,
  })
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  alert("Registration Successfull");
  console.log(formData);
 }

  return (
    <div style={{margin: '20px', padding:'10px'}}>
     <form onSubmit={handleSubmit} style={{backgroundColor: 'white'}}>
 <input type="text" 
 name="name"
 placeholder="Enter Your Name"
 value={formData.name}
 onChange={handleChange}
 />
 <br/>
<input type="email"
name="email"
placeholder="Enter Your Email"
value={formData.email}
 onChange={handleChange}
/>
<br/>
<input type="password"
name="password"
placeholder="Enter Your Pasword"
value={formData.password}
 onChange={handleChange}
/>
<br/>
<br/>
<button type="submit" style={{backgroundColor: 'green', borderRadius: '20%'}}>Registration</button>
     </form>
    </div>
  )
}

export default App