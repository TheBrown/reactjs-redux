import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increaseNumber, dropNumber } from '../../actions/ActionCal';

class Calculate extends Component {
  render() {
    return (
        <div>
            <h1>{this.props.num}</h1>
            <div>
                <button onClick={(e) => this.props.increaseNumber()}>+</button>
            </div>
            <div>
                <button onClick={(e) => this.props.dropNumber()}>-</button>
            </div>
        </div>
    )
  }

}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({increaseNumber, dropNumber}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {
        num: state.calu.num
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculate);
