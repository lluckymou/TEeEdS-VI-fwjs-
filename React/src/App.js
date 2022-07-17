import React, { Component } from 'react'
import { Tabs } from "./components/Tabs";
import { Form } from "./components/Form";

import "./styles.css";

class App extends Component {
  state = {
    tabs: [
      {
        name: "Obs.",
        content: "Adicione abas pelo formulario a esquerda."
      }
    ]
  }

  addItem = item => {
    this.setState({
      tabs: [...this.state.tabs, ...item]
    })
  }

  render() {
    const { tabs } = this.state

    return (
      <div  className="App">
        <Form addItem={this.addItem} />
        <Tabs tabs={tabs} />
      </div>
    )
  }
}

export default App

