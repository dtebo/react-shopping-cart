import React, { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = props => {
	//Destructure products and addItem out of our context
	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{/*Loop through our products*/}
			{products.map(product => (
				/*Return Product */
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
