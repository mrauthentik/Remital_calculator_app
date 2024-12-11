import React from "react";
import writing from "../images/writing.jpg"
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import MoneyIcon from "@mui/icons-material/Money"
import { green } from "@mui/material/colors";
import { white } from "@mui/material/colors";
import { toast } from "react-toastify";
export default function Main({
    offering,
    selectOption,
  setOffering,
  tithe,
  setTithe,
  expenditures,
  setExpenditures,
  handleCalculate,
  totalIncome,
  headquarters,
  zone,
  state,
  chapter,
  unit,
  unitExpen,
  show,
  title,
  setTitle,
  resetToast
}){
    const playSuccessSound = () =>{
        const audio = new Audio('/success.mp3')
        audio.play()
    }
    const zoneDisplay = "0.2% Zone"
    const stateDisplay = "0.5% State"
    
     return(
        <section className="bg-cover h-screen" style={{backgroundImage: `url (${writing})`}} >
            <h1 className="section-header-text text-black font-bold text-4xl text-center"> Monthly Calculator</h1>
            <p className=" main-top-text text-black text-center">Change your percentage formular at the top right of the page</p>
                        <div className="label-text">

                <label >Title your Remital</label>
                        </div>
             <div className="title-bar">
                <input type="text" name="" id="" placeholder="e.g Garam Unit Novemeber Report 2024"  
                className=" title sm:mt-10 rounded-1xl bg-gray-200  rounded-lg p-4 focus:outline-none "
                value={title}
                onChange={(e)=>{ setTitle(e.target.value)}}
                />
             </div>

            <div className="howitworksSection flex flex-wrap gap-2 mr-2 mt-10 sm:justify-center text-left relative">
                
                <div className="box rounded-full md:rounded-full bx w-1/6 sm:w-16">
                   
                </div> <p className="text-xs sm:text-lg mt-4 text-sm "> How it works</p>
                <div className="box1  rounded-full bx w-1/6 sm:w-16">
                <LightbulbIcon style={{color:green['#006400']}}/>
                </div> 
                <p className="text-xs sm:text-lg mt-4 text-sm">Tithe and offering</p>
                <div className="box2 rounded-full bx w-1/6 sm:w-16 text-sm">
                    <EditIcon style={{ color:green['#006400']}}/>
                </div> <p className="text-xs sm:text-lg mt-4 text-sm"> Click submit</p>
                <div className="box3 rounded-full bx w-1/6 sm:w-16 text-sm">
                    <SendIcon style={{color:green['#006400']}} className=" rounded-xl  "/>
                </div>
                <p className="text-xs sm:text-lg mt-4 text-sm">You are good to go</p>
                <CheckIcon style={{color:green['#006400']}}/>
            </div>
            
           
                  <form action="#" className="flex justify-center text-sm" >
                      <div className="">
                        <input 
                        type="number" 
                        value={tithe}
                        onChange={(e)=> {
                            setTithe(e.target.value)
                            resetToast()
                        }}
                        
                        placeholder="Tithe" 
                        required 
                        className="mb-5  sm:mt-10 rounded-1xl bg-gray-200 ml-4 ml-4 h-8 rounded-lg p-4 focus:outline-none " />
                        <input 
                        type="number" 
                        placeholder="offering" 
                        required 
                        value={offering}
                        onChange={(e)=> {
                            setOffering(e.target.value)
                            resetToast()
                        }} 
                        className="mb-5 md:mb-0 rounded-1xl bg-gray-200 ml-4 ml-4 h-8 rounded-lg p-4 focus:outline-none"  
                        />
                        <input 
                        type="number" 
                        placeholder="Expenditures" 
                        value={expenditures}
                        onChange={(e) => setExpenditures(e.target.value)}
                        className="mb-5 md:mb-0 bg-gray-200 ml-4 h-8 rounded-lg p-4 focus:outline-none " 
                        />
                      </div>
                      <div className="btn">

                        <button 
                        className="w-1/6 h-8 rounded-lg bg-green-800 text-white" 
                        onClick= {(e) =>{
                            e.preventDefault()
                            handleCalculate()
                            show()
                    
                            toast.success('PDF has been successfully Generated!', {
                                onOpen: playSuccessSound,
                            })
                            
                        }}
                        type="submit" > 
                            <a href="#unitExp" className="text-sm">
                                Submit
                            </a> 
                        </button>
                        <br />
                        <div 
                        type="text" 
                        id="totalIncome" 
                        className="totalincome text-sm text-black-100 bg-green-400 w-40 sm:mt-9xl sm:text-red mt-10 mr-7-11 rounded-lg text-center h-8 totalIncome">
                            Total Income: {totalIncome}
                        </div>
                      </div>
                    </form>  
            
        

          
        <h2 className="sharingTopText font-extrabold text-center text-green-800 font-serif text-xl">Percentage Sharing</h2>
            <div className="sharing sm:flex  justify-between bg-green 950 w-8xl ml-2 mr-5 sm:flex-wrap flex flex-wrap gap-1 ">
                <div className="headqrts bg-green-900 rounded-2xl sm:w-1/4  w-1/4 mt-3 mb-3 ml-20">
                    <p className="text-white p-2 font-bold text-center text-sm">
                       {selectOption === 'State' ? '0.3' + "% ":'0.5' + "%  "}
                         Headquaters: 
                    </p>
                    <div id="headqrts" className="text-green-500 text-xl text-center font-bold text-sm">{headquarters}</div>

                </div>
                <div className="zone bg-green-900 rounded-2xl sm:w-1/4 w-1/4 mt-3 mb-3 ml-20">
                       {selectOption === 'State' ? ( <p className="text-white p-2 font-bold text-center text-sm" id="zoneP">{stateDisplay}  </p>) : (<p className="text-white p-2 font-bold text-center text-sm" id="zoneP">{zoneDisplay} </p>)}    
                    <div id="zone" className="text-green-500 text-xl text-center font-bold">{zone}</div>


                </div>
                <div className="chapter bg-green-900 rounded-2xl sm:w-1/  w-1/4 mt-3 mb-3 ml-20">
                    <p className="text-white p-2 font-bold text-center text-sm">
                        0.1%
                        Chapter
                    </p>
                    <div id="chapter" className="text-green-500 text-xl text-center font-bold">{chapter}</div>

                </div>
                <div className="unit bg-green-900 rounded-2xl sm:w-1/4 w-1/6 mt-3 mb-3 ml-20">
                    <p className="text-white p-2 font-bold text-center text-sm">
                        0.2%
                        Unit
                    </p>
                    <div id="unit" className="text-green-500 text-xl text-center font-bold">{unit}</div>
                    
                  

                </div>
                {selectOption === 'State' ? 
                <div className="unit bg-green-900 rounded-2xl sm:w-1/4 w-1/6 mt-3 mb-3 ml-20">
                    <p className="text-white p-2 font-bold text-center text-sm">
                        0.2%
                        Region
                    </p>
                    <div id="unit" className="text-green-500 text-xl text-center font-bold">{0}</div>
                    
                  

                </div>
                : ''}
                <div className="unit_bf bg-green-900 rounded-2xl sm:w-1/4 w-1/4 mt-3 mb-3 ml-20">
                    <p className="text-white p-2 font-bold text-center text-sm">
                        Unit B/F
                        
                    </p >
                    <div id="unitExp" className="text-green-500 text-xl text-sm text-center font-bold">{unitExpen}</div>
                        
                </div>
            </div>
        </section>

     )
}