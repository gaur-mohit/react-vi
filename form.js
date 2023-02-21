import React from'react'

class Form extends React.Component{
  constructor(){
    super();
    this.state={
      firstName:"",
      lastName:""
    }
    this.handleChage=this.handleChage.bind(this);
  }

 handleChage(event){
      const {name,value}=event.target
      this.setState({
        [name]:value
      })
  }

  render(){
    return(
      <div>
        <form>
          <input type="text" placeholder="firstName" name="firstName" onChange={this.handleChage}/>
          <hr />
          <input type="text" placeholder="lastName" name="lastName" onChange={this.handleChage}/>
        </form>
        <h1> {this.state.firstName} {this.state.lastName}</h1> 
      </div>
    )
  }
}

export default Form