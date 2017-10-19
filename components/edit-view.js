const h = require('choo/html')

const permissionGroup = require('./permission-group')

module.exports = (permissions, emit) => {
  const permissionMap = permission => permissionGroup(permission, emit)

  return h`<ul>${permissions.map(permissionMap)}</ul>`
}
