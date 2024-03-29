import React, { useEffect, useState } from 'react'

const Products = () => {

    const [productList ,  setProductList] = useState([]);
    const [show , setHide] =useState(true);

    const callProducts  = async() => {
        let { products } = await fetch("https://dummyjson.com/products").then((res) => res.json());
        console.log("products ::::::::::::::: ",products)
        setProductList(products);
    }
    
    // Component Did mount
    useEffect(()=>{
        console.log("I am calling Product !!!" , show);
        callProducts();
        return () => {
            // when ever we use this return with callback, it stands for willUnMount.
        }
    }, [show]); // [show] dependency array  
    // when there is a value in depenedcy array, it stands component didmount




  return (
    <div>
        <button onClick={() => {
            setHide((prev) => !prev)
        }}>
            Show & Hide
        </button>
        {
            show ? productList.map((item) => {
                let {images, title, brand, category  } = item;
                return <div>
                    <h1>Title : {title}</h1>
                    <h2>Brand : {brand}</h2>
                    <h3>Category : {category}</h3>
                    <img src ={images[0]} />
                    <div style={{ marginBottom : "10px"}}> </div>
                </div> 
            }) : <div>I am Hide now</div>
        }
    </div>
  )
}

export default Products