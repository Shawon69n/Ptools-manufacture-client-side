import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import Loading from '../Shared/Loading';


const Login = () => {
  
  let signInError;
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  
  
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);


    // const [token] = useToken(user || gUser);

    // useEffect(()=>{
    //   if(token){
    //       navigate(from , {replace: true});
    //   }
    // },[token,from,navigate])

    



    if(loading || gLoading){
        return <Loading></Loading>
    }
   
    if(error || gError){
      signInError= <p  className='text-red-500'><small>{error?.message || gError?.message }</small></p>
  }
  const onSubmit = data => {
      signInWithEmailAndPassword(data.email,data.password)
  };

  if(user || gUser){
    navigate(from , {replace: true});
}


  return (
    <div className="hero min-h-screen bg-base-200 flex justify-center items-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className="text-center lg:text-left">
          <img className='mt-20 lg:w-4/6 lg:ml-36' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="" />
        </div>
        

        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className='flex justify-center items-center h-screen'>
            <div  className="card w-96 bg-base-100 shadow-xl">
                     <div  className="card-body">
                    <h2  className="text-xl text-center font-serif font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                <div  className="form-control w-full max-w-xs">
                    <label  className="label">
                        <span  className="label-text">Email</span>
                    </label>

                    <input
                                type="email"
                                placeholder="Your Email"
                                 className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />

                    <label  className="label">
            {errors.email?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>


                <div  className="form-control w-full max-w-xs">
                    <label  className="label">
                        <span  className="label-text">Password</span>
                    </label>

                    <input
                                type="password"
                                placeholder="Password"
                                 className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />



                    <label  className="label">
     {errors.password?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
     {errors.password?.type === 'minLength' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                      {signInError}          
                    <input  className='w-full max-w-xs btn btn-primary' type="submit" value='Login' />
                    </form>
                    <p  className='text-sm'>New to Ptools? <Link to='/signup'><span  className='text-sm text-orange-500'>Sign up now</span></Link></p>
                    <div  className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}  className="btn btn-outline btn-primary hover:btn-primary">Continue with google</button>
                     </div>
            </div>
        </div>




      </div>
    </div>
  );
};

export default Login;



  // <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-16">
  //         <div className="card-body">
  //           <h1 className='text-xl text-center font-serif font-bold'>Login</h1>
  //           <div className="form-control">
  //             <label className="label">
  //               <span className="label-text">Email</span>
  //             </label>
  //             <input type="text" placeholder="email" className="input input-bordered" />
  //           </div>
  //           <div className="form-control">
  //             <label className="label">
  //               <span className="label-text">Password</span>
  //             </label>
  //             <input type="text" placeholder="password" className="input input-bordered" />
  //             <label className="label">
  //               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
  //             </label>
  //           </div>
  //           <div className="form-control mt-6">
  //             <button className="btn btn-primary">Login</button>
  //           </div>
  //           <div className="divider">OR</div>

  //           <button className="btn btn-outline btn-primary hover:btn-primary ">Continue with Google</button>

  //         </div>
  //       </div>