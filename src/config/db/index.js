const mongoose = require('mongoose')

async function conect() {

  try {
    await mongoose.connect('mongodb://localhost:27017/blog_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('conect successfully!!!')
  } catch (error) {
    console.log('conect failure!!!')
  }
}

module.exports = { conect }
