import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box.component";
import { connect } from "react-redux";
import { MonsterListing } from "./store/actions/adminActions";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchField: "",
		};
	}
	componentDidMount() {
		// REST API
		// fetch("https://jsonplaceholder.typicode.com/users")
		// 	.then((response) => response.json())
		// 	.then((users) => this.setState({ monsters: users }));

		// API ACTION
		this.props.MonsterListing();
	}

	render() {
		const { monsterList } = this.props.admin;
		const { searchField } = this.state;
		const filteredMonster = monsterList.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase()),
		);
		return (
			<div className="App">
				<h1>Monster's World</h1>
				<SearchBox
					placeholder="Search Monster"
					handleChange={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList monsters={filteredMonster} />
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	admin: state.admin,
});
export default connect(mapStateToProps, { MonsterListing })(App);
