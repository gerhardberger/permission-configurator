const h = require('choo/html')

module.exports = permissions => h`
  <code>
    <pre class="bg-washed-yellow pa3 pa4-ns">
      ${JSON.stringify(permissions, null, 2)}
    </pre>
  </code>
`
