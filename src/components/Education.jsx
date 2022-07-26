import { Component } from "react";
import binIcon from '../assets/bin.svg'
import {nanoid} from 'nanoid'

class Education extends Component {

  state = {
    education: []
  };

  addEducation = (school, date, title) => {
    const nano = nanoid();
    const template =  <div className="education-template" key={nano} data-key={nano}>
    <div className="icon-container">
      <img src={binIcon} alt="delete" onClick={this.deleteEducation} id={nano}/>
    </div>
      <div className="school-container">
        <label htmlFor="school">School Name *</label>
        <input type="text" name="school-name" id="school" required onChange={this.props.validate} data-section='education'/>
      </div>
      <div className="date-container">
        <label htmlFor="date">Date of Study *</label>
        <input type="date" name="date" id="date" required onChange={this.props.validate} data-section='education'/>
      </div>
      <div className="title-container">
        <label htmlFor="title">Title of Study *</label>
        <input type="text" name="title" id="title" required onChange={this.props.validate} data-section='education'/>
      </div>
    </div>;

    this.setState(prevState => {
      return {
        education: [...prevState.education, template]
      }
    })
  }

  deleteEducation = (event) => {
    const id = event.target.getAttribute('id')
    const newArray = [];
    this.state.education.forEach(template => {
      if (template.key !== id) {
        newArray.push(template)
      }
    })
    this.setState(prevState => {
      return {
        education: newArray
      }
    })
  }

  render() {  
    return (
      <div className="education">
          <h2>Education</h2>
          {this.state.education}
        <button type="button" className="add-btn" onClick={this.addEducation}>+ Add Education</button>
      </div>
    )
  }
}

export default Education