import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

import "../../style/css/footer.css"
export default function Footer() {
  return (
    <Fragment>
        <div className="footer">
            <div className="footer-container">
                <div className="footer-wrap">
                    <div className="link-list-block">
                        <Link className="f-link link-block">
                            <h2 className="logo-title">WDESIGN</h2>
                        </Link>
                    </div>
                    <div className="link-list-block">
                        <ul className='link-list'>
                            <li>
                                <Link to="/" className="link-block f-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/products" className="link-block f-link">All items</Link>
                            </li>
                            <li>
                                <Link to="/lookbook" className="link-block f-link">VISUAL</Link>
                            </li>
                            <li>
                                <Link className="link-block f-link">News</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="link-list-block">
                        <p className='copyright'>
                            WDESIGN VISUALUPARMORED
                            COPYRIGHT © NEIGHBORHOOD CO.,LTD.
                            <br/>
                            ALL RIGHTS RESERVED.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </Fragment>
  )
}
