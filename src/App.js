import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
const COUNTRIES_API = "https://restcountries.eu"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    }
  }
  componentDidMount() {
    const my_url =  `${COUNTRIES_API}/rest/v2/all`
    axios.get(my_url).then(res => res.data)
      .then((data) => {
        this.setState({ countries  : data })
      }
      )
  }
  render() {
    return (
      <div>
        {this.state.countries.map((key) => (
          <div>
            <h3>{key.capital}</h3>
            <h3>{key.name}</h3>
            <br /><br />
          </div>
        )
        )}
      </div>
    );
  }
}
export default App;
