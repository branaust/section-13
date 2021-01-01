import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        alert(`Username: ${this.state.username} 
        \nEmail: ${this.state.email} 
        \nPassword: ${this.state.password}`)
        this.setState({ username: '' })
    }


    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* <label for="username">Username</label> */}
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

export default Form