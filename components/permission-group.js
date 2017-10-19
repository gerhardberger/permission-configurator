const h = require('choo/html')
const css = require('sheetify')

const permissionItem = require('./permission-item')

const showButton = css`
  :host > button {
    padding: 6px 18px;
    margin: 8px 18px 2px;

    background: none;
    border: 1px solid black;
    font-size: 14px;
    cursor: pointer;
    outline: none;

    opacity: 0;
    transition: .2s all;
  }

  :host > button:hover {
    color: #ffb700;
    border-color: #ffb700;
  }

  :host:hover > button {
    opacity: 1;
  }
`

module.exports = ({ name, permissions }, emit) => {
  const addPermission = () => emit('add-permission', name)

  return h`<li class=${showButton}>
    <h4>${name}</h4>
    <ul>
      ${permissions.map(permissionItem)}
    </ul>
    <button class="br-pill" onclick=${addPermission}>add</button>
  </li>`
}
