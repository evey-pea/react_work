import React from 'react';
import Button from './button'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      buttonValues: [5, 10, 50, 100]
    }
  }

  render(){
    return (
      <>
        <div>{this.state.total}</div>
        <div>
          {this.state.buttonValues.map((buttonValue) => (
            <Button
              key={buttonValue}
              value={buttonValue}
              addValue={(value) =>  {
                this.setState({ total: value + this.state.total });
              }}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;