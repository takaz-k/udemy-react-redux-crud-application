// Reducerでも使用するため定義してexportしておく
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

// Action Creator(状態の列挙)
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}