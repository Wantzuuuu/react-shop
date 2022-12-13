import React , {useState ,useEffect} from 'react'

import axios from "axios";

import ProductCard from '../../../components/ProductCard'
import "../../../style/css/products.css"



export default function Product(props) {
  const productLen = props.product.length

  const [category , setCategory] = useState("")
  const [product , setProduct] = useState([])
  const [fProduct , setFProduct] = useState([])


  const fetchProduct = ()=>{
    axios
      .get(`${process.env.REACT_APP_URL}/api/${process.env.REACT_APP_NAME}/products/all`)
      .then(res=>{
        setProduct(res.data.products)
        setFProduct(res.data.products)
      })
      .catch(err=>{
        console.log(err) ;
      })
  }

  const filterProduct = (e)=>{
    setCategory()

    
    let newArr = product.filter((p)=>{
      setCategory(e.target.value)
      if(e.target.value === p.category){
        return p
      }else if(e.target.value == "All"){
        return product
      }
    })
    setFProduct(newArr) ;
    
  } 

  useEffect(()=>{
    fetchProduct()
  },[])
  return (
    
    <div>
      <div className="product-header">
        <div className="product-header-wrap">
          <div className="products-title-block">
            <h3 className="product-page-title">All Items</h3>
            <h3 className="products-len">
              <span>{productLen}</span><span>items</span>
            </h3>
          </div>
          <div className="products-filter-block">
            <h4 className="filter-title">Category</h4>
            <div className="products-select-wrap">
              <select onChange={filterProduct} className="products-select">
                <option value="All">All Items</option>
                <option value="Jacket">Jacket</option>
                <option value="Shirt">Shirt</option>
                <option value="Cut&Sewn">Cut&Sewn</option>
                <option value="Trousers">Trousers</option>
                <option value="Hat.Cap">Hat.Cap</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="product-container">
        <div className="product-wrap">
          {
            fProduct.map(product=>{

              return <div className="item" key={product.id}>
                 <ProductCard product={product}/>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
