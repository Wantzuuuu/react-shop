import React ,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import "../../../style/css/login.css"
import axios from 'axios';

export default function Login() {
    const email = useRef() ;
    const password = useRef() ;
    const navigate = useNavigate() ;
    const submitAcount = ()=>{
        const api = `${process.env.REACT_APP_URL}/admin/signin` ;
        const user = {
                "username": email.current.value,
                "password": password.current.value
        }

        axios.post(api , user)
            .then(res=>{
                if(res.data.success){
                    const token = res.data.token
                    const expired = res.data.expired
                    document.cookie = `token=${token}; expires=${new Date(expired)}`
                }
                navigate("dashboard") ;
            })
            .catch(err =>{
                console.log(err) ;
            })


        // console.log(user) ;

    }
  return (
    <div>
        <div className="login-bg bg-cover" style={{backgroundImage:"url(https://images.unsplash.com/photo-1635786169442-460f7834aa62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}}>
            <form className='login-form'>
                <div className="form-group">
                    <label htmlFor="logEmail">Email</label>
                    <input ref={email} id='logEmail' type="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="logPassword">Password</label>
                    <input ref={password} type="password" name="password" />
                </div>
                <a onClick={submitAcount} href="#!" className="border-btn text-center"><span>Login</span></a>
            </form>
        </div>
    </div>
  )
}
