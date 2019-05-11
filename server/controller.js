
controller = {
  get: (req,res) => {
    console.log('In get')
  },
  post: (req,res) => {
    console.log('In post')
  },
  patch: (req,res) => {
    console.log('In patch')
  }
}

module.exports = controller;