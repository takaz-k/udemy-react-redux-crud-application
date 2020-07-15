import React, { Component } from 'react';
import { connect } from 'react-redux'

// action creatorをimport
import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>increment</button>
        <button onClick={props.decrement}>decrement</button>
      </React.Fragment >
    )
  }
}

// mapStateToProps: ステート情報からコンポーネントに必要な情報を取り出す
const mapStateToProps = (state) => ({
  value: state.count.value
})

// mapDispachToProps: あるActionが発生した時にReducerにタイプに応じた状態遷移を実行させる
const mapDispachToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispachToProps)(App)