import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "./CSS/App.css";
import Searchpage from "./Router/SearchPage";
import DetailPage from "./Router/DetailPage"; 



function App (){
 
  return(
    <Router>
      <Switch>
        <Route exact path = "/" exact component = {Searchpage}/>
        <Route path="/book/:bookId" exact component={DetailPage} />
        
      </Switch>
    </Router>
  )
}
export default App