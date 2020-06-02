import React from 'react';
import Checkbox from './lib';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      checked: true,
      style: {
        display: "flex",
        flexDirection: "row"
      },
      outterStyle: {
        display: "flex",
        flexDirection: "column"
      }
    }
    this.handler = this.handler.bind(this)
  }

  handler(val){
    this.setState({
      checked: val
    })
  }

  render(){
    return (
      <div style={this.state.outterStyle}>

        <div style={this.state.style}>
          <Checkbox shape="square" isChecked={this.state.checked} onChange={this.handler}/>
          <Checkbox shape="circle" name={"dasdas"} isChecked={this.state.checked} onChange={this.handler}
            color="red"/>
          <Checkbox shape="round" isChecked={this.state.checked} onChange={this.handler}
            color="blue"/>
        </div>

        <div style={this.state.style}>
          <Checkbox size="small" isChecked={this.state.checked} onChange={this.handler}/>
          <Checkbox size="small" isChecked={this.state.checked} onChange={this.handler}
            color="red"/>
          <Checkbox size="small" isChecked={this.state.checked} onChange={this.handler}
            color="blue"/>
          <Checkbox size="small" isChecked={this.state.checked} onChange={this.handler}
            color="green"/>
          <Checkbox size="small" isChecked={this.state.checked} onChange={this.handler}
            color="orange"/>
          <Checkbox size="small" isChecked={this.state.checked} onChange={this.handler}
            color="#fc14bb"/>
        </div>


        <div style={this.state.style}>
          <Checkbox  size="medium" isChecked={this.state.checked} onChange={this.handler}/>
          <Checkbox  size="medium" isChecked={this.state.checked} onChange={this.handler}
            color="red"/>
          <Checkbox  size="medium" isChecked={this.state.checked} onChange={this.handler}
            color="blue"/>
          <Checkbox  size="medium" isChecked={this.state.checked} onChange={this.handler}
            color="green"/>
          <Checkbox  size="medium" isChecked={this.state.checked} onChange={this.handler}
            color="orange"/>
          <Checkbox  size="medium" isChecked={this.state.checked} onChange={this.handler}
            color="#fc14bb"/>
        </div>


        <div style={this.state.style}>
          <Checkbox size="big" isChecked={this.state.checked} onChange={this.handler}/>
          <Checkbox size="big" isChecked={this.state.checked} onChange={this.handler}
            color="red"/>
          <Checkbox size="big" isChecked={this.state.checked} onChange={this.handler}
            color="blue"/>
          <Checkbox size="big" isChecked={this.state.checked} onChange={this.handler}
            color="green"/>
          <Checkbox size="big" isChecked={this.state.checked} onChange={this.handler}
            color="orange"/>
          <Checkbox size="big" isChecked={this.state.checked} onChange={this.handler}
            color="#fc14bb"/>
        </div>
      </div>
    )
  }
}

export default App;
