// Reducerでも使用するため定義してexportしておく
export const increment = "INCREMENT"
export const decrement = "DECREMENT"

// Action Creator
export const increment = () => {
    return {
        type: increment
    }
}

export const increment = () => {
    return {
        type: decrement
    }
}