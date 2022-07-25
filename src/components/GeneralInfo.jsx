import { Component } from "react";
import editIcon from '../assets/edit.svg'

class GeneralInfo extends Component {
  render() {
    return (
      <div className="general-info">
          <h2>General Info</h2>
        <div className="name-container">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="email-container">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="phone-container">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <div className="address-container">
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" id="address" />
        </div>
        <div className="pic-container">
          <label htmlFor="picture">Picture:</label>
          <input type="file" name="picture" id="picture"  accept="image/png, image/jpeg"/>
        </div>
        <div className="description">
          <label htmlFor="description">About You:</label>
          <textarea name="description" id="description"></textarea>
        </div>
      </div>
    )
  }
}

export default GeneralInfo