<template>
  <div class="container-fluid">
    <b-row>
      <b-col md="7" cols="12">
        <div class="top my-3">
          <small>Questions</small>
          <h4>Got a Question ?</h4>
          <p>We are just a dial away. Write to us today</p>
        </div>
        <div class="enquiry-section">
          <b-form @submit="onSubmit">
            <b-form-group id="subject" label="Subject:" label-for="subject">
              <b-form-input
                id="input-2"
                placeholder="Enter subject"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Message:" label-for="message">
              <b-form-textarea
                id="textarea-rows"
                placeholder="Write here"
                rows="5"
              ></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">Send Message</b-button>
          </b-form>
        </div>
        <h3></h3>
      </b-col>
      <b-col>
        <img src="/question.jpg" class="img-fluid pt-5" alt="question" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  methods: {
    onSubmit() {}
  }
};
</script>

<style></style>
