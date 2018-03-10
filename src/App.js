import React, {Component} from 'react';
import Search from './Search'
import CardList from './CardList';
import { robots } from './robots';
import index from './index.css';
const state = {
    robots: robots,
    searchfeild : '',
}
class  App extends Component {
constructor() {
    super();
    this.state = {
        robots: robots,
        searchfeild:'',
    }
}
onSearch = (event) => {
    this.setState({searchfeild: event.target.value})
 

}
render() {
    const filterRobo = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
    });
    return (
        <div className = 'tc'>
            <h1 className = 'serif red'> MR. Robot</h1>
            <Search searchChange = {this.onSearch} />
            <CardList robots = { filterRobo } />
        </div>
    );
}
}

export default App;