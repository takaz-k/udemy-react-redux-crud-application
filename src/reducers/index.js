// combineReducers： Reducerを結合する役割を担うモジュール
import { combineReducers } from 'redux'

// 状態を持つReducer
import count from './count'

// Storeで使用できるようにexport
export default combineReducers({ count })
// 下のように通常は状態を複数記述する（複数の状態を管理する）
// export defaul combineReducers({ count, bar, baz })