const path = require('path');

export default {
  resolve: {
    alias: {
      'turbo-morph': path.resolve(__dirname, '../dist/index.js')
    }
  }
}
