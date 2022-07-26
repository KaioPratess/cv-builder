import {Component} from 'react'
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
    preview: false,
  }

  editCv = () => {
    const newForm = JSON.parse(localStorage.getItem('info'))
    this.setState(prevState => {
      return {
        form: newForm,
        preview: false,
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState(prevState => {
      return {
        ...prevState,
        preview: true
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
            <Education validate={this.validateInputs} info={this.state.form}/>
            <WorkExperience validate={this.validateInputs} info={this.state.form}/>
            <button className='submit'>Submit</button>
          </form>}
  
        </div>
        <footer className='footer'>Made by KaioPratess</footer>
      </div>
    )
  }
}

export default App
