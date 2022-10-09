import './App.css';


const Card = ({props}) => {

    const movieName = props.data.movieName;
    const duration  = props.data.duration;
    const director  = props.data.Director;
    const cast      = props.data.Cast;
    // Methods
    const childTakenTheFunction = props.onClick;



  return (

    <div className="card" >
            <h1>{movieName}</h1>
            <p>{duration}</p>
            <p>{director}</p>
            

            {/* with map */}
            {cast.map((arg1)=>{
                return(
                    <p>{arg1}</p>
                )
            })}
    </div>
    
  );
}

export default Card;
