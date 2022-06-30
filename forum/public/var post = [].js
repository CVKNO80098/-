
var isLoginPage = false

$(document).ready(function () {
var post = []
axios.get('/users/getPost')
  .then(function (response) {
    post = [...response.data.post]
    console.log(post.length)
  })
})