import React from "react";
import "./App.css";
import {Button} from "react-bootstrap"

class App extends React.Component {
  state = {
    mountInterval : 0,
    show: true,
    person: {
      fullName: "Yassine Chatti",
      bio: "Hi everbody !",
      imgSrc: "logo192.png",
      profession: "Student",
    },
  };
  componentDidMount(){
    setInterval(() => {
      this.setState({
        mountInterval : this.state.mountInterval+1
      });
    }, 1000);
  }
   toggle = () => {
    this.setState({
      show : !this.state.show
    })
  }
  render() {
    return (
      <div>
        <h2> the time interval since the component was mounted is : {this.state.mountInterval}</h2>
 <Button onClick={()=> this.toggle()} variant="success">Show/Hide</Button>{' '}
 {this.state.show && 
  <div>
        <h2> {this.state.person.fullName} </h2>
        <h2> {this.state.person.bio} </h2>
         <img src={this.state.person.imgSrc} alt="react logo"/>
        <h2> {this.state.person.profession} </h2>
  </div>
 }
      </div>
    );
  }
}

export default App;
