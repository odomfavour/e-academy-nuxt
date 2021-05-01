<template>
  <div class="container">
    <div class="edit-form">
      <h3>Edit course</h3>
      <h6>Basic</h6>
      <form action="">
        <div class="row">
        <div class="col-md-8">
          <div class="form-group">
            <label for="">Course Title</label>
            <input type="text" class="form-control">
            <small>Please see our course</small>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea name="" id="" class="form-control" rows="5"></textarea>
          </div>
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <b-button variant="outline-primary"> Add Section</b-button>
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
          

          <div class="video-section mb-4">
            <b-card>
              <div class="video-screen">

              </div>
              <div class="">
                <div class="form-group">
                  <label for="">URL</label>
                  <input type="text" class="form-control">
                </div>
               
              </div>
            </b-card>
          </div>
          <div class="other-options">
            <b-card>
              <div class="form-group">
                <label for="">Category</label>
                <b-form-select v-model="category" :options="categories" size="sm" class="mt-3"></b-form-select>
              </div>
              <div class="form-group">
                <label for="tags-basic">Type a new tag and press enter</label>
                <b-form-tags input-id="tags-basic" v-model="value"></b-form-tags>
                <p class="mt-2">Value: {{ value }}</p>
              </div>
            </b-card>
          </div>
        </div>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      text: 'Loennbgghs sdvhghgd',
      category: null,
      categories: [
          { value: null, text: 'Please select a category' },
          { value: 'a', text: 'Vue' },
          { value: 'b', text: 'React' },
      ],
      value: [],
    }
  }

}
</script>

<style>

</style>