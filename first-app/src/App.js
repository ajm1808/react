import React, {Component} from 'react';
import Questions from './components/Questions';
import './Netflix.css';

class App extends Component {
  state = {
    question: [
      {netQuest: "What is Netflix?", id:1},
      {netQuest: "How much does Netflix cost?", id:2},
      {netQuest: "Where can I watch?", id:3},
      {netQuest: "How do I cancel?", id:4},
      {netQuest: "What can I watch on Netflix?", id:5},
      {netQuest: "How does the free trial work?", id:6},
    ]
  }
  render() {
    const eachQ = this.state.question.map((question) => {
      return <Questions key = {question.id} question = {question.netQuest} />
    })
    return (
      <div className="App">
        <h1>Frequently Asked Questions</h1>
        {eachQ}
        <div className = "Free">
          <div>TRY 30 DAYS FREE ></div>
        </div>
​
      </div>
    )
  }
}

export default App;
