export default {
  changeCity (state, v) {
    state.city = v
    try {
      localStorage.city = v
    } catch (e) { }
  }
}
