import React,{useState,useEffect,useContext} from 'react'
import {Context} from '../API'
import LineChart from './Line'
import BarChart from './Bar'
import './Charts.module.css'

export default function Charts() {
    const {lenght}=useContext(Context)
   
   

  

   
     

    return (
        
          <div className='row'>
              
                      <div className="col-md-6 col-sm-12 mt-4">
                       <LineChart/>
                      </div>
                      <div className="col-md-6 col-sm-12 mt-4">
                      <BarChart/>
                      </div>
                     
          </div>
            
    )
}

