<template>
    <div class="wrapper">
     <div class="sidebar">
         <div class="sidebar-content">
             <div class="sidebar-brand">
                 <nuxt-link to="/">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#4a88eb" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4
                        C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"></path>
                        <path d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
                        c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"></path>
                        <path d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
                        c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"></path>
                    </svg>
                    <span class="align-middle ml-3">E-academy</span>
                 </nuxt-link>
             </div>
             
             <ul class="navbar-nav mt-3">
                <li class="nav-item">
                    <nuxt-link to="/students" class="nav-link"><b-icon icon="bricks" font-scale="1.3" class="mr-1"></b-icon> Dashboard</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/profile" class="nav-link"><b-icon icon="person-bounding-box" font-scale="1.3" class="mr-1"></b-icon> Profile</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/profile" class="nav-link"><b-icon icon="calendar4-event" font-scale="1.3" class="mr-1"></b-icon> Schedule</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/projects" class="nav-link"><b-icon icon="box-seam" font-scale="1.3" class="mr-1"></b-icon> Projects</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/projects" class="nav-link"><b-icon icon="journal-bookmark-fill" font-scale="1.3" class="mr-1"></b-icon> Grades</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/courses" class="nav-link"><b-icon icon="journal-bookmark-fill" font-scale="1.3" class="mr-1"></b-icon>My Courses</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/quiz" class="nav-link"><b-icon icon="newspaper" font-scale="1.3" class="mr-1"></b-icon> Quiz</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/question" class="nav-link"><b-icon icon="chat-text-fill" font-scale="1.3" class="mr-1"></b-icon> Questions</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/projects" class="nav-link"><b-icon icon="slack" font-scale="1.3" class="mr-1"></b-icon> blog</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="#" class="nav-link"><b-icon icon="gear" font-scale="1.3" class="mr-1"></b-icon> Settings</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="#" class="nav-link"><b-icon icon="arrow-right-square" font-scale="1.3" class="mr-1"></b-icon> Logout</nuxt-link>
                </li>
                
             </ul>
         </div>
     </div>
     <div class="main">
         
         <nav class="navbar navbar-expand navbar-light navbar-bg sticky-top" >
             <div class="toggle-icon" @click.prevent="hideSidebar">
                 <b-icon icon="three-dots-vertical" font-scale="2rem" variant="dark"></b-icon>
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
            <Nuxt/>
        </main>
     </div>
    
    </div>
</template>

<script>
export default {
    methods: {
        hideSidebar() {
            let toggleBtn = document.querySelector('.toggle-icon');
            let sideBar = document.querySelector('.sidebar');
            sideBar.classList.toggle('gap');
            if(sideBar.classList.contains('gap')) {
                sideBar.classList.remove('d-none')
            }else {
                sideBar.classList.add('d-none')
            }
            console.log(sideBar)
        }
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .card {
            box-shadow: 0px 1px 3px 1px rgb(88 48 48 / 10%);
    }
    .sidebar {
        min-width: 230px;
        max-width: 230px;
        transition: 1.2s ease-in;
        direction: ltr;
        background: #293042;
        color: rgb(54, 30, 30);
         transform: translateX(-230px)!important;
    /* transition: 1.2s ease; */
    }

    .sidebar-content {
    position: fixed;
    top: 0;
    bottom: 0;
    max-width: 230px;
    max-height: 100vh;
    overflow-y: scroll;
    }

     .sidebar-content::-webkit-scrollbar {
  width: 5px;
}

/* Track */
 .sidebar-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
 .sidebar-content::-webkit-scrollbar-thumb {
  background: rgb(51, 24, 24);
  border-radius: 10px;
}

    .navbar-nav a {
        padding: 12px 26px;
        color: #fff;
    }

    .sidebar-brand {
        font-weight: 500;
        font-size: 1.125rem;
        padding: 1.4rem 2.95rem;
        display: block;
        text-align: center;
        color: #fff;
    }

    .sidebar-brand a {
        color: #fff;
    }

    .wrapper .content {
        padding: 20px;
        flex: 1;
    }

    .nav-item:hover a{
        background: #fff;
        color: #000;
        font-weight: 700;
        border-left: 5px solid #2a5fe6;
    }

    .main {
    display: flex;
    background: rgb(253, 252, 252);
    width: 100%;
    min-height: 100vh;
    min-width: 0;
    transition: margin-left .35s ease-in-out,left .35s ease-in-out,margin-right .35s ease-in-out,right .35s ease-in-out;
    flex-direction: column;
    position: relative;
}

    .main nav li {
        list-style: none;
    }

    .toggle-icon {
        cursor: pointer;
    }

    .gap {
            transform: translateX(0)!important;
    transition: 1.2s ease;
    }

    @media(max-width: 425px) {
        .main {
            min-width: 100vw;
        }
    }
</style>