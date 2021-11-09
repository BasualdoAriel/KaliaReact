import { NavBar } from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        
      <Switch>
          <Route exact path="/" component={ItemListContainer}/>
          <Route exact path="/item/:id" component={ItemDetailContainer}/>
          <Route exact path="/category/:catId" component={ItemListContainer} />
          <Route exact path ="/cart" component={Cart}/>
      </Switch>
    </BrowserRouter>
    
    
  );
}

export default App;
