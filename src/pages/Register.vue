<template>
  <div id="register" class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign Up</h5>
            <form class="form-signin" @submit.prevent="register">
              <div class="form-label-group">
                <label for="inputUsername">Username</label>
                <input
                  type="username"
                  id="inputUsername"
                  class="form-control"
                  placeholder="Username"
                  v-model="registerData.username"
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
                  v-model="registerData.password"
                  required
                >
              </div>
              <hr class="my-4">
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      registerData: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    register () {
      const vm = this
      const api = `user/register`
      const tempRegisterData = {...this.registerData}

      vm.$http
        .post(api, tempRegisterData)
        .then(
          response => {
            this.$router.push('/login')
            return response
          }
        )
        .catch(
          () => {
            alert('register failed')
          }
        )
    }
  }
}
</script>
