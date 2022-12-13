import React ,{useState , useEffect} from 'react'

import BorderBtn from '../../../components/BorderBtn'
import ProductCard from '../../../components/ProductCard'
import "../../../style/css/index.css"

import classNames from 'classnames'


export default function Index(props) {
  return (
    <div>
        <Banner></Banner>
        <section className='index-product-section'>
            <div className="index-product-container">
                <div className="index-product-wrap">
                    {
                        props.product.map((p , idx)=>{
                            return <div className="item" key={p.id}>
                                <ProductCard product={p}/>
                            </div>
                        }) 
                        
                    }
                </div>
            </div>
            
        </section>
    </div>
  )
}

export function Banner(){
    // TODO:
    const [fadeIn , setFadeIn] = useState(false) ;
    useEffect(()=>{
        setFadeIn(true);
    },[])
    let logoClass = classNames(
        'logo-title' ,
        'an-block' ,
        {"fade-in": fadeIn}
    )

    let bannerClass = classNames(
        'banner-img-container' ,
        'an-block' ,
        'delay-4' ,
        {"fade-in": fadeIn}
    )
    
    return(
        <div>
            <section>
                <div className="banner-container">
                    <h2 className={logoClass}>WDESIGN</h2>
                </div>
            </section>

            <section>
                <div className={bannerClass}>
                    <div className="banner-img bg-cover" style={{backgroundImage:"url(https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)"}}>
                        <div className="banner-content">
                            <p className="small-banner-title">2022-2nd COLLECTION</p>
                            <div className="banner-title">VISUAL</div>
                            <BorderBtn path={"lookbook"}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
