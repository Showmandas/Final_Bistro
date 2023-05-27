import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();
  const captchaRef=useRef(null)
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                // navigate(from, { replace: true });
            })
    }
    const handleValidateCaptcha=()=>{
        const user_val_captcha=captchaRef.current.value;
        // console.log(val)
        if(validateCaptcha(user_val_captcha)){
            setDisabled(false)

        }else{
setDisabled(true)
        }


    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
            <div className="text-center md:w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="enter email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="enter password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>  
                    <div className="form-control">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <input ref={captchaRef} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                        <button className='btn btn-outline btn-xs mt-2' onClick={handleValidateCaptcha}>Validate</button>
                    </div>
                    <div className="form-control mt-6">
                        <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
            </div>
        </div>
    </div>
    );
};

export default Login;