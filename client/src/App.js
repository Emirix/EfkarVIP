import "./App.css";
import Video from "./Video";
import ferdi from "./ferdi-tayfur-1.png";
import Baba from "./Baba";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Admin from "./Admin";
import Loading from "./Loading";
import { useEffect, useState } from "react";

function App() {

  const [isLoading,setLoading] = useState(true)
  const [isLoadingDisplay,setLoadingDisplay] = useState(true)

  useEffect(()=>{
    setInterval(function(){
      setLoading(false)
    },5000)

    setInterval(function(){
      setLoadingDisplay(false)
    },6000)
  })

  useEffect(()=>{

    console.log(`Girilen Cihaz : ${window.navigator.userAgent}`)

  },[])

  return (
 <Router>
      <div>

      <Switch>
        <Route path="/admin">
         <Admin/>
        </Route>

        <Route path="/">

          {isLoadingDisplay ?  <Loading loading={isLoading} /> : <></>}
          
     
        <div className="App">
      
            <div className="header">
              <h1>Efkar VIP</h1>
              <p>sonra Buraya Efkarlı söz rastgele</p>
            </div>
            <Video />
            <Baba />
            <img src={ferdi} alt="müslüm gürses" className="ferdi_BABA2" draggable="false" />
          </div>
        </Route>


      </Switch>

</div>
    </Router>


  );
}

export default App;
