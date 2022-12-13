import React,{Fragment , useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import "../../style/css/header.css"

export default function Header() {

    const [menuImg] = useState("https://images.unsplash.com/photo-1569135579442-d37b7a0ea74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80")
    const [menuState , setMenuState] = useState(false) ;
    const [menuHideState , setMenuHideState] = useState(true) ;
    const [menuTxtState , setMenuTxtState] = useState(false) ;
    // TODO: menuClass
    let menuBlock = classNames(
                        "menu-block" , 
                        {"open" : menuState} , 
                        {"hide" : menuHideState}
                    ) ;

    let logoTitle = classNames(
        "logo-title" , 
        "text-fade-bottom",
        {"scale" : menuTxtState}
    )

    let menuLink = classNames(
        "link-block" , 
        "menu-link" ,
        "text-fade-bottom" ,
        "delay-8" ,
        {"scale" : menuTxtState}
    )

    let menuCategoryBtn = classNames(
        "menu-category-btn" , 
        "link-block" ,
        "text-fade-bottom" ,
        "delay-8" , 
        {"scale" : menuTxtState}
    )

    let iconBtn = classNames(
        "link-block" , 
        "icon-btn" ,
        "text-fade-bottom" ,
        {"scale" : menuTxtState}
    )
                    

    const controlMenu = ()=>{
        setMenuHideState(false) ;
        setMenuState(!menuState) ;
        setMenuTxtState(!menuTxtState) ;
    }

    const cancelMenu = ()=>{
        setMenuState(false) ;
        setMenuTxtState(!menuTxtState) ;
        setTimeout(()=>{
            setMenuHideState(!menuHideState) ;
        } , 400)
    }

    const navigate = useNavigate() ;
    const goPath = (path) =>{
        navigate(path) ;
        cancelMenu() ;
    }

    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <div className="header-wrap">
                        <a onClick={controlMenu} href="#!" className="menu-btn link-block">
                            <span className="icon-menu"></span>
                        </a>
                        <Link to="/" className="logo-btn">
                            <h2 className="logo-title link-block">WDESIGN</h2>
                        </Link>
                        <Link className="link-block">
                            <span className="icon-shopping_bag"></span>
                        </Link>
                    </div>
                </div>
            </header>

            <div className={menuBlock}>
                <div className="menu-block-wrap">
                    <div className="menu-bg-block menu-item">
                        <div className="menu-bg bg-cover"
                            style={{backgroundImage: `url(${menuImg})`}}
                        >
                        </div>
                    </div>
                    <div className="menu-list-block menu-item">
                        <div className="menu-list-container">
                            <div className="menu-list-top">
                                <div className="menu-list-top-wrap">
                                    <div>
                                        <h2 className={logoTitle}>WDESIGN</h2>
                                    </div>
                                    <div>
                                        <a onClick = {cancelMenu} href="#!" className="cancel-menu link-block">
                                            <span className="icon-dismiss"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-list-mid">
                                <div className="menu-list-wrap">
                                    <div className="menu-list-item">
                                        <ul className="menu-list ul-list-none">
                                            <li>
                                                <a onClick={()=> goPath("/")} className={menuLink} href="#">Home</a>
                                            </li>
                                            <li>
                                                <Link className={menuLink}>News</Link>
                                            </li>
                                            <li>
                                                <a onClick={()=> goPath("/lookbook")} className={menuLink} href="#">Visual</a>
                                            </li>
                                            <li>
                                                <Link className={menuLink}>Stockists</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menu-list-item">
                                        <a onClick={()=> goPath("/products")} className={menuLink} href="#">Items</a>
                                    <ul className="menu-category-list ul-list-none">
                                        <li>
                                            <a onClick={()=> goPath("/products")} href='#!' className={menuCategoryBtn}>Jacket</a>
                                        </li>
                                        <li>
                                            <a onClick={()=> goPath("/products")} href='#!' className={menuCategoryBtn}>Shirt</a>
                                        </li>
                                        <li>
                                            <a onClick={()=> goPath("/products")} href='#!' className={menuCategoryBtn}>Cut&Sewn</a>
                                        </li>
                                        <li>
                                            <a onClick={()=> goPath("/products")} href='#!' className={menuCategoryBtn}>Trousers</a>
                                        </li>
                                        <li>
                                            <Link className={menuCategoryBtn}>Hat.Cap</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="menu-list-bottom">
                            <div className="menu-icon-wrap">
                                <div className="item">
                                    <a href="#!" target="_blank" className={iconBtn}>
                                        <span className="icon-github"></span>
                                    </a>
                                </div>

                                <div className="item">
                                    <a href="#!" target="_blank" className={iconBtn}>
                                        <span className="icon-instagram"></span>
                                    </a>
                                </div>

                                <div className="item">
                                    <a href="#!" target="_blank" className={iconBtn}>
                                        <span className="icon-facebook2"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
