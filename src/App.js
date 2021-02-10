import React from "react";
import './App.css';
import {CardList} from "./components/card-list/card-list";
import {SearchBox} from "./components/search-box/search-box.component";

/*
    This is our main components
    => monsters is an array which getting data from the website.

    => searchField is an state that refer to search component which is comparing the text to monster's name
    and showing results according to that.
*/
class App extends React.Component {
    constructor (props) {
        super( props );

        this.state = {
            monsters: [],
            searchField: ''
        };
    }
    componentDidMount () {
        fetch( 'https://jsonplaceholder.typicode.com/users' )
            .then( response => response.json() )
            .then( users => this.setState( {monsters: users} ) );
    }

    render () {
        const {monsters, searchField } =this.state;
        const filteredMonster = monsters.filter(monsters =>
            monsters.name.toLowerCase().includes(searchField.toLowerCase())

        );
        console.log(filteredMonster);
        return (
            <div className="App">
                <h1>Monsters Ki Duniya</h1>
                <SearchBox
                    placeholder= 'Search Monster'
                    handleChange={e => this.setState( {searchField: e.target.value})}
                />
                <CardList monsters={filteredMonster}/>
            </div>
        );
    }
}

export default App;
