module.exports = (state, emitter) => {
  state.editView = true

  emitter.on('view-edit', () => {
    if (state.editView) return

    state.editView = true
    emitter.emit('render')
  })

  emitter.on('view-raw', () => {
    if (!state.editView) return

    state.editView = false
    emitter.emit('render')
  })
}
