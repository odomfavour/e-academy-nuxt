<template>
  <div class="container">
    <div class="my-3">
      <h2 class="font-weight-bold">Sign Up</h2>
    </div>
    <div class="error" v-if="error">{{ error }}</div>
    <form action="" @submit.prevent="registerUser">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="role">Register as</label>
            <b-select v-model="formData.role" :options="roles"></b-select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="first name">First Name</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.firstname"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="last name">Last Name</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.lastname"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="Email">Email</label>
            <input type="email" class="form-control" v-model="formData.email" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" class="form-control" v-model="formData.phone" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="formData.password"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="confirm password">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              v-model="formData.confirmPassword"
            />
          </div>
        </div>
      </div>
      <hr />
      <template v-if="formData.role == 'tutor'">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="role">Subject</label>
              <b-select
                v-model="formData.subject"
                :options="subjects"
              ></b-select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="role">Gender</label>
              <b-select v-model="formData.gender" :options="genders"></b-select>
            </div>
          </div>
        </div>
      </template>
      <template v-if="formData.role == 'student'">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="class">Class</label>
              <b-select v-model="formData.class" :options="classes"></b-select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="gender">Gender</label>
              <b-select v-model="formData.gender" :options="genders"></b-select>
            </div>
          </div>
        </div>
      </template>

      <div class="mt-3">
        <b-button variant="outline-info" type="submit">SignUp</b-button>
      </div>
      <div class="note mt-4">
        <p>
          Already have an account?
          <nuxt-link to="/login">Login</nuxt-link> instead.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  layout: "auth",
  data() {
    return {
      roles: [
        { value: null, text: "Choose role" },
        { value: "student", text: "Student" },
        { value: "tutor", text: "Tutor" },
        { value: "admin", text: "Admin" }
      ],
      genders: [
        { value: null, text: "Choose Gender" },
        { value: "male", text: "Male" },
        { value: "female", text: "Female" },
        { value: "other", text: "Rather not say" }
      ],
      classes: [
        { value: null, text: "Choose Class" },
        { value: "jss1", text: "Jss1" },
        { value: "jss2", text: "Jss2" },
        { value: "jss3", text: "Jss3" }
      ],
      subjects: [
        { value: null, text: "Choose Subject" },
        { value: "maths", text: "Maths" },
        { value: "english", text: "English" },
        { value: "social", text: "Social Studies" }
      ],
      error: "",
      formData: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        subject: "",
        gender: null,
        role: null,
        phone: "",
        class: null
      }
    };
  },
  methods: {
    registerUser() {
      console.log(this.formData);
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
        .then(res => {
          console.log(res.user);
          alert(`Account created for ${res.user.email}`);
          this.$router.push("/students");
          this.formData.password = this.formData.confirmPassword = null;
          // Add a new document in collection "cities"
          firebase
            .firestore()
            .collection("users")
            .doc(res.user.uid)
            .set(this.formData)
            .then(async () => {
              console.log("Document successfully written!");
              const fireAuth = firebase.auth();
              // fireAuth.currentUser.updatePhoneNumber
              try {
                await fireAuth.currentUser.updateProfile({
                  displayName: `${this.formData.firstname} ${this.formData.lastname}`
                });
              } catch (error) {
                console.trace(error);
              }
            })
            .catch(error => {
              console.error("Error writing document: ", error);
              console.trace(error);
            });
        })
        .catch(err => {
          this.error = err.message;
          alert(err.message);
          console.trace(err);
        });
    }
  }
};
</script>

<style></style>
