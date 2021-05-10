<template>
  <div>
    <div class="container-fluid">
      <div class="top my-3">
        <small>Overview</small>
        <h4>Dashboard</h4>
      </div>

      <b-row>
        <b-col md="6" cols="12" class="mb-3">
          <b-card class="h-100 marked">
            <div class="row no-gutters w-100">
              <div class="col-6">
                <div class="illustration-text p-3 m-1">
                  <h5 class="illustration-text">Welcome Back, Chris!</h5>
                  <p class="mb-0">AppStack Dashboard</p>
                </div>
              </div>
              <div class="col-6 align-self-end text-right">
                <img
                  src="/student.png"
                  alt="Customer Support"
                  class="img-fluid illustration-img"
                />
              </div>
            </div>
          </b-card>
        </b-col>
        <b-col md="3" cols="12" class="mb-3">
          <b-card class="h-100">
            <h1>Hello</h1>
          </b-card>
        </b-col>
        <b-col md="3" cols="12" class="mb-3">
          <b-card class="h-100">
            <h1>Hello</h1>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col md="3">
          <b-button variant="primary" block class="mb-3" v-b-modal.calendar
            >View Calendar</b-button
          >
        </b-col>
        <b-modal id="calendar" title="My Calendar" hide-footer>
          <p class="mt-4">Hello from Your Companion</p>
          <b-calendar
            block
            locale="en-US"
            selected-variant="success"
            today-variant="info"
            nav-button-variant="primary"
          ></b-calendar>
        </b-modal>
      </b-row>

      <div class="learning-section">
        <b-row>
          <b-col>
            <div class="learning-path">
              <div class="my-3">
                <h5>Learning path</h5>
              </div>
              <b-card
                no-body
                class="py-2 px-3 mb-2"
                v-for="(card, index) in 4"
                :key="index"
              >
                <b-row>
                  <b-col md="2">
                    <b-img
                      v-bind="{
                        blank: true,
                        blankColor: '#777',
                        width: 40,
                        height: 40,
                        class: 'm1'
                      }"
                      rounded
                      alt="Rounded image"
                    ></b-img>
                  </b-col>
                  <b-col md="10">
                    <div class="d-flex justify-content-between">
                      <div class="">
                        <p class="mb-0">TypeScript</p>
                        <small>3 days ago</small>
                      </div>
                      <div class="my-auto">
                        <b-button>Resume</b-button>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
          <b-col>
            <div class="courses">
              <div class="my-3">
                <h5>Learning path</h5>
              </div>
              <b-row>
                <b-col>
                  <b-card no-body>
                    <div class="course-top"></div>
                    <div class="bottom p-3">
                      <div class="d-flex justify-content-between">
                        <p class="mb-0">Learn Angular</p>
                        <b-icon icon="heart-fill" font-scale="1.5"></b-icon>
                      </div>
                    </div>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card no-body>
                    <div class="course-top"></div>
                    <div class="bottom p-3">
                      <div class="d-flex justify-content-between">
                        <p class="mb-0">Learn Angular</p>
                        <b-icon icon="heart-fill" font-scale="1.5"></b-icon>
                      </div>
                    </div>
                  </b-card>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="quizzes-section">
        <div class="my-4">
          <h5>Quizzes</h5>

          <b-row>
            <b-col md="6">
              <b-card>
                <div class="top">
                  <b-row>
                    <b-col md="3">
                      <b-img
                        v-bind="{
                          blank: true,
                          blankColor: '#777',
                          width: 60,
                          height: 40,
                          class: 'm1'
                        }"
                        rounded
                        alt="Rounded image"
                      ></b-img>
                    </b-col>
                    <b-col md="9">
                      <div class="d-flex justify-content-between">
                        <div class="">
                          <p class="mb-0">Introduction to TypeScript</p>
                          <small>3 days ago</small>
                        </div>
                        <div class="">
                          <p class="mb-0">2.8</p>
                          <p class="mb-0">Score</p>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                  <hr class="my-2" />
                </div>
                <div class="bottom">
                  <div class="d-flex justify-content-betweem">
                    <b-button class="px-2" variant="light">Continue</b-button>
                  </div>
                </div>
              </b-card>
            </b-col>
            <b-col md="6">
              <b-card>
                <div class="top">
                  <b-row>
                    <b-col md="3">
                      <b-img
                        v-bind="{
                          blank: true,
                          blankColor: '#777',
                          width: 60,
                          height: 40,
                          class: 'm1'
                        }"
                        rounded
                        alt="Rounded image"
                      ></b-img>
                    </b-col>
                    <b-col md="9">
                      <div class="d-flex justify-content-between">
                        <div class="">
                          <p class="mb-0">Introduction to TypeScript</p>
                          <small>3 days ago</small>
                        </div>
                        <div class="">
                          <p class="mb-0">2.8</p>
                          <p class="mb-0">Score</p>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                  <hr class="my-2" />
                </div>
                <div class="bottom">
                  <div class="d-flex justify-content-betweem">
                    <b-button class="px-2" variant="light">Continue</b-button>
                  </div>
                </div>
              </b-card>
            </b-col>
          </b-row>
          <div class="text-right mt-3">
            <nuxt-link to="#">See all</nuxt-link>
          </div>
        </div>
      </div>
      {{ users }}

      <div class="project">
        <b-card>
          <div class="my-4">
            <h5>Latest Projects</h5>
          </div>
          <b-table striped hover :items="users" outlined responsive>
            <template #cell(view)="data">
              <nuxt-link
                class="btn btn-outline-info"
                :to="`/projects/${data.index}`"
                >View</nuxt-link
              >
            </template>
          </b-table>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  layout: "dashboard",
  data() {
    return {
      projects: [
        {
          name: "Mathematic's classwork",
          start_date: "01/01/2018",
          end_date: "01/01/2018",
          status: "Done",
          Teacher: "Mr. Calculua",
          view: ""
        },
        {
          name: "Mathematic's classwork",
          start_date: "01/01/2018",
          end_date: "01/01/2018",
          status: "Done",
          Teacher: "Mr. Calculua",
          view: ""
        },
        {
          name: "Mathematic's classwork",
          start_date: "01/01/2018",
          end_date: "01/01/2018",
          status: "Done",
          Teacher: "Mr. Calculua",
          view: ""
        },
        {
          name: "Mathematic's classwork",
          start_date: "01/01/2018",
          end_date: "01/01/2018",
          status: "Done",
          Teacher: "Mr. Calculua",
          view: ""
        },
        {
          name: "Mathematic's classwork",
          start_date: "01/01/2018",
          end_date: "01/01/2018",
          status: "Done",
          Teacher: "Mr. Calculua",
          view: ""
        }
      ],
      users: [],
      name: ""
    };
  },
  created() {
    let db = firebase.firestore();
    db.collection("users")
      .get()
      .then(snapshot => {
        // console.log(snapshot.docs)
        snapshot.docs.forEach(doc => {
          console.log(doc.data());
          if (doc.data().role == "student") {
            this.users.push(doc.data());
          }
        });
      });
    let user = firebase.auth().currentUser;
    this.name = user.email;
    // var name, email, photoUrl, uid, emailVerified;

    // if (user != null) {
    //   name = user.displayName;
    //   email = user.email;
    //   photoUrl = user.photoURL;
    //   emailVerified = user.emailVerified;
    //   uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
    //   // this value to authenticate with your backend server, if
    //   // you have one. Use User.getToken() instead.
    // }
    // console.log(user.name)
  },
  computed: {
    userData() {}
  }
};
</script>

<style>
.marked {
  background: #e0eafc;
  color: #3f80ea;
}

.course-top {
  background: url(/angular.png) no-repeat;
  background-size: cover;
  height: 160px;
  background-position: center;
}
</style>
