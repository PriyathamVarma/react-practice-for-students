import './App.css';
// Import components
import Header from './header';
import Footer from './footer';
//import Card from './Card';
// State
import { useState } from 'react';
import axios from 'axios';
 
const App = () => {

  // Data render state
  const [data,setData] = useState([]);

// Read
const getAPI = async () =>{
  
  const reqAPI = "http://localhost:8011/beasts";

    try{

      const reqData = await axios.get(reqAPI);
      setData(reqData.data);
      console.log(data);

    }catch(err){
      console.log(err);
    }
}

// Read Specific 
const submitted = async (event) =>{
  event.preventDefault();
  // Stage 1: Posting the url
  const _name = event.target.name.value;
  const urlToSent = `http://localhost:8011/beast?name=${_name}`;
  console.log(urlToSent);

  // Stage 2: Fetching the data
  try{

    const dataFromExpress = await axios.get(urlToSent);
    setData(dataFromExpress.data);

  }catch(err){
    console.log(err);
  }
  
}

// Create
const dataSubmitted = async(event) =>{

  event.preventDefault();

  const _name = event.target.name.value;
  const _heads = event.target.heads.value;
  const _mythology = event.target.mythology.value;

  const obj = {
    name:_name,
    heads:_heads,
    mythology:_mythology
  }

  console.log(obj);


  // Post the obj
  try{
    const dataSubmitting = await axios.post('http://localhost:8011/beasts',obj);
    setData(dataSubmitting.data);
    
  }catch(err){
    console.log(err);
  }

}

// Update --> patch
const dataEditted = async(event) =>{

  event.preventDefault();

  const _id = event.target.id.value

  const _name = event.target.name.value;
  const _heads = event.target.heads.value;
  const _mythology = event.target.mythology.value;

  const obj = {

    name:_name,
    heads:_heads,
    mythology:_mythology
  }

  console.log(obj);


  // Post the obj
  try{
    const dataEditting = await axios.patch(`http://localhost:8011/beast/${_id}`,obj);
    setData(dataEditting.data);
    
  }catch(err){
    console.log(err);
  }

}


// Destroy --> delete

  return (

    <div className="container">

      {/* Header comes in here */}
      <Header/>

        <h1>Search By Beast name</h1>

        <form onSubmit={submitted}>

          <input type="text"   name="name" placeholder='Beast Name'/><br/>
          <input type="submit" value="submit"/>

        </form><br/>

        <hr/>

        <button onClick={getAPI}>Click for Fetching all the data</button>

        <h1>Data</h1>

        <table>
              <tr>
                <th> Index </th>
                <th> ID </th>
                <th> Name </th>
                <th> Heads </th>
                <th> Mythology </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>

        {data.map((value,index)=>{
          return(
           
              <tr key={index}>
                <td> {index} </td>
                <td> {value.id} </td>
                <td>{value.name}</td>
                <td>{value.heads}</td>
                <td>{value.mythology}</td>
                <td>
                  <button> Edit </button>
                </td>
                <td>
                  <button> Delete </button>
                </td>
              </tr>
              
            
          );
        })}
        </table>

        <hr/>

        <h1>Submit the data</h1>

        {/* Form for submitting the data */}
        <form onSubmit={dataSubmitted}>

          <input type="text"   name="name"  placeholder='Beast Name'/><br/>
          <input type="number" name="heads" /><br/>
          <input type="text"   name="mythology" placeholder='Beast Mythology'/><br/>
          <input type="submit" value="submit"/>

        </form><br/>

        <hr/>
        <h1> Edit the data </h1>
         {/* Form for submitting the data */}
         <form onSubmit={dataEditted}>

         <input type="number"    name="id"  placeholder='Beast ID'/><br/>
          <input type="text"   name="name"  placeholder='Beast Name'/><br/>
          <input type="number" name="heads" /><br/>
          <input type="text"   name="mythology" placeholder='Beast Mythology'/><br/>
          <input type="submit" value="submit"/>

        </form><br/>


        <hr/>
        <h1> Delete the data </h1>

      
      <Footer/>
      
    </div>
    
  );
}

export default App;
