<template>
  <div class="container">
    <form action="">
     <div class="row">
        <div class="col-md-8">
    <div class="edit-form">
      <h3>Edit course</h3>
      <h6>Basic</h6>
      <div class="quiz-questions-section">
        <div class="question">
          <b-card>
            <div class="one">
              <h5>Question 1 of 10</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quo corporis ullam. Veritatis sapiente eum eligendi. Fuga temporibus minus placeat beatae aspernatur quidem illum, expedita adipisci, eum nostrum fugit recusandae.</p>
              <div class="row">
                <div class="col-md-3">
                  <div class="answers">
                    <b-form-select v-model="q_one" :options="q_one_options" size="sm" class="mt-3"></b-form-select>
                  </div>
                </div>
              </div>
              
            </div>
          </b-card>
        </div>
      </div>
      <h4>New Qustion</h4>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea name="" id="" class="form-control" rows="5"></textarea>
            <small>Shortly describe the question.</small>
          </div>
          <div class="form-group">
            <label for="">Question type</label>
            <b-form-select v-model="questionType" :options="questionTypes" size="sm" class="mt-3"></b-form-select>
          </div>
           <div class="form-group">
              <label for="tags-basic">Type a new answer and press enter</label>
              <b-form-tags input-id="tags-basic" v-model="value"></b-form-tags>
              <p class="mt-2">Value: {{ value }}</p>
            </div>
          <div class="form-group">
            <label for="">Completion Points</label>
            <b-form-select v-model="questionType" :options="questionTypes" size="sm" class="mt-3"></b-form-select>
          </div>
          <b-button variant="outline-primary"> Add Section</b-button>
      </div>
        </div>
        <div class="col-md-4">
          <div class="save-section mb-4">
            <b-card>
            <div class="top">
              <div class="text-center">
                <b-button variant="primary">Save Changes</b-button>
              </div>
            </div>
            <hr>
            <div class="delete-section">
              <div class="text-center">
                <b-button variant="danger">Delete Course</b-button>
              </div>
            </div>
          </b-card>
          </div>
        </div>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      q_one: '',
      value: [],
      questionType: null,
      questionTypes: [
          { value: null, text: 'Please select a category' },
          { value: 'a', text: 'Multiple options' },
          { value: 'b', text: 'Single Option' },
          { value: 'b', text: 'Essay' },
      ],
      q_one_options: [
          { value: null, text: 'Please select a category' },
          { value: 'a', text: 'Multiple options' },
          { value: 'b', text: 'Single Option' },
          { value: 'b', text: 'Essay' },
      ]
    }
  }
}
</script>

<style>

</style>