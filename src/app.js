class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer'
    const options = [ 'thing one', 'thing two', 'thing four' ]
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action options={options} />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

const Header = props => {
  const { title, subtitle } = props
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <p />
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }
  handleRemoveAll() {
    console.log(this)
  }

  render() {
    const { options } = this.props
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {options.map(option => <Option key={option} optionText={option} />)}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault()
    const value = e.target.elements.option.value.trim()
    if (value) {
      return alert(value)
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    )
  }
}

const Option = props => {
  const { optionText } = props
  return <div>+{optionText}</div>
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
