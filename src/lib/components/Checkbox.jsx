import React from 'react'
// import { FaCheck } from "react-icons/fa";
import './Checkbox.scss';

class Checkbox extends React.Component{

    /*
    PROPS:
    - color (red, blue, green, yellow, custom)
    - size
    - shape (square, circle, round)
    */

    constructor(props){
        super(props)
        this.selectColor = this.selectColor.bind(this)
        this.selectOutterSize = this.selectOutterSize.bind(this)
        this.handleCheckboxClicked = this.handleCheckboxClicked.bind(this)
        this.selectOutterShape = this.selectOutterShape.bind(this)
        this.selectInnerShape = this.selectInnerShape.bind(this)

        this.state = {
            checked: (this.props.isChecked !== null) ? this.props.isChecked : false,
            outterStyle: {
                borderColor: this.selectColor(this.props.color),
                width: this.selectOutterSize(this.props.size),
                height: this.selectOutterSize(this.props.size),
                borderRadius: this.selectOutterShape(this.props.shape)
            },
            innerStyle: {
                backgroundColor: this.selectColor(this.props.color),
                width: this.selectInnerSize(this.props.size),
                height: this.selectInnerSize(this.props.size),
                borderRadius: this.selectInnerShape(this.props.shape)
            },
        }
    }

    selectOutterShape(shape){
        switch(shape){
            case 'square':
                return "0px"
            case 'circle':
                return "100%"
            case 'round':
                return "7px"
        }
    }

    selectInnerShape(shape){
        switch(shape){
            case 'square':
                return "0px"
            case 'circle':
                return "100%"
            case 'round':
                return "5px"
        }
    }

    selectColor(color){
        switch(color){
            case 'red':
                return "#e03636"
            case 'blue':
                return "#4287f5"
            case 'green':
                return "#44c753"
            case 'orange':
                return "#f57e42"
            default:
                return color
        }
    }

    selectOutterSize(size){
        switch(size){
            case 'small':
                return "20px"
            case 'medium':
                return "24px"
            case 'big':
                return "28px"
        }
    }

    selectInnerSize(size){
        switch(size){
            case 'small':
                return "14px"
            case 'medium':
                return "18px"
            case 'big':
                return "22px"
            default:
                return "18px"
        }
    }

    handleCheckboxClicked(){
        this.state.checked = !this.state.checked
        console.log(this.state.checked)
        this.props.onChange(this.state.checked)
        this.setState()
    }

    render(){
        return (
            <button className="checkbox" onClick={this.handleCheckboxClicked}
                style={this.state.outterStyle}>
                {
                    (this.state.checked)
                    ? <div className="checkbox-selected" style={this.state.innerStyle}></div>
                    : ""
                }
            </button>
        )
    }
}

export default Checkbox