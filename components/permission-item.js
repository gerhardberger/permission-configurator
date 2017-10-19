const h = require('choo/html')
const css = require('sheetify')

const itemStyle = css`
  :host {
    margin-bottom: 8px;
  }
`

const levelMap = {
  low: 'green',
  medium: 'light-purple',
  high: 'blue'
}

module.exports = ({ name, level }) => {
  const levelColor = levelMap[level]

  return h`<li class="${itemStyle}">
    ${name}, <span class="${levelColor}">${level}</span>
  </li>`
}
