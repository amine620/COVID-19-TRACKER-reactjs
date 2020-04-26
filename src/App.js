import React,{ Component, useContext} from 'react';
import Cards from './Components/Cards/Cards'
import Charts from './Components/Charts/Charts'
import CountryPicker from './Components/CountryPicker/CountryPicker'
import {Api} from './Components/API'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Components/App.module.css'


class App extends Component{ 

render() {
  
  return (
<Api>
    <div className="App container">
      
          <Cards/>

        <CountryPicker/>    

        <Charts/>
  
  

 
    </div>
     </Api>
  );
}
}

export default App;
