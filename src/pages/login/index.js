import { connect } from 'react-redux'
import Component from './Component.js'
import * as actionss from './Action.js'

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch, actionss };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);