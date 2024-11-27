import React from "react"
import writing from "../images/writing.jpg"

export default function Header({selectOption, setSelectOption, image}){
 
     return(
         <div className='bg-black text-white p-4 flex justify-between head bg-center bg-no-repeat ' style={{backgroundImage:`url(${writing})`}}>
         <img src={image} alt=""  className="w-2/4 h-2/4 relative w-20 sm:ml-0 sm:w-20 sm:h-20" />
        <h1 className="font-bold text-4xl" style={{textShadow:' 2px 2px 4px rgba(0, 0, 0, 0.9)'}}>Remittal Calculator</h1>
       
        <form action="#">
            <select
              name="location" 
              value={selectOption}
              onChange={(e) => setSelectOption(e.target.value)}
              id="header-select" 
              className="rounded bg-green-600 text-white mb-1 p-4 pt-2 w-20 h-12 sm:w-24 focus:outline-none"
              >
            <option value="unit">Unit</option>
            <option value="chapter">Chapter</option>
            <option value="zone">Zone</option>
            <option value="state">State</option>
         </select>
        </form>
          
         </div>
     )
}