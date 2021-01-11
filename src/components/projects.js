import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lh3.googleusercontent.com/pKsMKW9wspJ74x_dIppkuz9aogzK7dx5IlXEWnCZDiuEgKDQNeYEvRl0-O7NkfdDBSNQBcMdsTpEXE-o-wPcsr9ohfIMEmaoQvbA6SF-gGAtuT8AaNd-EvmyrkmkaeB4OCkZnQLRsmM=s225-p-k) center / cover'}}>AWS Project </CardTitle>
            <CardText>
              Network Structure & Cloud Computing
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/komalsuthar151/csye6225-fall2018" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
            </CardActions>

          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lh3.googleusercontent.com/_oeMFTosmTUZSx0cMNlUt784NgRqCrPchVVk98D-3tqkqOsTjT3tzVQlr1IHbSP0nl8dGrb930Uya5QuMx8epKe49Pj6hNz6qiXy82DMg2w7x4d1G5ZLkmBFIvJXMsw62Df7BxnCysk=w600-h315-p-k) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Stocker
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/komalsuthar151/Stocker" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lh3.googleusercontent.com/29sT_1ooY9r7HvY2KDDN9i1pBQShJedDVVhmA4ev0tPsFmW_EOBlH6ffBENrw3OMC_SnWjrffkm6F9BiodaW0R_uVIz2Jz8Pr8RDe1cwsP1xqcedMKjRdsd7pOAWJKbYsebP-CCpazs=w335-h150-p-k) center / cover'}} >MedicLoan</CardTitle>
            <CardText>
             MedicLoan
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/komalsuthar151/MedicLoan" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>
            {/* Project 4 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lh3.googleusercontent.com/BTjsG2byz5lFKItli6qDVTt44vJmDFVM-u4Ih9K38de3-e2Pr28ZZ2EdsHKEfA0LJWLbKwqkTCUre3YOLWoxs-UceDnaGfuZXDkmao39FEunJoVpZo0IHF6g6d0ck6YyPM6HWJsh7UI=w340-h148-p-k) center / cover'}} >UI/UX</CardTitle>
            <CardText>
              UI/UX
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/komalsuthar151/UI-UX" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>
        </div>


      )} else if(this.state.activeTab === 1){
        return(
          <Grid>
            <Cell col={12}>
            <hr/>
            <h4 style={{color:"#49abd1"}}>Experience</h4>
            </Cell>
            
            {/* RSA */}
            <Cell col={1}>
              <img src="https://lh3.googleusercontent.com/metxf8Wp5RNcGtFLpAcdwqDZWnxY1dXdvvLSnBYRF0ol3c2_rAr-nAIPIvxMkAZDwGe85j2tnEjZrgZ2JYnBTlE-wnhA00G4qKBuaew33hdQjWO7p4OCQ7Hg7gpdr3EIipkHo2rQMzo=w512-h315-p-k" width="50px" height="50px" alt=""/> 
            </Cell>
            <Cell col={11}>
              <h5 style={{padding:0, margin:0}}>Software Engineer</h5>
              <h6 style={{padding:0, margin:0}}>RSA Security, Bedford, MA</h6>
            </Cell>
            <br/>
            {/* DELL */}
            <Cell col={1}>
              <img src="https://lh3.googleusercontent.com/KlxKYg5zLveDJ-amqCp6-4OjqwTGkzhmwKNoEaga2zLEMRHNFGdwge9d90O_rxkIK7Fu5z4VtXF2nlRnPwv0J9dC96PPcZSkrQSVE7mL7_FI3zOvDDIZGNRbxkGhvTbWJ2d6rDIicdw=w400-h315-p-k" width="50px" height="50px" alt=""/> 
            </Cell>
            <Cell col={11}>
              <h5 style={{padding:0, margin:0}}>Software Engineer Co-op</h5>
              <h6 style={{padding:0, margin:0}}>Dell EMC, Bedford, MA</h6>
            </Cell>
            <br/>
            {/* NEU */}
            <Cell col={1}>
              <img src="https://lh3.googleusercontent.com/iICJyW79adqEKbYp6Ul7GU4dcUx0I5v2QNoZR7_IlptMukvRJCesaKsuasDsoDErthaHOI6SmvVQC_xoeyK9WyYxyCOeOubObm-I2W2_NcfA4ya54sJ03iBA1yVkzQpRRMmWPYwdQY0=w420-h315-p-k" width="50px" height="50px" alt=""/> 
            </Cell>
            <Cell col={11}>
              <h5 style={{padding:0, margin:0}}>Web & Graphics Designer</h5>
              <h6 style={{padding:0, margin:0}}>Northeastern University, Boston, MA</h6>
            </Cell>
         
          </Grid>
        )
      } else if(this.state.activeTab === 2){
        return(
          <Grid>
          <Cell col={12}>
            <hr/>
            <h4 style={{color:"#49abd1"}}>Recommendation</h4>
            </Cell>

            <Cell col={2}>
              <img style={{borderRadius:'50%'}} src="https://lh3.googleusercontent.com/CT28-2AjRwGViEeyCI3bZDqjdeqb3H4Z8mlQFjKjxizkQPKzSCCwC6uYE9q5wOWKUjLjPLOiYwrWGLfShqBFWfArLNE9DLyiTxcaTWy3vnV8ZSrFv6iMXGDWQawfcILXSRhcaZN32pY=s100-p-k" width="50px" height="50px" alt=""/> 
              <h6 style={{padding:0, margin:0}}>Chandrakant Natarajan</h6>
              <h6 style={{padding:0, margin:0}}>SDM at Amazon Robotics</h6>
            </Cell>
            <Cell col={10}>
              <p className="job-desc">Komal initially joined RSA as a co-op in the summer of 2019. In a very short time, she managed to learn and contribute towards important projects like Dynamic Parsing, USM etc. Needless to say, we hired her full time and she became an integral part of our Agile engineering team. Komal worked on both the Ember UI as well as our microservices framework called Launch (based on Spring Boot). She is a full stack programmer and has helped our team with everything from UI features to middle tier Java code to setting up and testing NetWitness hardware stacks as part of our CI/CD process. She also helped mentor several newer co-ops and interns who joined after her. Komal is a real team player and a fast learner and I would recommend her to anyone looking for a quickly productive development team member.</p>
            </Cell>

            <Cell col={2}>
              <img style={{borderRadius:'50%'}} src="https://lh3.googleusercontent.com/7ZQhHco58wLDt8WDftoahtIb43Ql-g1t6uGtVWA_El0f3SlOJ2gyuF8CBrgJ_w1BtQ820SBbzNeivyGGVS5w_2yCFN9oSTHWPIpbeKrDaeFjjGn52idaHr5HBFFiLUGaqUe8g_7MfaE=s100-p-k" width="50px" height="50px" alt=""/> 
              <h6 style={{padding:0, margin:0}}>Alina Daunyte</h6>
              <h6 style={{padding:0, margin:0}}>Scrum Master and Agile Coach</h6>
            </Cell>
            <Cell col={10}>
              <p className="job-desc">Komal is a very quick learner. She approaches everything she does with a lot of professionalism and an exceptional work etiquette. She always did her very best to increase the chances of the team reaching their goals. She truly cared about the success of the team and she played an important role in that. She is unafraid of challenges and tends to thrive in any task she lays hers mind on. Komal has also contributed greatly to building a solid culture in our office. She led several initiatives that brought people closer together.</p>
            </Cell>
            </Grid>

        )
      }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>My Projects</Tab>
          <Tab>Work Experience</Tab>
          <Tab>Recommendation</Tab>
          {/* <Tab>MongoDB</Tab> */}
        </Tabs> 


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
