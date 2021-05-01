<template>
  <div class="container-fluid">
    <h4>Profile</h4>
    <div class="mt-4">
      <b-row>
        <b-col md="4">
          <b-card>
            <div class="image-holder text-center">
              <!-- <b-overlay
              v-if="showImageSpinner"
                show
                spinner-variant="primary"
                spinner-type="grow"
                spinner-small
                rounded="sm"
                style="max-width: 320px;"
                >
                <b-img src="/user-avatar.jpeg" />
              </b-overlay>
              <b-img v-else-if="showimagePlaceholder" src="/network-error.png"/> -->
              <b-img
                @click="chooseImage"
                @load="showImageSpinner = false"
                @error="showImagePlaceholder"
                v-bind="{
                  blank: false,
                  blankColor: '#777',
                  width: 180,
                  height: 180,
                  class: 'm1'
                }"
                class="profile-image"
                rounded="circle"
                alt="Circle image"
                :src="downloadURL ? downloadURL : '/gallery1.jpg'"
              ></b-img>
            </div>
            <div class="person-info mt-3 text-center">
              <h4>{{ userName }}</h4>
              <p>Jss1</p>
              <hr class="my-3" />
              <p class="gender"><b-icon icon="person"></b-icon> Female</p>
              <p class="location">
                <b-icon icon="map"></b-icon> Ibadan, Nigeria
              </p>
            </div>
            <div class="my-3 text-center">
              <b-button variant="outline-info" v-b-modal.profile-edit>Edit Profile</b-button>
            </div>
            <!-- edit-modal  -->
            <b-modal id="profile-edit" title="Edit Profile" hide-footer>
                <p class="mt-4">Hello from Your Companion</p>
                <form action="">
                  <form-group>
                    <label for="name"></label>
                    <input type="text" class="form-control"> 
                  </form-group>
                </form>
            </b-modal>
          </b-card>
        </b-col>
        <b-col md="8">
          <b-row>
            <b-col md="7">
              <b-card class="h-100">
                <div class="d-flex justify-content-between">
                  <h4>Fee Receipt</h4>
                  <div class="icon-box">
                    <b-icon icon="dash" font-scale="2"></b-icon>
                  </div>
                </div>
                <h6>File Uploaded</h6>
                <b-button variant="primary">View File</b-button>
              </b-card>
            </b-col>
            <b-col md="5">
              <b-card class="h-100">
                <h1 class="text-success">PAID</h1>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="7">
              <div class="subjects-section mt-5">
                <b-card class="p-4">
                  <div class="section-title d-flex justify-content-between">
                    <h4>Subjects</h4>
                    <div class="add-icon">
                      <a href="#"
                        ><b-icon icon="plus" font-scale="2"></b-icon
                      ></a>
                    </div>
                  </div>
                  <hr />
                  <ul class="pl-0">
                    <li
                      class="d-flex justify-content-between border-bottom p-3"
                    >
                      Agriculture
                    </li>
                    <li
                      class="d-flex justify-content-between border-bottom p-3"
                    >
                      Mathematics
                    </li>
                    <li
                      class="d-flex justify-content-between border-bottom p-3"
                    >
                      English Language
                    </li>
                    <li
                      class="d-flex justify-content-between border-bottom p-3"
                    >
                      Introductory Technology
                    </li>
                    <li
                      class="d-flex justify-content-between border-bottom p-3"
                    >
                      Integrated Science
                    </li>
                  </ul>
                </b-card>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { getFileExtension, generateRandomSequence } from "~/plugins/utils";
export default {
  layout: "dashboard",
  data() {
    return {
      downloadURL: "",
      userName: '',
      imagePlaceholder: false,
      showImageSpinner: false
    };
  },
  mounted(){
    const $this = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        $this.downloadURL =  user.photoURL;
        $this.showImageSpinner = true;
        console.log(user)
        $this.userName =  user.displayName

      }
    });
  },
  methods: {
    showImagePlaceholder(){
      this.showImageSpinner = false;
      this.imagePlaceholder = true;
    },
    chooseImage() {
    const $this = this;
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      document.body.appendChild(input);
      input.style.display = "none";
      input.onchange = () => {
        const file = input.files[0];
        input.remove();
        if (file) {
          console.log(file);
          const url = URL.createObjectURL(file);
          this.downloadURL = url;
          const fileRef = firebase
            .storage()
            .ref(
              `teachers/${generateRandomSequence()}.${getFileExtension(
                file.name
              )}`
            );

          const progress = fileRef.put(file);

          progress.on(
            "state_changed",
            snap => {
              let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

              if (percentage == 100) {
                // hide modal

                setTimeout(() => fileRef
                  .getDownloadURL()
                  .then(url => {
                    // use the url to set the image
                    
                    firebase.auth().currentUser.updateProfile({
                      photoURL: url
                    })

                    $this.downloadURL = url;

                    console.info("image has been uploaded")
                  })
                  .catch(err => {
                    console.trace(err);
                  }), 1000);

              }

              switch (snap.status) {
                case "paused":
                  (() => {
                    // paused
                  })();
                  break;

                case "running":
                  (() => {
                    // running
                  })();

                default:
                  break;
              }
            },
            err => {
              console.trace(err);
            }

            // progress.cancel();
          );
        }
      };
      input.click();
    }
  }
};
</script>

<style>
.profile-image {
  object-fit: cover !important;
}
</style>
