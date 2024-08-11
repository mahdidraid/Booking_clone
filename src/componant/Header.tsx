import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed ,faPlane,faCar,faCaretUp,faTaxi,faCalendarDays, faUser} from '@fortawesome/free-solid-svg-icons';

 

 import "./Header.css"
export default function Header() {
  return (
    <div className="headr">
        <div className="headercontenar">

            <div className="headrlist">
                <div className="headrItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>
                <div className="headrItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>
                <div className="headrItem">
                <FontAwesomeIcon icon={faCar} />
                <span>car rentals</span>
                </div>
                <div className="headrItem">
                <FontAwesomeIcon icon={faCaretUp} />
                <span>Attractions</span>
                </div>
                <div className="headrItem">
                <FontAwesomeIcon icon={faTaxi} /> 
                <span>Airpot taxis</span>
                </div>
            </div>

            <h1><div className="titel">Find your next stay</div></h1>
            <p><div className="description">Search deals on hotels, homes, and much more...</div></p>
            <button className='btnbotm'>Sing in / Registr</button>
          
            <div className="headerSearch">

            <div className="headerSearchItme">
            <FontAwesomeIcon icon={faBed} className='bed' />
            <input type="text" placeholder='Where are you going ?' className='headerInputseacrh' />
            </div>
            <div className="headerSearchItme">
            <FontAwesomeIcon icon={faCalendarDays} className='days' />
            <span className='daysinput'>Sun,sep 1 - thu,sep 5</span>
            </div>
            <div className="headerSearchItme">
            <FontAwesomeIcon icon={faUser} className='days' />
            <span className='daysinput'> 2 adult .0 children . 1 room</span>
            </div>
            <button className='inputsearch'>Search</button>
            </div>
            
        </div>

    </div>
  )
}


