import React from 'react';
import ProductProps from '../Products/ProductProps';

const ProductsComponent = () => {

  const handleUpdate = () => {
    console.log('Update button clicked');
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
  };

  return (
    <div>
    
      <ProductProps
        picture="Picture goes here"
        name="Product Name"
        description="Product description goes here."
        ProductPrice="Product Price"
        imageUrl={""}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ProductsComponent;
