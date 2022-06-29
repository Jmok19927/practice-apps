import React from 'react';
import EntryList from './EntryList.jsx';
import Search from './Search.jsx';
import AddEntry from './AddEntry.jsx';
const axios = require("axios");

var sampleEntries = [
  {term: 'one', def: 'uno'},
  {term: 'two', def: 'dos'},
  {term: 'three', def: 'tres'}]

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: sampleEntries,
      searchTerm: '',
      addTerm: '',
      addDef: ''
    };
  }

  updateEntries() {
    axios.get('')
  }

  handleAddChange(event) {
    this.setState({addTerm: event.target.value});
    console.log(this.state.addTerm)
  }

  handleAddSubmit() {
    event.preventDefault();
    var definition = prompt(`What is the definition of ${this.state.addTerm}`)
    var entryObj = {
      term: this.state.addTerm,
      def: definition,
    }

    console.log('entered handle Add with obj', JSON.stringify(entryObj))
    axios.post('', {term: this.state.addTerm, def: definition})
  }

  handleDelete() {
    axios.delete('')
  }

  render() {
    return (<div><h1>Glossary Section</h1>
    <div><Search/></div>
    <div><AddEntry handleAddSubmit={this.handleAddSubmit.bind(this)} handleAddChange={this.handleAddChange.bind(this)}/></div>
    <EntryList entries={this.state.entries}/>
    </div>
    )
  }
}

export default Glossary;