<template>
  <div id="login" class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin" @submit.prevent="login">
              <div class="form-label-group">
                <label for="inputUsername">Username</label>
                <input
                  type="username"
                  id="inputUsername"
                  class="form-control"
                  placeholder="Username"
                  v-model="loginData.username"
                  required
                  autofocus
                >
              </div>
              <div class="form-label-group">
                <label for="inputPassword">Password</label>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  v-model="loginData.password"
                  required
                >
              </div>
              <hr class="my-4">
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginData: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    login () {
      const vm = this
      const api = `http://localhost:5000/login`
      const tempLoginData = {...this.loginData}

      vm.$http
        .post(api, tempLoginData)
        .then(
          response => {
            let apiToken = response.data.token
            localStorage.setItem('apiToken', apiToken)
            this.$router.push('/')
          }
        )
        .catch(
          () => {
            alert('login failed')
          }
        )
    }
  }
}
</script>
