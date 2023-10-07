import React from "react";
import indexCss from "../../components/Login/index.module.css"


const Login = () => {

    return (
        <section className={`{my-4 pb-4 row flex-column align-items-center justify-content-center ${indexCss.bg}`} >


          <div className={indexCss.container}>
        
      
          <form className={`{mt-4 row px-4  flex-column align-items-center justify-content-center } }`} >
          <h2 class="text-center mb-5 pt-3 flex-column align-items-center justify-content-center ">Sign In</h2>

              <div class="form-outline mb-2 col-12">
                  <label class="form-label" for="">Email address</label>
                  <input type="email" id="" class="form-control form-control-lg shadow-none"  />
                
              </div>

              <div class="form-outline mb-2 col-12">
              <label class="form-label" for="">Password</label>
                  <input type="password" id="" class="form-control form-control-lg shadow-none"  />
                
              </div>

                <div class="d-flex mt-3 justify-content-center col-12" >
                  <button type="button"
                    class="btn fw-bold btn-block btn-lg px-5 text-body" style={{backgroundColor: " #72AEC8", border: "0", color: "white", width: "100%", fontSize: "16px"}}>log in</button>
                </div>

                <div class="text-center  d-flex justify-content-space-between  text-muted mt-2 mb-0 col-12" >
                    <a href="#!" class="text-body ">forgot your password ? </a>
                    <a href="/Register"> Sign up</a>
                  
                </div>

              </form>
          </div>

          
    
      </section>
                  
    )
}

export default Login