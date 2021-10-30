import { NavBar } from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        
      <Switch>
          <Route path="/items" component={ItemListContainer}/>
          <Route path="/test" component={ItemDetailContainer}/>
      </Switch>
    </BrowserRouter>
    
    
  );
}

export default App;
