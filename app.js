// TODO

// example React code

// var App = () => (
//   <div>Some cliche salutation</div>
// );

// ReactDOM.render(<App />, document.getElementById('app'));

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      got: false,
      hover: false
    }
  }

  onListItemClick() {
    this.setState({
      got: !this.state.got
    })
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    var style = {
      textDecoration: this.state.got ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };


    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.toGet}</li>
    );
  }
}

var GroceriesList = (props) => (
  <ul>
    {props.toGets.map(toGet =>
      <GroceryListItem toGet={toGet} />
      )}
  </ul>
);

var GroceriesPage = () => (
  <div>
    <h2>GroceriesList</h2>
    <GroceriesList toGets={['Oatmilk', 'Watermelon', 'Muffins']} />
  </div>
)

ReactDOM.render(<GroceriesPage />, document.getElementById('app'));