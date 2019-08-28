import React from "react";
import {connect} from "react-redux";
import CardGroup from "./components/CardGroup";
import SearchBox from "./components/SearchBox";
import Loading from "./components/Loading";
import Scroll from "./components/Scroll";
import ErrorBoundry from "./components/ErrorBoundry";

import {setSearchField, requestRobots} from "./actions";

// Map to Props
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  };
};

//
//
class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className='tc'>
        {isPending ? (
          <Loading className='pa6' />
        ) : (
          <>
            <h1 className='f2'>Robot Friends</h1>
            <SearchBox onChange={onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardGroup robots={filteredRobots} />
              </ErrorBoundry>
            </Scroll>
          </>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
