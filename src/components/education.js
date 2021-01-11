import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={8}>
          <h4>{this.props.schoolName}</h4>
          <h5>{this.props.major}</h5>
        <li>{this.props.schoolDescription}</li>
        </Cell>
        <Cell col={4}>
        <p>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
