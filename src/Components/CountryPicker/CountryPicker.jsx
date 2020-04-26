import React,{useContext,useState} from 'react'
import {Context} from '../API'

export default function CountryPicker() {
const {countries,fetchToChartBar,isoName}=useContext(Context)


if(!countries.data)
    return ''
    const {data}=countries

    const sendToApi=(e)=>{
       fetchToChartBar(e.target.value)
   
      
   
     }
   
    return (
           
        <div className="row mt-4 mb-4">
            <div className="col-md-6 col-sm-12">
                    <select   onChange={sendToApi.bind(this)} className="custom-select" id="gender2">
                        <option value='total' >Choose...</option>
                        {
                            data.countries.map((el,i)=>(
                            <option  key={i} value={el.name}>{el.name}
                            </option>

                            ))
                        }
                    </select> 
            </div>
      
          
              <div className="col-md-3 offset-3 text-center">
                <h3 className='text-secondary'>{isoName.name}</h3>
                <img  src={"https://www.countryflags.io/"+isoName.iso+"/flat/64.png"}/>
              </div>
           
           

        </div>

     
    )
}
