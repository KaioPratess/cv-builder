import {Component} from 'react'
import {nanoid} from 'nanoid'
import editIcon from '../assets/edit.svg'
import printerIcon from '../assets/icons8-print-30.png'

class Cv extends Component {
  render() {
    const educationArray = Object.keys(this.props.info.education).map(key => {
      return this.props.info.education[key]
    })

    const education = educationArray.map(item => {
      if(item !== undefined) {
        return (
          <div key={nanoid}>
            <h3>{`${item.title} at ${item.school}`}</h3>
            <span>{item.date}</span>
        </div>
        )
      }
    })

    const workArray = Object.keys(this.props.info.work).map(key => {
      return this.props.info.work[key]
    })

    const employmentHistory = workArray.map(item => {
      if(item !== undefined) {
        return (
          <div key={nanoid}>
            <h3>{item.position} at {item.company}</h3>
            <span>{`${item['from-date']} - ${item['to-date'] ? item['to-date'] : 'Current Position'}`}</span>
            <p>{item['main-tasks']}</p>
        </div>
        )
      }
  
    }) 

    return (
      <div className='cv-page'>
        <div className='edit-div'>
          <img src={editIcon} alt="edit" onClick={this.props.editCv}/>
          <img src={printerIcon} alt="edit" onClick={() => window.print()}/>
        </div>
        <div className='cv' id='section-to-print'>
          <div className='head'>
            <div className='head-pic'>
              <img src={this.props.info.general.null.picture ? this.props.info.general.null.picture : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="user" />
            </div>
            <h1>{this.props.info.general.null.name}</h1>
          </div>
          <div className='profile'>
            <h2>Profile</h2>
            <p>{this.props.info.general.null.description}</p>
          </div>
          <div className='details'>
            <h2>Details</h2>
            <ul>
              <li className='address'>{this.props.info.general.null.address}</li>
              <li className='email'>{this.props.info.general.null.email}</li>
              <li className='phone'>{this.props.info.general.null.phone}</li>
            </ul>
          </div>
          <div className='employment-history'>
            <h2>Employment History</h2>
              {employmentHistory}
          </div>
          <div className='education'>
            <h2>Education</h2>
              {education}
          </div>
        </div>
      </div>
    )
  }
}

export default Cv