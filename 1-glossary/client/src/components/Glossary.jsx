import React from 'react';
import EntryList from './EntryList.jsx';

var sampleEntries = [
  {term: 'one', def: 'uno'},
  {term: 'two', def: 'dos'},
  {term: 'three', def: 'tres'}]

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: sampleEntries,
      searchTerm: [],
    };
  }


  render() {
    return (<div><h1>Glossary Section</h1>
    <EntryList entries={this.state.entries}/>
    </div>
    )
  }
}

export default Glossary;