import React, { Children, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed ,faPlane,faCar,faCaretUp,faTaxi,faCalendarDays, faUser} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
 import "./Header.css"
export default function Header() {
 const [opne,setOpen] = useState<boolean>(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
    const [openOption,setOpenOption]=useState<boolean>(false)
    const [option,setoption] =useState({
      adult :1,
      children : 0,
      room : 1,
    });


    type OptionKeys = 'adult' | 'children' | 'room';

    type OptionState ={
      adult: number;
  Children: number;
  room: number;
    }
    const handlOptionchnge = (namee:OptionKeys,operation:"i"| "d",
    setOption: React.Dispatch<React.SetStateAction<OptionState>>
    )=>
    {
      setoption((perve) =>({
        ...perve,
        [namee]:operation === "i" ?perve[namee] +1 :perve[namee] -1,
      }))
    };
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
            
            <span onClick={()=> setOpen(!opne)} className='daysinput'>
        {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
      </span>
      {opne && <DateRange
        editableDateInputs={true}
        onChange={item => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className="date"
      />}
            </div>
            <div className="headerSearchItme">
            <FontAwesomeIcon icon={faUser} className='days' />
            <span  onClick={() => setOpenOption(!openOption)} className='daysinput'>{`${option.adult} adult . ${option.children} children . ${option.room} room`}</span>
               {openOption &&  <div className="option">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className='allcon'>
                            <button  disabled={option.adult <= 1} className='optionCount' onClick={()=>handlOptionchnge("adult" ,"d")}>-</button>
                            <span className='Number'>{option.adult}</span>
                            <button  className='optionCount' onClick={()=> handlOptionchnge("adult","i")}>+</button>
                        </div>
                      </div>
                      <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className='allcon'>
                        <button  disabled={option.children <= 0} className='optionCount' onClick={()=>handlOptionchnge("children","d") }>-</button>
                        <span className='Number'>{option.children}</span>
                        <button  className='optionCount' onClick={()=> handlOptionchnge("children","i")}>+</button>
                        </div>
                      </div>
                      <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className='allcon'>
                        <button  disabled={option.room <= 1} className='optionCount' onClick={()=> handlOptionchnge("room","d")}>-</button>
                        <span className='Number'>{option.room}</span>
                        <button  className='optionCount' onClick={()=> handlOptionchnge("room","i")}>+</button>
                      </div>
                      </div>
                      <hr className="solid"></hr>
                      <div className='animal'>
                        <p>Traveling with pets?</p>
                        <label className="switch">
                          <input type="checkbox"/>
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <div className='box'>
                        <p>Done</p>
                      </div>
                  </div>}
            
            </div>
            <button className='inputsearch'>Search</button>
            </div>
            
        </div>

    </div>
  )
}


