import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import { NavigationContext } from './contexts/NavigationContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([
			...cart,
			item
		]);
	};

	const removeItem = itemToRemove => {
		// remove the given item from the cart
		setCart([
			...cart.filter((i) => { 
				console.log(`from remove item: id: itemToRemoveId: `, i.id, itemToRemove.id);
				return i.id !== itemToRemove.id
			})
		]);
	};

	return (
		<div className="App">
			<NavigationContext.Provider value={{cart}}>
				<Navigation cart={cart} />
			</NavigationContext.Provider>
			<ProductContext.Provider value={{products, addItem}}>
				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>
			</ProductContext.Provider>
			<CartContext.Provider value={{cart, removeItem}}>
				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
