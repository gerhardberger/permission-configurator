const h = require('choo/html')
const css = require('sheetify')

const overlay = css`
  :host {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, .75);
  }
`
const center = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`
const modal = css`
  :host {
    width: 50%;
    height: 216px;
    background: white;
    border: 1px solid black;
    padding: 8px 32px;
  }

  :host > div { margin: 20px 0; }
  :host > div > label { margin: 0 12px 0 0; }
`

const buttonStyle = css`
  button {
    padding: 6px 18px;
    margin: 8px 18px 2px;

    background: none;
    border: 1px solid black;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    transition: .2s all;
  }

  button:hover {
    color: #ffb700;
    border-color: #ffb700;
  }
`

const addStyle = css`:host { float: right; }`

module.exports = ({ type, permission }, emit) => {
  const close = () => emit('close-modal')
  const nameInput = event => emit('new-permission-name', event.target.value)
  const levelInput = event =>
    emit('new-permission-level', event.target.selectedOptions[0].value)

  const addPermission = () => {
    if (permission.name === '') return

    emit('new-permission')
  }

  return h`
    <div class="${overlay}">
      <div class="${center}">
        <div class="${modal} br4">
          <h4>add new permission for ${type}</h4>

          <div>
            <label>name:</label>
            <input type="text" oninput=${nameInput} />
          </div>

          <div>
            <label>level:</label>
            <select oninput=${levelInput}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <button class="br-pill ${buttonStyle}" onclick=${close}>
              close
            </button>
            <button class="br-pill ${buttonStyle} ${addStyle}" onclick=${addPermission}>
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  `
}
