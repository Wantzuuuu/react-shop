import React ,{useEffect , useState} from 'react'
import { Route , Routes } from 'react-router-dom';
import axios from "axios";

import Header from "../components/Header"
import Footer from "../components/Footer";
import Index from "../page/front/Index";
import Lookbook from "../page/front/Lookbook";
import Products from "../page/front/Products";
import Deatil from '../page/front/Detail';
import NoMatch from "../page/NoMatch";

import { connect } from 'react-redux'

import { getProduct } from '../redux/actions/product'


function FrontView(props) {

  const [loading ,setLoading] = useState(false) ;

  const fetchProduct = ()=>{
    axios
      .get(`${process.env.REACT_APP_URL}/api/${process.env.REACT_APP_NAME}/products/all`)
      .then(res=>{
        setLoading(true) ;
        props.getProduct(res.data.products) ;
        setLoading(false) ;
      })
      .catch(err=>{
        console.log(err) ;
      })
  }


  useEffect(()=>{
    fetchProduct()
  },[])

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path={"/"} element={<Index product={props.product} />}></Route>
        <Route path={"lookbook"} element={<Lookbook/>}></Route>
        <Route path={"products"} element={<Products product={props.product} fetchProduct={fetchProduct}/>}></Route>
        <Route path={"product/detail/:id"} element={<Deatil/>}></Route>
        <Route path="*" element={<NoMatch/>}></Route>
      </Routes>

      <Footer></Footer>

      <Loading loading = {loading}/>
    </div>
  )
}

export default connect(
  state => ({product: state.product , }),
  {getProduct : getProduct}
)(FrontView)


export function Loading(props){
  return(
      <div style={{display: props.loading ? "block" : "none"}}>
          <div className="loading-block" 
            
          >
            <p className="logo-title">WDESIGN</p>
          </div>
      </div>
  )
}