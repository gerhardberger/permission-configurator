const h = require('choo/html')
const css = require('sheetify')

const editView = require('../components/edit-view')
const rawView = require('../components/raw-view')
const permissionModal = require('../components/permission-modal')

const TITLE = 'Permission configurator'

const headerStyle = css`
  :host > div {
    cursor: pointer;
    text-align: center;
  }

  :host > div:hover {
    color: #ffb700;
    border-color: #ffb700;
  }
`

module.exports = (state, emit) => {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  const editClick = () => emit('view-edit')
  const rawClick = () => emit('view-raw')

  const view = state.editView
    ? editView(state.permissions, emit)
    : rawView(state.permissions)

  const editActive = state.editView ? 'bb' : ''
  const rawActive = !state.editView ? 'bb' : ''

  const modal = state.newPermission
    ? permissionModal(state.newPermission, emit) : null

  return h`
    <body class="sans-serif">
      <h1 class="f2 pa3 pa4-ns">
        permission configurator
      </h1>
      <header class="w-100 pa3 pa4-ns ${headerStyle}">
        <div class="fl w-50 pa2 ${editActive}" onclick=${editClick}>
          <strong>edit</strong>
        </div>
        <div class="fl w-50 pa2 ${rawActive}" onclick=${rawClick}>
          <strong>raw</strong>
        </div>
      </header>
      <section class="w-100 pa3 pa4-ns">
        ${view}
      </section>
      ${modal}
    </body>
  `
}
