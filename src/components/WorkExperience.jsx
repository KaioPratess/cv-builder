import {Component} from 'react'
import {nanoid} from 'nanoid'
import binIcon from '../assets/bin.svg'

class WorkExperience extends Component {
  state = {
    works: [],
  }

  setCurrent = (event) => {
    const toDate = document.querySelector('#to-date');
    if(event.target.checked) {
      toDate.setAttribute('disabled', 'disabled')
      toDate.setAttribute('type', 'text')
      toDate.value = 'Current Position'
    } else {
      toDate.setAttribute('type', 'date')
      toDate.removeAttribute('disabled')
    }
  }

  addWork = () => {
    const nano = nanoid();
    const template =  <div className='work-template' key={nano} data-key={nano}>
    <div className="icon-container">
      <img src={binIcon} alt="delete" id={nano} onClick={this.deleteWork}/>
    </div>
    <div className='company'>
      <label htmlFor="company">Company Name *</label>
      <input type="text" name='company' id='company' required onChange={this.props.validate} data-section='work'/>
    </div>
    <div className='position'>
      <label htmlFor="position">Position Title *</label>
      <input type="text" name='position' id='position' required onChange={this.props.validate} data-section='work'/>
    </div>
    <div className='from-date'>
      <label htmlFor="from-date">From *</label>
      <input type="date" name='from-date' id='from-date' required onChange={this.props.validate} data-section='work'/>
    </div>
    <div className='to-date'>
      <label htmlFor="to-date">To *</label>
      <input type="date" name='to-date' id='to-date' required onChange={this.props.validate} data-section='work'/>
    </div>
    <div className='current-position'>
      <label htmlFor="current-position">Current Position</label>
      <input type="checkbox" name='current-position' id='current-position' data-section='work' onChange={this.setCurrent}/>
    </div>
    <div className='main-tasks'>
      <label htmlFor="main-tasks">Main Tasks *</label>
      <textarea name="main-tasks" id="main-tasks" required onChange={this.props.validate} data-section='work'></textarea>
    </div>
  </div>;

  this.setState(prevState => {
    return {
      works: [...prevState.works, template]
    }
  })
  }

  deleteWork = (event) => {
    const id = event.target.getAttribute('id')
    const newArray = [];
    this.state.works.forEach(template => {
      if (template.key !== id) {
        newArray.push(template)
      }
    })
    this.setState(prevState => {
      return {
        works: newArray
      }
    })
  }

  render() {
    return (
      <div className='work-experience'>
        <h2>Work Experience</h2>
        {this.state.works}
        <button type="button" className="add-btn" onClick={this.addWork}>+ Add Experience</button>
      </div>
    )
  }
}

export default WorkExperience