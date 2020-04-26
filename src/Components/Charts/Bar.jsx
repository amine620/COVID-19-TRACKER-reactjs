import React,{useContext} from 'react'
import {Bar} from 'react-chartjs-2'
import {Context} from '../API'
import {Spinner2} from '../Spinner/Spinner'

export default function BarChart() {
    const {chartCountrie}=useContext(Context)


    if(!chartCountrie.data)
    return (<Spinner2/>)

    const {confirmed,recovered,deaths,lastUpdate}=chartCountrie.data

  const LineChart2=
        (
             <Bar
     
            data={{
                  labels:['infected','recovered','deaths'],
                  datasets:[
                    {

                      
                      backgroundColor:[
                          'rgba(0, 79, 225, 0.582)',
                          'rgba(0, 225, 11, 0.582)',
                          'rgb(225,0,0,0.5)'
                        ],
                        data:[confirmed.value,recovered.value,deaths.value],

                      
                    },
                   
                ]

             }}
             options={{
                title:{
                  display:true,
                  text:'Last Update'+' '+new Date(lastUpdate).toDateString(),
                  fontSize:20
                },
                legend:{
                  display:false,
                }
              }}
          
        /> 
        )
         

      
    return (
        <div className='text-center'>
            {LineChart2}

        </div>
    )
}
