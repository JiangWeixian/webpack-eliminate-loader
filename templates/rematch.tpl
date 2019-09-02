export default {
  state: { count: 0 },
  reducers: {
    increment(state, payload) {
      return {
        ...state,
        count: state.count + 1,
      }
    }
  },
}