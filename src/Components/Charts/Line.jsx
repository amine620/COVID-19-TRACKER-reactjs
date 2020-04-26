import React,{useContext} from 'react'
import {Context} from '../API'
import {Line} from 'react-chartjs-2'


 const LineChart=()=>{

    const {dailyData}=useContext(Context)
     
    if(!dailyData.data)
    return ''
   const {data}=dailyData


const LineChart1=

(
     
        <Line
 
        data={{
              labels:data.map(el=>el.reportDate),
              datasets:[
                {
                    label:'infected',
                  data:data.map(el=>el.totalConfirmed),
                  borderColor:'blue',
                  
                  
                },
                {
                    label:'deaths',
                    data:data.map(el=>el.deaths.total),
                    borderColor:'red',
                    backgroundColor:'rgb(225,0,0,0.5)',
                   
                    
                },

            ]

         }}
      
    />
)




       return(
           <div>
                  {LineChart1}
           </div>
       )
}
export default LineChart