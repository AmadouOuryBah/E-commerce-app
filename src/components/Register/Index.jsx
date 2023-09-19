import React from "react";
import indexCss from "../../components/Register/index.module.css"


const Register = () => {

    return (
        <section className={`{my-4 pb-4 row flex-column align-items-center justify-content-center ${indexCss.bg}`} >


          <div className={indexCss.container}>
        
      
          <form className={`{mt-4 row px-4  flex-column align-items-center justify-content-center } }`} >
          <h2 class="text-center mb-5 pt-3  text-uppercase flex-column align-items-center justify-content-center ">Create an account</h2>
              <div class=" mb-2 col-12">
                  <label class="form-label" for="">Your Name</label>
                  <input type="text" id=""  class="form-control shadow-none form-control-lg form-control-sm" />
                
              </div>

              <div class="form-outline mb-2 col-12">
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg shadow-none" />
                
              </div>

              <div class="form-outline mb-2 col-12">
              <label class="form-label" for="form3Example4cg">Password</label>
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg shadow-none" />
                
              </div>

                <div class="form-outline mb-4 col-12">
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg shadow-none" />
                
                </div>

                <div class="form-check d-flex justify-content-center mb-3 col-12">
                  <input class="form-check-input me-2 shadow-none" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center col-12" >
                  <button type="button"
                    class="btn  btn-block btn-lg px-5 text-body" style={{backgroundColor: " #72AEC8", border: "0", color: "white", width: "100%", fontSize: "13px"}}>REGISTER</button>
                </div>

                <p class="text-center text-muted mt-2 mb-0 col-12" >Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>
          </div>

          
    
      </section>
                  
    )
}

export default Register