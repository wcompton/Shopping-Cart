import React, { Component } from 'react';
import './App.css';
import NavBar from 'C:/Users/katie/react-app/counter-app/src/components/navbar.jsx'
import Counters from 'C:/Users/katie/react-app/counter-app/src/components/counters.jsx';

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
 };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
}

handleReset = () => {
   const counters = this.state.counters.map(c => {
       c.value = 0;
       return c;
   });
   this.setState({ counters });
}

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter };
    counters[index].value++;
    this.setState({counters});
}

render() {
    return (
      <div>
      <NavBar 
      totalCounters={this.state.counters.filter(c => c.value > 0).length}
      />
      <main className="container">
        <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete} />
      </main>
      </div>
  );
}
}

export default App;
