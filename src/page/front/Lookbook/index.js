import React , {useState ,useEffect} from 'react'

import classNames from 'classnames'

import Marquee from "react-fast-marquee";

import "../../../style/css/lookbook.css"

export default function Lookbook() {
  const [fadeIn , setFadeIn] = useState(false) ;
    useEffect(()=>{
        setFadeIn(true);
    },[])
    let logoClass = classNames(
        'logo-title' ,
        'an-block' ,
        {"fade-in": fadeIn}
    )
  return (

    <div>
      <section>
          <div className="visual-container">
              <h2 className={logoClass}>VISUAL</h2>
          </div>
      </section>

      <Marquee
        speed={80}
        gradientWidth={300}
      >
        <div className="look-bg bg-cover" style={{
          backgroundImage:"url(https://images.unsplash.com/photo-1597019558926-3eef445fdf60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}}
        ></div>
        <div className="look-bg bg-cover" style={{
            backgroundImage:"url(https://images.unsplash.com/photo-1591311337241-cecfd26f1da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80)"}}
          ></div>
        <div className="look-bg bg-cover" style={{
            backgroundImage:"url(https://images.unsplash.com/photo-1563692712050-3e68350add0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}}
          ></div>
          <div className="look-bg bg-cover" style={{
            backgroundImage:"url(https://images.unsplash.com/photo-1563692712050-3e68350add0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}}
          ></div>
        <div className="look-bg bg-cover" style={{
            backgroundImage:"url(https://images.unsplash.com/photo-1575321539738-12cdc5ee584e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}}
          ></div>
          <div className="look-bg bg-cover" style={{
            backgroundImage:"url(https://images.unsplash.com/photo-1597769906771-dd0471091782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)"}}
          ></div>
      </Marquee>


      <Marquee
        speed={80}
        gradientWidth={300}
        direction={"right"}
      >
        <div className="look-bg bg-cover" style={{
          backgroundImage:"url(https://images.unsplash.com/photo-1597769906792-4b2f9a3403a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)"}}
        ></div>
        <div className="look-bg bg-cover" style={{
            backgroundImage:"url(https://images.unsplash.com/photo-1597769555495-c54a15cd8c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)"}}
          ></div>
        <div className="look-bg bg-cover" style={{
            backgroundImage:"url(https://images.unsplash.com/photo-1563692712050-3e68350add0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}}
          ></div>
          <div className="look-bg bg-cover" style={{
            backgroundImage:"url(https://images.unsplash.com/photo-1563692712050-3e68350add0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}}
          ></div>
      </Marquee>
      <Marquee
        speed={60}
        gradientWidth={100}
      >
        <div className="look-bg bg-cover" style={{
          backgroundImage:"url(https://images.unsplash.com/photo-1558388555-50f0410dd4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80)"}}
        ></div>
        <div className="look-bg bg-cover" style={{
            backgroundImage:"url(https://images.unsplash.com/photo-1622138675477-19b3b4af6f52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}}
          ></div>
        <div className="look-bg bg-cover" style={{
            backgroundImage:"url(https://images.unsplash.com/photo-1571937425607-79a48585688a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}}
          ></div>
      </Marquee>
    </div>
  )
}
