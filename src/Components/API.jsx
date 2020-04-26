import React,{useEffect,useState,createContext} from 'react';
import axios from 'axios'
const url=' https://covid19.mathdro.id/api'


export const Context=createContext()

export const Api= (props) => {


const [cardData,setcardData]=useState([])
const [dailyData,setdailyData]=useState([])
const [countries,setcountries]=useState([])
const [chartCountrie,setchartCountrie]=useState({})
const [isoName,setisoName]=useState({name:'',iso:''})

//////////fetch data in cards
 useEffect(() =>  {
  const  fetchApi = async () => {
      if(isoName.name && isoName.iso)
      {
          setcardData(
            await  axios.get(url+'/countries/'+isoName.name)
            )
      }
      else{
          setcardData(await axios.get(url)) 

      }
        
    };
    fetchApi()
},[cardData]);

///////set dayliData in  state to display it after in chart Line

useEffect(() => {
    const fetchDayli= async () => {
        setdailyData(
            await axios.get(url+'/daily')
        )
    };
    fetchDayli()
}, []);

/////set countries names in countries to  display them in dropdown menu
// in component CountryPicker
useEffect(()=>{
    const fetchCountries=async()=>{
       setcountries(
           await axios.get(url+'/countries')
       )
    }
    fetchCountries()
},[])

//////fetch data  per country in chart Bar

const fetchToChartBar=async(name)=>{
    
          
//set information of each country in this state to display them in chart Bar
           setchartCountrie(
            await  axios.get(url+'/countries/'+name)

            ) 
//  we take the name coming from the countryPicker component and 
//and we search trought the countries state if name of country exist
// then  we set iso2 in iso state 
//(iso is the sub name of the country we need the iso to display the flag logo)

     const {data}=countries
     const res = data.countries.filter(el=>el.name==name)
       .map(el=>el.iso2)
       setisoName({
        iso:res,
        name:name
       })
       console.log(isoName)
           
        
}


    return (
        <div>
            <Context.Provider value={{
                cardData,// is a state call it in card component
                dailyData //is a state call it in Line component 
                ,countries // is a state call it in country picker component 
                ,fetchToChartBar // is a funcition call it in countryPicker component
                ,chartCountrie // is state call it in Bar component 
                ,isoName // is a state call it in Bar component 
                }}>

                {props.children}
            </Context.Provider>
        </div>
    );
}


