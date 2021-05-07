<template>
  <div>
    <input type="checkbox" name="" id="sidebar-toggle" />
    <div class="sidebar">
      <div
        class="sidebar-header d-flex justify-content-between align-items-center p-3 mb-3"
      >
        <nuxt-link to="/">
          <h4>
            <span class="brand">E-Academy</span>
          </h4>
        </nuxt-link>
        <label for="sidebar-toggle">
          <b-icon icon="text-indent-right" font-scale="1.3"></b-icon>
        </label>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li>
            <nuxt-link to="/dashboard">
              <span
                ><b-icon icon="grid1x2-fill" font-scale="1.3"></b-icon
              ></span>
              <span>Dashboard</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/profile">
              <span
                ><b-icon icon="person-bounding-box" font-scale="1.3"></b-icon
              ></span>
              <span>Profile</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/courses/schedule">
              <span
                ><b-icon icon="calendar4-event" font-scale="1.3"></b-icon
              ></span>
              <span>Schedule</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects">
              <span><b-icon icon="box-seam" font-scale="1.3"></b-icon></span>
              <span>Projects</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/courses/grades">
              <span
                ><b-icon icon="journal-bookmark-fill" font-scale="1.3"></b-icon
              ></span>
              <span>Grades</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/courses">
              <span
                ><b-icon icon="journal-bookmark-fill" font-scale="1.3"></b-icon
              ></span>
              <span>My Courses</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/quiz">
              <span><b-icon icon="newspaper" font-scale="1.3"></b-icon></span>
              <span>Quiz</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/question">
              <span
                ><b-icon icon="chat-text-fill" font-scale="1.3"></b-icon
              ></span>
              <span>Questions</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              <span><b-icon icon="slack" font-scale="1.3"></b-icon></span>
              <span>Chat</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              <span
                ><b-icon icon="chat-text-fill" font-scale="1.3"></b-icon
              ></span>
              <span>Blog</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/settings">
              <span><b-icon icon="gear" font-scale="1.3"></b-icon></span>
              <span>Settings</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              <span
                ><b-icon icon="journal-bookmark-fill" font-scale="1.3"></b-icon
              ></span>
              <span>Log out</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-content">
      <header></header>
      <nav class="navbar navbar-expand navbar-light navbar-bg sticky-top">
        <div class="toggle-icon" @click.prevent="hideSidebar">
          <b-icon
            icon="three-dots-vertical"
            font-scale="2rem"
            variant="dark"
          ></b-icon>
        </div>
        <div class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </nav>
      <main class="content">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
:root {
  --main-color: #293042;
  --white: #fff;
}

#sidebar-toggle {
  display: none;
}

.sidebar {
  max-height: 100vh;
  width: 230px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: var(--main-color);
  color: var(--white);
  overflow-y: scroll;
  transition: width 500ms;
}

.sidebar::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.sidebar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.sidebar::-webkit-scrollbar-thumb {
  background: rgb(51, 24, 24);
  border-radius: 10px;
}

.sidebar ul {
  list-style: none;
  padding-left: 0;
}

.sidebar li {
  /* margin-bottom: 1.2rem; */
  padding: 0.7rem 1rem;
  display: block;
}

.sidebar li:hover {
  background: #fff;
  color: #000;
  font-weight: 700;
  border-left: 5px solid #2a5fe6;
}
.sidebar li:hover a {
  color: #000;
  font-weight: 700;
}

.sidebar ul a span:last-child {
  padding-left: 0.6rem;
}

.brand {
  padding-left: 0;
}

#sidebar-toggle:checked ~ .sidebar {
  width: 60px;
}

#sidebar-toggle:checked ~ .sidebar .sidebar-header h4 span:last-child,
#sidebar-toggle:checked ~ .sidebar li span:last-child {
  display: none;
}

#sidebar-toggle:checked ~ .sidebar .sidebar-header,
#sidebar-toggle:checked ~ .sidebar li {
  display: flex;
  justify-content: center;
}

.sidebar a {
  text-decoration: none;
  color: var(--white);
  font-size: 1rem;
}

#sidebar-toggle:checked ~ .main-content {
  margin-left: 60px;
}

.main-content {
  position: relative;
  margin-left: 230px;
  transition: margin-left 500ms;
}

@media screen and (max-width: 1200px) {
  .sidebar {
    width: 60px;
    z-index: 1200;
  }

  .sidebar .sidebar-header h4 span,
  .sidebar li span:last-child {
    display: none;
  }

  .sidebar .sidebar-header,
  .sidebar li {
    display: flex;
    justify-content: center;
  }

  .main-content {
    margin-left: 60px;
  }

  #sidebar-toggle:checked ~ .sidebar {
    width: 230px;
  }

  #sidebar-toggle:checked ~ .sidebar .sidebar-header h4 span:last-child,
  #sidebar-toggle:checked ~ .sidebar li span:last-child {
    display: inline;
  }

  #sidebar-toggle:checked ~ .sidebar .sidebar-header {
    display: flex;
    justify-content: space-between;
  }

  #sidebar-toggle:checked ~ .sidebar li {
    display: block;
  }

  #sidebar-toggle:checked ~ .main-content {
    margin-left: 60px;
  }
}
</style>
