import React from "react";
import writing from "../images/writing.jpg"
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import { green } from "@mui/material/colors";
import { white } from "@mui/material/colors";
export default function Main(){
     return(
        <section className="bg-cover h-screen" style={{backgroundImage: `url (${writing})`}}>
            <h1 className="text-black font-bold text-4xl text-center">Horemow Monthly Calculator</h1>
            <p className="text-black text-center">Change your percentage formular at the top right of the page</p>

            <div className="section flex flex-wrap gap-2 mr-2 mt-10 sm:justify-center text-left relative">
                
                <div className="box rounded-full md:rounded-full bx w-1/6 sm:w-16">
                   
                </div> <p className="text-xs sm:text-lg mt-4 "> How it works</p>
                <div className="box1  rounded-full bx w-1/6 sm:w-16">
                <LightbulbIcon style={{color:green['#006400']}}/>
                </div> 
                <p className="text-xs sm:text-lg mt-4">Tithe and offering</p>
                <div className="box2 rounded-full bx w-1/6 sm:w-16">
                    <EditIcon style={{ color:green['#006400']}}/>
                </div> <p className="text-xs sm:text-lg mt-4"> Click submit</p>
                <div className="box3 rounded-full bx w-1/6 sm:w-16">
                    <SendIcon style={{color:green['#006400']}} className=" rounded-xl  "/>
                </div>
                <p className="text-xs sm:text-lg mt-4">You are good to go</p>
                <CheckIcon style={{color:green['#006400']}}/>
            </div>
            
           
                  <form action="#" className="flex justify-center" >
                      <div className="">
                        <input type="number" placeholder="Tithe" required id="inputTithe" className="mb-5  sm:mt-10 rounded-1xl bg-gray-200 ml-4 ml-4 h-8 rounded-lg p-4 focus:outline-none " />
                        <input type="number" placeholder="offering" required id="inputOffering" className="mb-5 md:mb-0 rounded-1xl bg-gray-200 ml-4 ml-4 h-8 rounded-lg p-4 focus:outline-none "  />
                        <input type="number" placeholder="Expenditures" id="expense" className="mb-5 md:mb-0 bg-gray-200 ml-4 h-8 rounded-lg p-4 focus:outline-none " />
                      </div>
                    <button className="w-1/6 h-8 rounded-lg bg-green-800 text-white" id="submit" type="submit" > <a href="#unitExp">Submit</a>  </button>
                    <div type="text" id="totalIncome" className=" text-black-100 bg-green-400 w-40 sm:mt-9xl sm:text-red mt-10 mr-7-11 rounded-lg text-center h-8">
                        Total Income
                    </div>
                    </form>  
            
        

          
        <h2 className="font-extrabold text-center text-green-800 font-serif text-xl">Percentage Sharing</h2>
            <div className="sharing sm:flex  justify-between bg-green 950 w-8xl ml-2 mr-5 sm:flex-wrap flex flex-wrap gap-2 ">
                <div className="headqrts bg-green-900 rounded-2xl sm:w-1/4  w-1/4 mt-3 mb-3 ml-20">
                    <p className="text-white p-2 font-bold text-center">
                        0.5%
                        Headquaters
                    </p>
                    <div id="headqrts" className="text-green-500 text-xl text-center font-bold">0</div>

                </div>
                <div className="zone bg-green-900 rounded-2xl sm:w-1/4 w-1/4 mt-3 mb-3 ml-20">
                    <p className="text-white p-2 font-bold text-center" id="zoneP">
                        0.2%
                        Zone
                    </p>
                    <div id="zone" className="text-green-500 text-xl text-center font-bold">0</div>

                </div>
                <div className="chapter bg-green-900 rounded-2xl sm:w-1/  w-1/4 mt-3 mb-3 ml-20">
                    <p className="text-white p-2 font-bold text-center">
                        0.1%
                        Chapter
                    </p>
                    <div id="chapter" className="text-green-500 text-xl text-center font-bold">0</div>

                </div>
                <div className="unit bg-green-900 rounded-2xl sm:w-1/4 w-1/6 mt-3 mb-3 ml-20">
                    <p className="text-white p-2 font-bold text-center">
                        0.2%
                        Unit
                    </p>
                    <div id="unit" className="text-green-500 text-xl text-center font-bold">0</div>

                </div>
                <div className="unit_bf bg-green-900 rounded-2xl sm:w-1/4 w-1/4 mt-3 mb-3 ml-20">
                    <p className="text-white p-2 font-bold text-center">
                        Unit B/F
                        
                    </p >
                    <div id="unitExp" className="text-green-500 text-xl text-center font-bold">{0}</div>
                        
                </div>
            </div>
        </section>

     )
}