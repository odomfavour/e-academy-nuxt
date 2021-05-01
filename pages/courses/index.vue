<template>
  <div class="container-fluid">
    <b-card no-body>
      <div class="top-display d-flex align-items-center justify-content-center">
        <div class="text-center">
          <h2>Introduction to HTML</h2>
          <div class="d-flex align-items-center justify-content-center my-2">
            <p class="mr-3"><b-icon icon="alarm"></b-icon> 50 min left </p> 
         <p><b-icon icon="alarm"></b-icon> 12 lessons</p> 
          </div>
         
         <b-button variant="light">Resume</b-button>
         <b-button variant="outline-light">Start Over</b-button>
        </div>
      </div>
    </b-card>
    <div class="row">
      <div class="col-md-6">
        <div class="name d-flex">
          <div class="image-holder mr-3">
            <b-img v-bind="{ blank: true, blankColor: '#777', width: 60, height: 40, class: 'm1' }" rounded alt="Rounded image"></b-img>
          </div>
          <div class="">
            <h5>HTML Fundamentals</h5><br>
            <small>With Samuel</small>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  layout: 'dashboard',

}
</script>

<style>
  .top-display {
    background: url(/course-bg.png) no-repeat;
    height: 300px;
    background-position: center;
    background-size: cover;
    color: #fff;
  }
</style>