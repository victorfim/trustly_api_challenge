import './App.css';
import ReadWorldClockApi from './components/ReadWorldClockApi';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="myContent">      
      Select your option:<br/>
      <a href='/EST'>Eastern Starndard Time</a><br/>
      <a href='/CUT'>Coordinated Universal Time</a><br/>
      <a href='/CEST'>Central European Standard Time</a><br/>  
      <a href='/'>Clear</a>     

      <hr></hr>

      <BrowserRouter>
        <Switch>
          <Route exact path='/EST'>
            <ReadWorldClockApi messageTitle='Eastern Standard Time' isJSONP={false} url='http://worldclockapi.com/api/json/est/now'/>
          </Route>
          <Route exact path='/CUT'>
            <ReadWorldClockApi messageTitle='Coordinated Universal Time' isJSONP={false} url='http://worldclockapi.com/api/json/utc/now'/>
          </Route>
          <Route exact path='/CEST'>
            <ReadWorldClockApi messageTitle='Central European Standard Time' isJSONP={true} url='http://worldclockapi.com/api/jsonp/cet/now'/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
