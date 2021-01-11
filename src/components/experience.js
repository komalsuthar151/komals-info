import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={8}>
          <h4 style={{marginTop:'0px', padding:'0px'}}>{this.props.jobName}</h4>
          <h5 style={{marginTop:'0px', padding:'0px'}}>{this.props.companyName}</h5>
        </Cell>
        <Cell col={4}>
          <p>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
