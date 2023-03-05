import { useRef } from "react";

function Contact() {
        let nameRef = useRef();
        let locationRef = useRef();
        let phoneRef = useRef();
        let emailRef = useRef();
      
        function handleSubmit(e) {
          e.preventDefault();
      
          let client= {
            name: nameRef.current.value,  
            title: locationRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            id: crypto.randomUUID(),
          };
      
          console.log(client);
 
      
        } 
        return (
      <div className= "App">
         <div className="Form1">
            <div className= 'subForm' >
              <form onSubmit={handleSubmit}>
               <label className="name">Name</label>

               <input id="name" ref={nameRef} />
               <label  className="location">Location</label>

               <input id="title" ref={locationRef} />
               <label className="phone">Phone</label>

               <input id="phone" ref={phoneRef} />
               <label className="email">Email</label>

               <input id="email" ref={emailRef} />
               <button className="Submit">Sign Up </button>
              </form>
              </div>   
           </div>
        </div>
        );
      }

export default Contact;