class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header title="test value" />
        <Action />
        <Options />
        <Option />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer.</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li>Option 1</li>
          <li>Option 2</li>
        </ol>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <h2>Some stuff.</h2>
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <h2>This should render between Options and AddOption</h2>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
