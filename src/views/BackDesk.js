import React,{useEffect ,useState} from 'react'
import { Route , Routes , useNavigate } from 'react-router-dom'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from '../page/backdesk/Login'
import Dashboard from '../page/backdesk/Dashboard'

export default function BackDesk() {

    const [isLogin ,setIsLogin] = useState(false) ;
    const [mounted , setMounted] = useState(false) ;
    const navigate = useNavigate() ;

    const [products , setProduts] = useState([]) ;
    const [allProducts , setAllProduts] = useState({}) ;

// TODO:驗證路由
  const reauiredPage = (isLogin , component)=>{
    if(isLogin){
      return component
    }
    return <Login/>
  }
  if(!mounted){
    const api = `${process.env.REACT_APP_URL}/api/user/check` ;

    axios.post(api)
        .then(res=>{
            if(res.data.success){
                setIsLogin(res.data.success) ;
            }else{
                navigate("/manager");
            }
            
        })
        .catch(err =>{
            console.log(err) ;
        })
  }
  useEffect(()=>{
    setMounted(true) ;
    getProducts() ;
    getAllProducts() ;
  },[])

  const getProducts = (page=1)=>{
    axios
      .get(`${process.env.REACT_APP_URL}/api/${process.env.REACT_APP_NAME}/admin/products?page=${page}`)
      .then(res=>{
        setProduts(res.data.products)
      })
      .catch(err=>{
        console.log(err) ;
      })

  }

  const getAllProducts = ()=>{
    axios
      .get(`${process.env.REACT_APP_URL}/api/${process.env.REACT_APP_NAME}/admin/products/All`)
      .then(res=>{
        setAllProduts(res.data.products)
      })
      .catch(err=>{
        console.log(err) ;
      })

  }

  return (
    <div>
        <Routes>
            <Route path={"*"} element={<Login/>}/>
            <Route path={"login"} element={<Login/>}/>
            <Route path={"dashboard"} element={reauiredPage(true , <Dashboard products={products} allProducts={allProducts} getProducts={getProducts} />)}/>
            {/* <Route path={"dashboard"} element={<Dashboard/>}/> */}
        </Routes>
    </div>
  )
}
