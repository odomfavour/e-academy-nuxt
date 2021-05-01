<template>
  <div>
    <div class="container-fluid">
      <section class="header d-flex justify-content-between flex-md-row flex-column">
        <div class="d-flex">
          <div class="image-box mr-2">
            <b-img v-bind="{ blank: true, blankColor: '#777', width: 60, height: 50, class: 'm1' }" rounded alt="Rounded image"></b-img>
          </div>
          <div class="course-title">
            <h5 class="mb-0">Angular</h5>
            <small>Elijah Murray <span>Software Engineer and Developer</span></small>
          </div>
        </div>
        <div class="my-auto">
          <nuxt-link to="#" class="btn btn-outline-primary py-auto"> Back to Course</nuxt-link>
        </div>
      </section>
    </div>
    <section class="quiz-screen bg-primary mt-3">
      <div class="container">
        <div class="question-counter d-flex justify-content-between py-4">
          <h4>Question 1 of 20</h4>
          <h4>20:00</h4>
        </div>
        <div class="question mt-4">
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reprehenderit delectus illum facere libero assumenda autem rem rerum in beatae. Corrupti, blanditiis! Accusamus sint, voluptates molestiae commodi consequuntur sapiente officia.</h5>
        </div>
      </div>
    </section>
    <section class="lower-pack bg-light py-4 px-md-5">
      <div class="row">
        <div class="col-md-7">
          <div class="my-2 mb-3 mb-md-0">
            <b-icon icon="bookmark-star-fill" variant="primary" font-scale="1.3rem"></b-icon>
          <span>Choose the correct answer below:</span>
          </div>
        </div>
        <div class="col-md-5">
          <div class="d-flex justify-content-between flex-md-row flex-column">
            <b-button variant="outline-primary" class="mb-3 mb-md-0">Skip Quiz</b-button>
            <b-button variant="outline-primary" class="mb-3 mb-md-0">Skip Quiz</b-button>
            <b-button variant="danger" class="mb-3 mb-md-0">Next question <b-icon icon="arrow-right" font-scale="1.3rem"></b-icon></b-button>
          </div>
        </div>
      </div>
    </section>
    <section class="answer-layer pt-5">
      <div class="container"> 
        <p>Your answer</p>
        display answer format
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',

}
</script>

<style scoped>
  .quiz-screen {
    min-height: 300px;
    color: #fff;
  }

  .question {
    width: 70%;
  }

  .lower-pack {
    box-shadow: 2px 3px 4px #ccc;
  }

  @media(max-width: 425px) {
    .question {
      width: 100%;
    }

    .question h5 {
      font-size: 20px;
      padding-bottom: 20px;
    }
  }
</style>