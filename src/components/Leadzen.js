import React, { useEffect, useState } from "react";
function Leadzen() {
  const [buttonText, setButtonText] = useState(false);
const[data,setData]=useState([]);
const getUsers= async ()=>{
const response = await fetch('https://swapi.dev/api/people')
let temp=await response.json();
Object.keys(temp).map(key=>{
    if(key==='results'){
    setData(temp[key])
    }
    })
}
 useEffect(()=>{
    getUsers();
    },[])
    function showHide(event) {
      if(buttonText===true ){
        document.getElementById(event.target.id).innerHTML="View Details"
        setButtonText(false)
      }
      if(buttonText===false ){
        setButtonText(true)
        document.getElementById(event.target.id).innerHTML="Hide Details"

      }
    }
    

  return (
  <>
 {
    data.map((props,i)=>{
        const{name,mass,eye_color,homeworld,films}=props;
        return (
          <>
            <div className="container-fluid d-flex justify-content-center mt-2">
              <div className="card w-100 shadow-sm p-3 mb-5 bg-white rounded">
                <div className=" card-body d-flex justify-content-between">
                  <div className="hellomet">{homeworld}</div>
                  <div className="contact">
                    <ul>
                      <li className="list-unstyled">
                        <strong>CONTACT</strong>
                      </li>
                      <li className="list-unstyled">{name}</li>
                    </ul>
                  </div>
                  <div className="city">
                    <ul>
                      <li className="list-unstyled">
                        <strong>CITY</strong>
                      </li>
                      <li className="list-unstyled">{eye_color}</li>
                    </ul>
                  </div>
                  <div className="state">
                    <ul>
                      <li className="list-unstyled">
                        <strong>STATE</strong>
                      </li>
                      <li className="list-unstyled">{homeworld}</li>
                    </ul>
                  </div>
          
                  
                  <button
                    className="btn btn-danger rounded "
                    type="button"
                    data-toggle="collapse"
                    data-target={"#collapseExample" +i}
                    aria-expanded="false"
                    aria-controls={"collapseExample" +i}
                    id={i}
                    onClick={(e) => showHide(e)}
                  
                  >
                   View Details                    
                  </button>
                </div>
                <div className=" w-100">
                  <div className="collapse" id={"collapseExample" +i}>
                    <div className=" col  w-100 p-3 mb-2">
                      <div className="shadow-sm p-3 mb-5 bg-white rounded p-3">
                        <b>Description</b>
                        <p>{films}</p>
                        <div className="d-flex">
                          <ul className="list-unstyled">
                            <li>
                              <strong>Contact Person</strong>
                            </li>
                            <li>{name}</li>
                            <li>
                              <strong>Designation</strong>
                            </li>
                            <li>{mass}</li>

                            <li>
                              <strong>Email</strong>
                            </li>
                            <li>hellogoogle@gmail.com</li>
                            <li>
                              <strong>Phone</strong>
                            </li>
                            <li>1234567890</li>
                          </ul>
                          <ul></ul>
                          <ul></ul>
                          <ul className="list-unstyled">
                            <li>
                              <strong>Address</strong>
                            </li>
                            <li>
                              15 Kasmani Shopping Center Unn Surat Gujarat
                            </li>
                            <li>
                              <strong>City</strong>
                            </li>
                            <li>Surat</li>
                            <li>
                              <strong>State</strong>
                            </li>
                            <li>Gujarat</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    })
 }
  </> 
  
  );
}

export default Leadzen;
