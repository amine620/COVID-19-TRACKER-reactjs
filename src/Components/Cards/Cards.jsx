import React,{useContext,useEffect,useState} from 'react'
import CountUp from 'react-countup'
import {Context} from '../API'
import download from '../../img/image.png'
import {Spinner} from '../Spinner/Spinner'

import './Cards.css'

export default function Cards() {

    const {cardData}=useContext(Context)

    if(!cardData.data)
    return (<Spinner/>)

    const {confirmed,recovered,deaths,lastUpdate}=cardData.data
   
  

    return (
    
    <div>
        <div className='row mt-4 text-center mb-4'>
            <img className='offset-1'  src={download} alt=""/>
        </div>
        <div className='row mt-4'>
            <div className="card  col-md-3 col-sm-12">
                <div className="card-body">
                    <h4 className="card-title text-secondary">infected</h4>
                    <h2 className="card-text text-primary">
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=','/>
                        </h2>
                    <h4 className="card-title ">{ new Date(lastUpdate).toDateString() } </h4>
                    <p className="card-title text-secondary">Number of active cases of COVID-19 :  </p>
                </div>
            </div>
             

            <div className="card recovered col-md-3  col-sm-12">
                <div className="card-body">
                    <h4 className="card-title text-secondary">recovered</h4>
                    <h2 className="card-text text-success">
                        <CountUp start={0} end={recovered.value} duration={2.5} separator=','/>
                    </h2>
                    <h4 className="card-title t">{ new Date(lastUpdate).toDateString() } </h4>
                    <p className="card-title text-secondary">Number of recoveries from COVID-19 :</p>
                </div>
            </div>

            <div className="card deaths col-md-3 col-sm-12">
                <div className="card-body">
                    <h4 className="card-title text-secondary">deaths</h4>
                    <h2 className="card-text text-danger">
                        <CountUp start={0} end={deaths.value} duration={2.5} separator=','/>
                    </h2>   
                    <h4 className="card-title ">{ new Date(lastUpdate).toDateString() }</h4>
                    <p className="card-title text-secondary">Number of deaths </p>
                </div>
            </div>
                 
       </div>
    </div>
    )
}
