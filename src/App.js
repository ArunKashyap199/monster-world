import React from "react";
import './App.css';
import {CardList} from "./components/card-list/card-list";
import {SearchBox} from "./components/search-box/search-box.component";


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
