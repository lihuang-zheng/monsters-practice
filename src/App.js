import React, { Component } from "react";
import "./App.css";

/*============================================= Below are needed dependencies =============================================*/
import axios from "axios";

/*============================================= Below are components imports =============================================*/
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

/*============================================= Below are codes that run =============================================*/
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log(res);
        this.setState({
          monsters: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters</h1>

        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
