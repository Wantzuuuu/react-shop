import React ,{useEffect ,useState} from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';

import "../../../style/css/detail.css"

export default function Deatil() {

    let {id} = useParams() ;
    const [detail ,setDetail] = useState({})


    const getDetail = (id)=>{
        axios
          .get(`${process.env.REACT_APP_URL}/api/${process.env.REACT_APP_NAME}/product/${id}`)
          .then(res=>{
            setDetail(res.data.product) ;
          })
          .catch(err=>{
            console.log(err) ;
          })
    }

    useEffect(()=>{
        getDetail(id) ;
    },[])
    
    let {title , price , description ,image} = detail ;
    console.log(title) ;

  return (
    <div>
        <div className="detail-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="detail-image bg-cover" style={
                            {backgroundImage: `url(${image})`}
                        }></div>
                    </div>
                    <div className="col-lg-7">
                        <div className="product-des-block">
                            <div className="product-des-top">
                                <h2 className="des-title">{title}</h2>
                                <p className="product-price">${price}</p>
                            </div>
                            <hr />
                            <div className="product-des-mid">
                                <p className="product-des">{description}</p>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


