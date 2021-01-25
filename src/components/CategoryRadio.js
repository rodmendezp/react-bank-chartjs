import React from "react"

class CategoryRadio extends React.Component {
    constructor(props) {
        super(props);
        this.categories = ['check', 'natCred', 'intCred']
        this.state = {
            selected: this.props.category
        }
        this.onValueChange = this.onValueChange.bind(this)
        this.renderInput = this.renderInput.bind(this)
    }
    render() {
        return (
            <div>
                {this.categories.map(this.renderInput)}
            </div>
        )
    }
    onValueChange(event) {
        this.setState({
            selected: event.target.value
        })
        this.props.onValueChange(event.target.value)
    }
    renderInput(name) {
        return (
            <label key={name}>
                <input onChange={this.onValueChange}
                       type="radio"
                       value={name}
                       name={name}
                       checked={this.state.selected === name}/>{name}
            </label>
        )
    }
}

export default CategoryRadio

