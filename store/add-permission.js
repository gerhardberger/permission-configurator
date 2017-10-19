const permissions = require('../config/permissions.json')

module.exports = (state, emitter) => {
  state.permissions = permissions

  emitter.on('add-permission', type => {
    state.newPermission = { type, permission: { level: 'low', name: '' } }
    emitter.emit('render')
  })

  emitter.on('close-modal', () => {
    state.newPermission = null
    emitter.emit('render')
  })

  emitter.on('new-permission-name', name => {
    state.newPermission.permission.name = name
  })

  emitter.on('new-permission-level', level => {
    state.newPermission.permission.level = level
  })

  emitter.on('new-permission', () => {
    const { type, permission } = state.newPermission

    for (let permissionGroup of state.permissions) {
      if (permissionGroup.name === type) {
        permissionGroup.permissions.push(permission)
      }
    }

    state.newPermission = null

    emitter.emit('render')
  })
}
