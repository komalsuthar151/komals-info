import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Footer from './footer';
import Skills from './skills';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li style={{padding:'2px', color:'black'}}>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const rsa=["Contributed to RSA NetWitness SIEM tool, for front end development, bug fixes and testing",
"Designed dynamic driven UI components, using JSON and form framework that enables easy reuse of components",
  "Provisioned and configured hardware appliance with sprint builds for testing",  
  "Worked in an Agile-driven environment to effectively maintain project timelines and utilize available resources",
  "Provided continued maintenance and development of bug fixes and unit tests for existing web applications",
  "Trained and mentored the interns, with the product functionalities, environment setup, and system workflow"];

  const dell=["Performed PSR (Performance, Scalability and Reliability) testing for product to build a metric of CPU and memory utilization, measured 86% of the performance improvement on the product by applying the newly developed services",
  "Prepared the documents for the product setup and PSR testing environment setup guidelines",
  "Implemented keyboard navigation and auto scrolling to multiple components using ember to enhance the user experience",
  "Collaborated with the QE team to find user-focused test cases and created Zephyr tests"];

  const neu=["Designed prototypes for the Northeastern Marino CampusRec website",
  "Utilized programming and designing using PHP, MySQL, HTML, CSS, JavaScript, and jQuery",
  "Provided maintenance and development to the website"];

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell className="left-right-col" col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://lh3.googleusercontent.com/NbPTTByLdEX-brRiPUwoYOXSNfsEbGFEhGA7q0imiq93NkJW2qK1Ie5T571c1xa8s7z7IgYh_v8YRa045Eg85V1HYxjlZ6OO_W2EjzDBBtbLJA8liNW4CF1PasGALZWF1Xe60vQx-Nc=w600-h315-p-k"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '0px'}}>Komal Suthar</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> */}
            <h5>Email</h5>
            <p>komalsuthar151@gmail.com</p>
            <h5>Web</h5>
            <a href="https://komals.info">komals.info</a><br/>
            <a href="https://www.linkedin.com/in/komal-suthar">LinkedIn</a><br/>
            <a href="https://github.com/komalsuthar151">GitHub</a><br/>
             <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
           
            <p class="buttons"><a href="https://drive.google.com/file/d/1JQ7U7BGorgbOObyKTvFIpBW5seDGFNYX/view?usp=sharing" target="_blank" title="CLick To View Resume" data-toggle="tooltip" class="btn btn-secondary"><i class="fa fa-file-pdf"></i>Resume PDF</a> 
          <a href="/contact" class="btn btn-secondary js-scroll-trigger">Contact me</a></p>        
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>

            <Experience
              startMonth="Feb" startYear={2020}
              endMonth="Sept" endYear={2020}
              jobName="Software Engineer"
              companyName="RSA Security"
              />
              <div className="job-desc"><NumberList numbers={rsa} /></div>

              <Experience
                startMonth="Jan"
                startYear={2019}
                endMonth= "Aug"
                endYear={2019}
                jobName="Software Engineer Co-op"
                companyName="Dell EMC"
                />
                <div className="job-desc"><NumberList  numbers={dell} /></div>

                <Experience
                startMonth="Aug"
                startYear={2018}
                endMonth= "Jan"
                endYear={2019}
                jobName="Web & Graphics Designer"
                companyName="Northeastern University Campus Recreation"
                />
                <div className="job-desc"><NumberList numbers={neu} /></div>
                <hr style={{borderTop: '3px solid #e22947'}} />

              {/* Education */}
                <h2>Education</h2>

              <Education
                startMonth="Sept"
                startYear={2017}
                endMonth= "Dec"
                endYear={2019}
                schoolName="Northeastern University"
                major="Master of Science in Information Systems"
                schoolDescription="Coursework: Application Engineering & Development, Advance Data Science, Web Development Tools and Methods, Web Design/User Experience Engineering"
                />

              <Education
               startMonth="July"
               startYear={2012}
               endMonth= "May"
               endYear={2016}
                schoolName="Vishwakarma Govt. Engineering College"
                major="B.E Computer Engineering"
                schoolDescription="Coursework: Data Structures & Algorithm, Object oriented Programming, Software Engineering, Web Applications"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Skills</h2>
              <p>Java, Python, Shell Script, TypeScript, JavaScript, HTML5, CSS3, Webpack, ES6, AJAX, jQuery, MySQL, MongoDB</p>
              <Skills
                skill="Frontend Development"
                progress={80}
                />
                <Skills
                  skill="REST API"
                  progress={80}
                  />
                  <Skills
                    skill="Quality Assurance"
                    progress={70}
                    />
                    <Skills
                      skill="AWS(learning in progress...)"
                      progress={70}
                      />


          </Cell>
          <Cell col={12}>
        <Footer/>
        </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
