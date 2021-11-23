import { NavBar } from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './components/Cart/Cart';
import {CartProvider} from './contexts/CartContext'
import { CheckOut } from './components/Chekout/Chekout';


function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    
                        <Route exact path="/" component={ItemListContainer}/>
                        <Route exact path="/item/:id" component={ItemDetailContainer}/>
                        <Route exact path="/category/:catId" component={ItemListContainer} />
                        <Route exact path ="/cart" component={Cart}/>
                        <Route exactr path="/checkout" component={CheckOut}/>
                </Switch>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
