import './App.css';
//import axios from 'axios';
// Import components
import Header from './header';
import Footer from './footer';
import Card from './Card';
// State
import { useState } from 'react';
import axios from 'axios';
 
const App = () => {

  // useState hook
  // const [arg1,setArg1] = useState([]);
  // arg1 is the vriable
  // setArg1 is the setter function
  /* const arg1 = (two) =>{
    return two;
  }
   */
  //setArg1([all TheData])
  // const arg1 = [all TheData]

  // const api = [];


  const sample = () =>{
    console.log('Sample');
  }

  const movies = [
    {
      movieName:"Ghost in the dark",
      duration: 200,
      Director:"james cameroon",
      Cast:["Tom hanks","Tom hardy","Tom hiddelton","Tom Cruise"]
    },
    {
      movieName:"Ghost in the dark2",
      duration: 201,
      Director:"james cameroons wife",
      Cast:["Chris Hemsworth","Chris Evans","Chris Patt","Chris Walken"]
    }
  
  ];
  // UseState
  //const [arg1,arg2] = useState();
  const [api,setApi] = useState([]);

  // APIs
  const apiData = {};

  // State
  const [name,setName] = useState('something');
  const [data,setData] = useState(movies);

  // APIS
  const [coins,setCoins] = useState([]);

  //const name = '';

  // Methods
  const functionByParent = () => {

    // setter function
    setName(Math.floor(Math.random()*10));
    console.log("State Change "+name)


  }


const addSomething = () =>{
  
  let newData = {
      movieName:"Star Wars",
      duration: 212,
      Director:"Rian Johnson",
      Cast:["Yodha","bay Yodha","Skywalker","Chubaca","Kanobe","Mandalorian"]
  }

  setData(currentArray => [...currentArray,newData]);
  
}

const formSubmitted = (event) =>{

  event.preventDefault();

  let movieName = event.target.name.value;
  let duration  = event.target.duration.value;
  let director  = event.target.director.value;
  let cast      = event.target.cast.value;


  let newData = {
    movieName:movieName,
    duration: duration,
    Director:director,
    Cast:[cast]
}

setData(currentArray => [...currentArray,newData]);

  
}

// APIS
/*const getAPI = async() =>{

  console.time();
  
  try {
  const data = await axios.get('https://api.llama.fi/protocols').then(
    res => {
      return res.data
    }
  );
  setCoins(data);
  console.log(data);
  
  } catch(err) {
    console.log(err)
  }

  console.timeEnd();
}*/

const getAPI = async () =>{
  console.time();

  const reqAPI = "https://api.sampleapis.com/wines/reds";

    const reqData = await axios.get(reqAPI).then(response =>{
      return response.data;
    }); 

    setApi(reqData);
    console.log(api);

    console.timeEnd();
}

  return (

    <div className="container">

      {/* Header comes in here */}
      <Header/>
      
    <form onSubmit={formSubmitted}>
      <input type="text"   name="name" placeholder='Movie Name'/><br/>
      <input type="number" name="duration"/><br/>
      <input type="text"   name="director" placeholder='Movie Director'/><br/>
      <input type="text"   name="cast" placeholder='Movie Cast'/><br/>

      <input type="submit" value="submit"/>
    </form><br/>

    <button onClick={getAPI}>Click for APIs</button>



    <button onClick={sample}>Sample</button>
    
      <div className="cards-container">
      


      {coins.map( (value,index) => {
        return(
          
          <div className="card" key={index}>

              <h3>Address     : {value.address}</h3>
              <p>Chain        : {value.chain}</p>
              <p>1 day change : {value.change_1d}</p>
              <p>1 Hour Chnage: {value.change_1h}</p>
              
            
          </div>
        );
      } )} 

    </div>

      {/* Footer component comes here */}
      <Footer/>
      
    </div>
    
  );
}

export default App;
