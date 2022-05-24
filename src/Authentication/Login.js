import React from 'react';

const Login = () => {
  return (
    <div class="hero min-h-screen bg-base-200 flex justify-center items-center">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" class="text-center lg:text-left">
          <img className='mt-20 lg:w-4/6 lg:ml-36' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-16">
          <div class="card-body">
            <h1 className='text-xl text-center font-serif font-bold'>Login</h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" class="input input-bordered" />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
            <div class="divider">OR</div>

            <button class="btn btn-outline btn-primary hover:btn-primary ">Continue with Google</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;