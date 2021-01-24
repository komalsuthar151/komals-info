import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import emailjs from 'emailjs-com';
import Footer from './footer';


class Contact extends Component {
  
  render() {
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_xqsjb3w', 'template_wbhj6jq', e.target, 'user_PaJSQ9A44YKtvzJPcou1s')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        console.log("sent");
      e.target.reset();

    }
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
           <Cell col={6}>
            <h3 style={{color:'#17a2b8'}}>Contact Me</h3>
            <hr/>

          <form className="form-group" onSubmit={sendEmail}>
              <input  className="form-control" type="text" name="name" placeholder="Name" required/>
              <input  className="form-control" type="email" name="email" placeholder="Email" required/>
              <input  className="form-control" type="number" name="phone" placeholder="Phone Number"/>
             <textarea  className="form-control" name="message" placeholder="Message"/>
            <input type="submit" class="btn btn-secondary js-scroll-trigger" value="Send" />
          </form>

          </Cell>
          <Cell col={12}>
        <Footer/>        
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
