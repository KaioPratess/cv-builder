import { Component } from "react";

class GeneralInfo extends Component {

  render() {
    return (
      <div className="general-info">
          <h2>General Info</h2>
        <div className="name-container">
          <label htmlFor="name">Name*</label>
          <input type="text" name="name" id="name" required maxLength={45} onChange={this.props.validate} data-section="general" defaultValue={Object.keys(this.props.info.general).length > 0  ? this.props.info.general.null.name : ''}/>
        </div>
        <div className="email-container">
          <label htmlFor="email">Email *</label>
          <input type="email" name="email" id="email" required onChange={this.props.validate} data-section="general" placeholder="email@email.com" defaultValue={Object.keys(this.props.info.general).length > 0  ? this.props.info.general.null.email : ''}/>
        </div>
        <div className="phone-container">
          <label htmlFor="phone">Phone *</label>
          <input type="tel" name="phone" id="phone" required onChange={this.props.validate} data-section="general" defaultValue={Object.keys(this.props.info.general).length > 0  ? this.props.info.general.null.phone : ''}/>
        </div>
        <div className="address-container">
          <label htmlFor="address">Address *</label>
          <input type="text" name="address" id="address" required onChange={this.props.validate} data-section="general" defaultValue={Object.keys(this.props.info.general).length > 0  ? this.props.info.general.null.address : ''}/>
        </div>
        <div className="pic-container">
          <label htmlFor="picture">Picture</label>
          <input type="url" name="picture" id="picture"  accept="image/png, image/jpeg" data-section="general" onChange={this.props.validate} placeholder='https://' defaultValue={Object.keys(this.props.info.general).length > 0  ? this.props.info.general.null.picture : ''}/>
        </div>
        <div className="description">
          <label htmlFor="description">About You *</label>
          <textarea name="description" id="description" required onChange={this.props.validate} data-section="general" defaultValue={Object.keys(this.props.info.general).length > 0  ? this.props.info.general.null.description : ''}></textarea>
        </div>
      </div>
    )
  }
}

export default GeneralInfo