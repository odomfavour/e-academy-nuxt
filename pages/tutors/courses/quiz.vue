<template>
  <div class="container">
    <div class="d-flex justify-content-between flex-md-row flex-column">
      <h4>Quizzes</h4>
      <nuxt-link to="/tutors/courses/edit-quiz" class="btn btn-outline-primary">Add Quiz</nuxt-link>
    </div>
    <div class="mt-5">
      <b-row>
                <b-col md="6">
                  <b-card>
                    <div class="top">
                      <b-row>
                        <b-col md="3">
                          <b-img v-bind="{ blank: true, blankColor: '#777', width: 60, height: 40, class: 'm1' }" rounded alt="Rounded image"></b-img>
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
                      <hr class="my-2">
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
                          <b-img v-bind="{ blank: true, blankColor: '#777', width: 60, height: 40, class: 'm1' }" rounded alt="Rounded image"></b-img>
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
                      <hr class="my-2">
                    </div>
                    <div class="bottom">
                      <div class="d-flex justify-content-betweem">
                        <b-button class="px-2" variant="light">Continue</b-button>
                      </div>
                    </div>
                  </b-card>
                </b-col>
              </b-row>
    </div>
  </div>
</template>

<script>
export default {
   layout: 'dashboard',
}
</script>

<style>

</style>