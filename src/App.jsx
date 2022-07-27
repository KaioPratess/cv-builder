import {Component} from 'react'
import binIcon from './assets/bin.svg'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Cv from './components/Cv'
import './App.css'

class App extends Component {

  state = {
    form: {
      general: {},
      education: {},
      work: {}
    },
    education: [],
    work: []
  }

  editCv = () => {
    const newForm = JSON.parse(localStorage.getItem('info'))
    this.setState(prevState => {
      return {
        form: newForm,
        preview: false,
      }
    })
    this.setEducationStorage()
    this.setWorkStorage()
  }

  setEducation = (item)  => {
    this.setState(prevState => {
      return {
        ...prevState,
        education: [...prevState.education, item]
      }
    })
    }

  setEducationStorage = ()  => {
    const education = this.state.form.education;
    if(Object.keys(education).length > 0) {
      const educationArray = Object.keys(education).map(item =>  education[item])
      educationArray.forEach((item, index) => {
        console.log(Object.keys(education)[index])
        if(item !== undefined) {
          const template =  <div className="education-template" key={Object.keys(education)[index]} data-key={Object.keys(education)[index]}>
          <div className="icon-container">
            <img src={binIcon} alt="delete" onClick={this.deleteEducation} id={Object.keys(education)[index]}/>
          </div>
            <div className="school-container">
              <label htmlFor="school">School Name *</label>
              <input type="text" name="school-name" id="school" required onChange={this.props.validate} data-section='education' defaultValue={item.school}/>
            </div>
            <div className="date-container">
              <label htmlFor="date">Date of Study *</label>
              <input type="date" name="date" id="date" required onChange={this.props.validate} data-section='education' defaultValue={item.date} />
            </div>
            <div className="title-container">
              <label htmlFor="title">Title of Study *</label>
              <input type="text" name="title" id="title" required onChange={this.props.validate} data-section='education' defaultValue={item.title}/>
            </div>
          </div>;
          this.setState(prevState => {
            return {
              ...prevState,
              education: [...prevState.education, template]
            }
          })
        }
      })
    }
  }

  deleteEducation = (event) => {
    const id = event.target.getAttribute('id')
    const newArray = [];
    this.state.education.forEach(template => {
      if (template.key !== id) {
        newArray.push(template)
      } else {
        this.setState(prevState => {
          return {
            ...prevState,
            form: {
              ...prevState.form,
              education: {...prevState.form.education, [template.key]: undefined}
            }
          }
        })
      }

    })
    this.setState(prevState => {
      return {
        education: newArray
      }
    })
  }

  setWork = (item) => {
    this.setState(prevState => {
      return {
        ...prevState,
        work: [...prevState.work, item]
      }
    })
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

  setWorkStorage = () => {
    const work = this.state.form.work;
    if(Object.keys(work).length > 0) {
      const workArray = Object.keys(work).map(item =>  work[item])
      workArray.forEach((item, index) => {
        if(item !== undefined) {
          const template =  <div className='work-template' key={Object.keys(work)[index]} data-key={Object.keys(work)[index]}>
          <div className="icon-container">
            <img src={binIcon} alt="delete" id={Object.keys(work)[index]} onClick={this.deleteWork}/>
          </div>
          <div className='company'>
            <label htmlFor="company">Company Name *</label>
            <input type="text" name='company' id='company' required onChange={this.props.validate} data-section='work' defaultValue={item.company}/>
          </div>
          <div className='position'>
            <label htmlFor="position">Position Title *</label>
            <input type="text" name='position' id='position' required onChange={this.props.validate} data-section='work' defaultValue={item.position}/>
          </div>
          <div className='from-date'>
            <label htmlFor="from-date">From *</label>
            <input type="date" name='from-date' id='from-date' required onChange={this.props.validate} data-section='work' defaultValue={item['from-date']}/>
          </div>
          <div className='to-date'>
            <label htmlFor="to-date">To *</label>
            <input type="date" name='to-date' id='to-date' required onChange={this.props.validate} data-section='work' defaultValue={item['to-date']}/>
          </div>
          <div className='current-position'>
            <label htmlFor="current-position">Current Position</label>
            <input type="checkbox" name='current-position' id='current-position' data-section='work' onChange={this.setCurrent}/>
          </div>
          <div className='main-tasks'>
            <label htmlFor="main-tasks">Main Tasks *</label>
            <textarea name="main-tasks" id="main-tasks" required onChange={this.props.validate} data-section='work' defaultValue={item['main-tasks']} ></textarea>
          </div>
        </div>;

        this.setState(prevState => {
          return {
            ...prevState,
            work: [...prevState.work, template]
          }
        })
      }
      })
    }
  }

  deleteWork = (event) => {
    const id = event.target.getAttribute('id')
    const newArray = [];
    this.state.work.forEach(template => {
      if (template.key !== id) {
        newArray.push(template)
      } else {
        this.setState(prevState => {
          return {
            ...prevState,
            form: {
              ...prevState.form,
              work: {...prevState.form.work, [template.key]: undefined}
            }
          }
        })
      }

    })
    this.setState(prevState => {
      return {
        work: newArray
      }
    })
  }


  onSubmit = (event) => {
    event.preventDefault()
    this.setState(prevState => {
      return {
        ...prevState,
        preview: true,
        education: [],
        work: []
      }
    })
    localStorage.setItem('info', JSON.stringify(this.state.form))
  }

  validateInputs = (event) => {
    const input = event.target
    let key = input.parentElement.parentElement.getAttribute('data-key');
    
    if(input.validity.valid) {
      input.style.border = '2px solid green'
      const id = input.getAttribute('id');
      const section = input.getAttribute('data-section')
      
      this.setState(prevState => {
        return {
          form : {
            ...prevState.form, 
            [section]: {...prevState.form[section], [key] : {...prevState.form[section][key], [id]: input.value}}
          }
        }
      })

    } else {
      input.style.border = '2px solid red'
    }
  }

  render() {
    return (
      <div className="app">
        <header className='header'>CV BUILDER</header>
        <div className='main-content'>
          {this.state.preview && <Cv info={this.state.form} editCv={this.editCv}/>}
          {!this.state.preview && <form className='form' onSubmit={this.onSubmit}>
            <GeneralInfo validate={this.validateInputs} info={this.state.form}/>
            <Education validate={this.validateInputs} education={this.state.education} setEducation={this.setEducation} delete={this.deleteEducation}/>
            <WorkExperience validate={this.validateInputs} work={this.state.work} setWork={this.setWork} delete={this.deleteWork} setCurrent={this.setCurrent}/>
            <button className='submit'>Submit</button>
          </form>}
  
        </div>
        <footer className='footer'>Made by KaioPratess</footer>
      </div>
    )
  }
}

export default App
