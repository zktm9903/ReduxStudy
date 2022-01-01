const PLUS = 'PLUS';
const MINUS = 'MINUS';

export const plus = () => ({
    type: PLUS,
})

export const minus = () => ({
    type: MINUS,
})

const initialState = {
    count: 0,
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case PLUS:
            return {
                count: state.count + 1,
            }
        case MINUS:
            return {
                count: state.count - 1,
            }
        default:
            return state
    }
}