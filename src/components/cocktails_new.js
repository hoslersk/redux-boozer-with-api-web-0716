import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index'

class CocktailsNew extends React.Component {
  constructor(props) {
    super(props)
    this.newCocktailHandler = this.newCocktailHandler.bind(this)
  }
  newCocktailHandler(event) {
    event.preventDefault();
    let newCocktail = {
      name: this.refs.name.value,
      description: this.refs.description.value,
      instructions: this.refs.instructions.value
    }
    this.props.actions.createCocktail(newCocktail)
    // debugger;
  }
  render() {
    return(
      <form onSubmit={this.newCocktailHandler}>
        <label>Name:</label><br></br>
        <input type="text" ref="name"/><br></br>
        <label>Description:</label><br></br>
        <textarea ref="description"/><br></br>
        <label>Instructions:</label><br></br>
        <textarea ref="instructions"/><br></br>
        <input type="submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)



export default componentCreator(CocktailsNew);
