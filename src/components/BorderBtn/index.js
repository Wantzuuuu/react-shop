import React from 'react'

import { Link } from 'react-router-dom'
import "../../style/css/borderbtn.css"

import classNames from 'classnames';

export default function BorderBtn(props) {
    const {path} = props

  return (
    <div>
        <Link to={path} className="border-btn"><span>MORE</span></Link>
    </div>
  )
}


export function BorderBtnLight(props) {
    const {path} = props

  return (
    <div>
        <Link to={path} className={classNames(
            "border-btn" 
            , "border-light")
            }>
                <span>MORE</span>
        </Link>
    </div>
  )
}
