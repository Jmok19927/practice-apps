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
      entries: [],
      searchTerm: '',
      addTerm: '',
      addDef: '',
      matchingEntries: []
    };
    this.updateEntries = this.updateEntries.bind(this);
  }

  componentDidMount() {
    this.updateEntries();
    this.setState({matchingEntries: this.state.entries})
  }

  handleSearchChange(event) {
    console.log(event.target.value)
    var passingEntries = [];

    this.state.entries.forEach(
      (entry)=>{
        if (entry.term.toUpperCase().includes(event.target.value.toUpperCase())) {
          passingEntries.push(entry);
        }
    });
    if (event.target.value === '') {
      this.setState({matchingEntries: this.state.entries})
    } else {
      this.setState({matchingEntries: passingEntries})
    }
  }

  updateEntries() {
    var updatedEntries = [];
    axios.get('/entries').then((data) => {
      console.log('data in update entries', data.data);
      updatedEntries = data.data;
      this.setState({entries: updatedEntries, matchingEntries: updatedEntries});
    });
  }

  handleAddChange(event) {
    this.setState({addTerm: event.target.value});
  }

  handleAddSubmit() {
    var definition = prompt(`What is the definition of ${this.state.addTerm}`)
    var entryObj = {
      term: this.state.addTerm,
      def: definition,
    }

    console.log('entered handle Add with obj', JSON.stringify(entryObj))
    axios.post('/entries', {term: this.state.addTerm, def: definition}).then(()=> {
      this.updateEntries();
    })
  }

  handleDelete(val) {
    console.log('entered handleDelete', val)
    axios.delete('/entries', {data: {_id: val}}).then(()=>{
      this.updateEntries();
    })
  }

  handleEdit(id) {
    var newDef = prompt("What is your new definition?");
    console.log('id and def', id, newDef)
    axios.patch('entries',{_id: id, def: newDef}).then(() => {
      this.updateEntries();
    })
  }

  render() {
    return (<div><h1>Glossary Section</h1>
    <div><Search search={this.handleSearchChange.bind(this)}/></div>
    <div><AddEntry handleAddSubmit={this.handleAddSubmit.bind(this)} handleAddChange={this.handleAddChange.bind(this)}/></div>
    <EntryList entries={this.state.matchingEntries} delete={this.handleDelete.bind(this)} edit={this.handleEdit.bind(this)}/>
    </div>
    )
  }
}

export default Glossary;