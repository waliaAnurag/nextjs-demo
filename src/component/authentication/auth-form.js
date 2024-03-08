import { useState, useRef } from 'react';
import classes from '../../styles/auth-form.module.css';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordRef = useRef();
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function createUser(email,password){
    const response = await fetch("/api/auth/signup",{
      method : "POST",
      body : JSON.stringify({email,password}),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    console.log("I am called")
    // let bookId = 12345
    // const requestBody = {
    //   bookReview: "this is great"
    // }
    // const response = await fetch(`/api/review/${bookId}`, {
    //   method: 'PUT',
    //   body: JSON.stringify(requestBody),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
   
    const data = await response.json();
    if(!response.ok){
      throw new Error(data.message || 'Something went wrong! ')
    }
    return data;
  }

  async function submitHandler(evt){
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordRef.current.value;
    evt.preventDefault();
    if(isLogin){

    }
    else{
      try{
        const result = await createUser(enteredEmail,enteredPassword)
        console.log(result)
      }catch(errr){
        console.log("error occurred",errr)
      }
      
    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
