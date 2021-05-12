<template>
  <div>
    <b-navbar
      toggleable="lg"
      class="navbar fixed-top navbar-expand-lg navbar-header navbar-mobile"
      fixed="true"
    >
      <div class="container">
        <nuxt-link to="/" class="font-weight-bold"
          ><h3>E-Academy</h3></nuxt-link
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <nuxt-link to="/login" class="nav-link">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/login" class="nav-link">Gallery</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/login" class="nav-link">Contact</nuxt-link>
            </li>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="/students">Dashboard</b-dropdown-item>
              <b-dropdown-item href="/profile">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>

            <li class="nav-item my-2 my-md-0">
              <nuxt-link to="/login" class="btn btn-outline-info"
                >Login</nuxt-link
              >
            </li>
            <li class="nav-item my-2 my-md-0">
              <nuxt-link to="/register" class="btn btn-danger"
                >Sign Up</nuxt-link
              >
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      stickyClass: "is_sticky",
      scrollPosition: 0
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll(event) {
      this.scrollPosition = window.scrollY;
      this.isSticky = this.scrollPosition >= 100;
    }
  }
};
</script>

<style>
.navbar {
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(12, 0, 46, 0.05);
  -webkit-transition: all 500ms linear;
  -o-transition: all 500ms linear;
  transition: all 500ms linear;
  padding: 15px;
}

.navbar .nav-item {
  margin-left: 7.5px;
  margin-right: 7.5px;
}

.navbar .nav-link {
  font-size: 15px;
  font-weight: 700;
}

.navbar a {
  text-decoration: none;
}

.header-scrolled {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background-color: #fff !important;
  -webkit-box-shadow: 0 4px 6px 0 rgba(12, 0, 46, 0.05);
  box-shadow: 0 4px 6px 0 rgba(12, 0, 46, 0.05);
}

/* .navbar a {
    color: #fff !important;
  } */
</style>
