import React from "react";
import axios from "axios";
import CardGroup from "./CardGroup";
import SearchBox from "./SearchBox";
import Loading from "./Loading";
import Scroll from "./Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      // .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.setState({robots: res.data, loading: false});
      });
  }

  onSearchChange = e => {
    this.setState({searchField: e.target.value});
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className='tc'>
        {this.state.loading ? (
          <Loading className='pa6' />
        ) : (
          <>
            <h1 className='f2'>Robot Friends</h1>
            <SearchBox onChange={this.onSearchChange} />
            <Scroll>
              <CardGroup robots={filteredRobots} />
            </Scroll>
          </>
        )}
      </div>
    );
  }
}

export default App;
