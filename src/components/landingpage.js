import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from './footer';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid home">
          <Cell col={8}>
            <div >
              <br/><h3 style={{color:"#49abd1"}}>Hello, I am Komal<br/>Welcome to my Website</h3>
              <p style={{margin:'auto', padding:'5px', fontFamily:'Verdana, sans-serif'}}>I am a passionate web developer. Checkout my work. Feel free to send a message or just 'Hi'. I would love to hear your feedback.</p>
              <h4 style={{color:"#49abd1"}}>About Me</h4>
              <p style={{margin:'auto', fontFamily:'Verdana, sans-serif'}}>Software Engineer | MS in Information Systems, Boston, MA <br/>Ambitious Software Engineer. I like building websites with great user experience, travelling, listening to music. I am an adventurous person. Let's find out more...</p>
              </div>
              </Cell>
              
              <Cell className="avatar" col={4}>
              <img src="https://lh3.googleusercontent.com/G2Sh3ReoAOadqTIfw6iC-JIjn68cAH2DmRFhSL6wst6cLE1Tsu01J9BcKCrqMcCFVk6KlbUO-GgjE-wOUjQAp3xKkHM-PQB1asr80uyiML1cTiRDs9XQr6BQ-v9eI8hBoz7B_L0tihU=w398-h315-p-k" alt="" /> 
            </Cell>
            

            <p className="buttons center">
              <a href="/resume"  class="btn btn-secondary js-scroll-trigger">Resume</a>
              <a href="/projects" class="btn btn-secondary js-scroll-trigger">Projects</a>
              <a href="/contact" class="btn btn-secondary js-scroll-trigger">Contact me</a>
              </p>        
            
        <Cell col={12}>
        <Footer/>        
          </Cell>
        </Grid>
      </div>

    )
  }
}

export default Landing;
