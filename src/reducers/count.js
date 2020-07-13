import { increment, decrement } from '../actions'

// 初期状態のオブジェクトを定義
const initialState = {
    value: 0
}

export default (state = initialState, action) => {
    // actionsのtypeに応じて実施する処理を変更
    switch (action.type) {
        case increment:
            return { value: state.value + 1 }
        case decrement:
            return { value: state.value - 1 }
        default:
            return state
    }
}