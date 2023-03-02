import { Component } from "react";
import { Header, SearchForm, SearchBtn, BtnLabel, FormInput } from "./Searchbar.styled";
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
        return (< Header>
            <SearchForm onSubmit={this.handleSubmit}  >
                <SearchBtn type="submit" class="button">
                    <BtnLabel>Search</BtnLabel>
                </SearchBtn>

                <FormInput
                    onChange={this.handleChange}
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    name="imageName"
                />
            </SearchForm>
        </ Header>)

    }
}