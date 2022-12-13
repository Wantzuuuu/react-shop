import React from 'react'

export default function Header(props) {
  return (
    <div>
        <div className="manager-header">
            <h2 className='logo-title'>WDESIGN</h2>
            <button onClick={props.logOut}>登出</button>
        </div>
    </div>
  )
}
