import { Component } from "react";
export default class SearhForm extends Component {
    state = {
        imageName: ''
    }
    handleChange = evt => {
        this.setState({ imageName: evt.currentTarget.value.toLowerCase() })
        console.log(evt.currentTarget.value)
    }
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' })
    }
    render() {
        return (<header class="searchbar">
            <form onSubmit={this.handleSubmit} class="form">
                <button type="submit" class="button">
                    <span class="button-label">Search</span>
                </button>

                <input
                    onChange={this.handleChange}
                    class="input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    name="imageName"
                />
            </form>
        </header>)

    }
}