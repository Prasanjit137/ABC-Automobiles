import { useEffect , useState } from "react";
import axios from 'axios';


function VehicleList(){
    const [vehicles , setVehicles] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:4000/vechiles')
            .then(response=>{
                setVehicles(response.data);


            })
            .catch(error=>{
                console.log('There was an error fetching the vehicles data!',error);
            })
    },[])


    return (

        <>

        <div className="container mt-4">
            <h2>Vehicle List</h2>
            <div className="row">
                {vehicles.map(vehicle => (
                    <div className="col-md-4" key={vehicle.id}>
                       

                       <div className="card">
                            <img src={vehicle.image} className="card-img-top" height={450} alt={vehicle.name} />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text">${vehicle.price}</p>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal${vehicle.id}`}>View Details</button>
                            </div>
                        </div>




                        <div className="modal fade" id={`modal${vehicle.id}`} tabIndex="-1" aria-labelledby={`modalLabel${vehicle.id}`} aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id={`modalLabel${vehicle.id}`}>{vehicle.name}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={vehicle.image} className="card-img-top" alt={vehicle.name} height={450}/>
                                        <p className="car-text">Price : ${vehicle.price}</p>
                                        <p className="car-text">Mileage : {vehicle.mileage} </p>
                                        <p className="car-text">Seats : {vehicle.seats} </p>
                                        <p className="car-text">Color: { vehicle.color} </p>
                                        <p className="car-text">Fuel : {vehicle.fuel } </p>
                                        <p className="car-text">Gear : { vehicle.gear} </p>
                                        <p className="car-text">Description : {vehicle.description } </p>
                                        
                                        
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>




                        

                ))}
            </div>


        </div>



<div class="modalcar">

                    
</div>



</>


    )
}


export default VehicleList;


/*

                        <div>
                            <img src={vehicle.image} className="card-img-top" height={250} alt={vehicle.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="car-text">Price : ${vehicle.price}</p>
                                <p className="car-text">Mileage : {vehicle.mileage} </p>
                                <p className="car-text">Seats : {vehicle.seats} </p>
                                <p className="car-text">Color: { vehicle.color} </p>
                                <p className="car-text">Fuel : {vehicle.fuel } </p>
                                <p className="car-text">Gear : { vehicle.gear} </p>
                                <p className="car-text">Description : {vehicle.description } </p>
                            </div>
                        </div>

*/








