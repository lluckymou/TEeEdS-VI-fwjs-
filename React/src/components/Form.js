import React, { Component } from "react";

import "../styles.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
      formTabs: [{ name: "", content: "" }],
    };
  }

  handleInput = (i, e) => {
    let formTabs = this.state.formTabs;
    formTabs[i][e.target.name] = e.target.value;
    this.setState({ formTabs });
  };

  handleTabsFields = (e) => {
    this.setState({ tabs: e.target.value });
  };

  addTabsFields = () => {
    let fields = [];
    for (let index = 0; index < this.state.tabs; index++) {
      fields.push({ name: "", content: "" });
    }
    this.setState({
      formTabs: [...this.state.formTabs, ...fields],
    });
  };

  removeTabFields = (index) => {
    let formTabs = this.state.formTabs;
    formTabs.splice(index, 1);
    this.setState({ formTabs });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.formTabs);
  };

  render() {
    const { tabs } = this.state;
    return (
      <form className="form-container" onSubmit={this.handleSubmit} id="form">
        <label className="form-label">
          Número Tabs:
          <div className="form-content-tabs">
            <input
              value={tabs}
              onChange={this.handleTabsFields}
              name="tabs"
              type="text"
              className="form-input"
              required
            />
            <button type="button" onClick={() => this.addTabsFields()}>
              Adicionar
            </button>
          </div>
        </label>

        {this.state.formTabs.map((element, index) => (
          <div className="form-content" key={index}>
            <label className="form-label">
              Título:
              <input
                value={element.name}
                onChange={(e) => this.handleInput(index, e)}
                name="name"
                type="text"
                className="form-input"
                required
              />
            </label>
            <label className="form-label">
              Conteúdo:
              <input
                value={element.content}
                onChange={(e) => this.handleInput(index, e)}
                name="content"
                type="text"
                className="form-input"
                required
              />
            </label>
            {index ? (
              <button
                type="button"
                className="remove"
                onClick={() => this.removeTabFields(index)}
              >
                Remover
              </button>
            ) : null}
          </div>
        ))}

        <button className="form-submit" type="submit">
          Salvar
        </button>
      </form>
    );
  }
}
