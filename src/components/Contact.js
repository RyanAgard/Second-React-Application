import { useRef } from "react";

function Contact() {
        let nameRef = useRef();
        let titleRef = useRef();
        let phoneRef = useRef();
        let emailRef = useRef();
      
        function handleSubmit(e) {
          e.preventDefault();
      
          let employee = {
            name: nameRef.current.value,  
            title: titleRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            id: crypto.randomUUID(),
          };
      
          console.log(employee);
 
      
        } 
        return (
          <div className = "App">
          <form onSubmit={handleSubmit}>
            <label className="name">Name</label>
            <input id="name" ref={nameRef} />
      
            <label  className="title">Title</label>
            <input id="title" ref={titleRef} />
      
            <label className="phone">Phone</label>
            <input id="phone" ref={phoneRef} />
      
            <label className="email">Email</label>
            <input id="email" ref={emailRef} />
      
            <button className="submit">Submit</button>
           </form>   
        </div>
        );

      }

export default Contact;