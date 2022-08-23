import React from "react"
import "./ContactFormAlt.css"

const initialState = {
  email: "",
  emailError: "",
  textarea: "",
  textareaError: "",
}

class ContactFormAlt extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleChange = (event) => {
    const fieldName = event.target.name
    this.setState({ [fieldName]: event.target.value })
    //console.log(this.state)
  }

  validate = () => {
    let emailError = ""
    let textareaError = ""
    if (this.state.textarea === "" || this.state.textarea == null) {
      textareaError = "Please enter your message"
    }

    if (this.state.email === "" || this.state.email == null) {
      emailError = "Please enter your Email"
    } else if (!this.state.email.match(/^[^s@]+@[^s@]+.[^s@]+$/)) {
      emailError = "Please enter a valid Email"
    }

    if (emailError || textareaError) {
      this.setState({ emailError: emailError, textareaError: textareaError })
      return false
    }
    return true
  }

  handleSubmit = (event) => {
    const isValid = this.validate()
    console.log(this.state)
    if (!isValid) {
      event.preventDefault()
      //console.log("Error, form not validated")
    } else {
      this.setState(initialState)
      //preventDefault should be removed + we should see a hidden div containing message sent.
      //event.preventDefault()
      const modal = document.querySelector("#msgSuccess")
      const form = document.querySelector("#form")

      modal.classList.remove("close")
      modal.classList.add("open")
      form.classList.add("close")

      //console.log("Sent Successfully")
      //console.log(this.state)
    }
  }

  render() {
    return (
      <>
        <div id="msgSuccess" className="close">
          Messgae sent Successfully !!!
        </div>
        <form onSubmit={this.handleSubmit} id="form">
          <br />
          <br />
          <br />
          <label htmlFor="email">Email Address (required) </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="email@email.com"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
          <div style={{ color: "red", fontSize: 35 }}>
            {this.state.emailError}
          </div>

          <br />
          <br />
          <br />
          <label htmlFor="textarea">Email Address (required) </label>
          <textarea
            name="textarea"
            id="textarea"
            placeholder="text"
            value={this.state.textarea}
            onChange={this.handleChange}
          ></textarea>
          <div style={{ color: "red", fontSize: 35 }}>
            {this.state.textareaError}
          </div>
          <br />
          <button type="submit">Send</button>
        </form>
      </>
    )
  }
}

export default ContactFormAlt
