import React from 'react';
import Child from './lifecycle'
function event1(){
  alert('HYY')
}

class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    randomNumber:0
  };
  console.log('[App] constructor')
}

static getDrivedStateFromProps(props,state){
  console.log('[App] getDrivedStateFromProps')
  return null;
}

componentDidMount(){
  setTimeout(()=>{
    console.log('[App] componentDidMount')
  },1000)
}


componentDidUpdate(prevProps,PrevState,snapshot){
  console.log('[App] componentDidUpdate')
}
  
  genRandomNum=()=>{
    this.setState({randomNumber: Math.random()})
  }

  render(){
    console.log('[App] render()')
    return(
      <div>
        <div>Parent Component</div>
        <h1>{this.state.number}</h1>
        <button onClick={()=>this.genRandomNum()}>generate random num</button>
        <Child randomNumber={this.state.randomNumber}/>

      </div>
    );
  }

}



export default App;
