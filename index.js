const css = require('sheetify')
const choo = require('choo')

css('tachyons')

const mainStore = require('./store/main')
const addPermissionStore = require('./store/add-permission')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
  app.use(require('choo-log')())
}

app.use(mainStore)
app.use(addPermissionStore)

app.route('/', require('./views/main'))

if (!module.parent) app.mount('body')
else module.exports = app
