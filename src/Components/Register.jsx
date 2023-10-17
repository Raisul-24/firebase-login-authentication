// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

   const { createUser } = useContext(AuthContext);
   // console.log(authInfo);


   const handleRegister = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const name = e.target.name.value;
      console.log(name, email, password);


      // create user
      createUser(email, password)
      .then(result =>{
         console.log(result.user);
      })
      .catch (error =>{
         console.error(error);
      })

   }
   return (
      <div>
         <h1 className="text-5xl font-bold text-center my-4">Register now!</h1>

         <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">

               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleRegister}>
                     <div className="card-body">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Name</span>
                           </label>
                           <input type="text"
                              placeholder="name"
                              name="name"
                              className="input input-bordered" />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Email</span>
                           </label>
                           <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Password</span>
                           </label>
                           <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                           <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                           </label>
                        </div>
                        <div className="form-control mt-6">
                           <input type="submit" className="btn btn-primary" value="Register" />

                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;