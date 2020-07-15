import { INCREMENT, DECREMENT } from '../actions'

// 初期状態のオブジェクトを定義
const initialState = {
    value: 0
}

export default (state = initialState, action) => {
    // actionsのtypeに応じて実施する処理を変更
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}