import { Component } from "react";
import binIcon from '../assets/bin.svg'
import {nanoid} from 'nanoid'

class Education extends Component {

  addEducation = (school, date, title) => {
    const nano = nanoid();
    const template =  <div className="education-template" key={nano} data-key={nano}>
    <div className="icon-container">
      <img src={binIcon} alt="delete" onClick={this.props.delete} id={nano}/>
    </div>
      <div className="school-container">
        <label htmlFor="school">School Name *</label>
        <input type="text" name="school-name" id="school" required onChange={this.props.validate} data-section='education' defaultValue={school}/>
      </div>
      <div className="date-container">
        <label htmlFor="date">Date of Study *</label>
        <input type="date" name="date" id="date" required onChange={this.props.validate} data-section='education' defaultValue={date}/>
      </div>
      <div className="title-container">
        <label htmlFor="title">Title of Study *</label>
        <input type="text" name="title" id="title" required onChange={this.props.validate} data-section='education' defaultValue={title}/>
      </div>
    </div>;

    this.props.setEducation(template)
  }

  render() {

    return (
      <div className="education">
          <h2>Education</h2>
          {this.props.education}
        <button type="button" className="add-btn" onClick={() => this.addEducation('', '', '')}>+ Add Education</button>
      </div>
    )
  }
}

export default Education