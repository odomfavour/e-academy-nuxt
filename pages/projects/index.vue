<template>
  <div class="project-shelf">
      <h4>Projects</h4>
      <div class="mt-5">
          <b-table striped hover :items="projects" outlined responsive>
                <template #cell(view)="data">
                    <nuxt-link class="btn btn-outline-info" :to="`/projects/${data.index}`">View</nuxt-link>
                </template>
            </b-table>
      </div>
  </div>
</template>

<script>
export default {
    layout: 'dashboard',
    data() {
        return {
            projects: [
                 {name: "Mathematic's classwork", start_date: '01/01/2018', end_date: "01/01/2018", status: 'Done', Teacher: 'Mr. Calculua', view: ""},
                 {name: "Mathematic's classwork", start_date: '01/01/2018', end_date: "01/01/2018", status: 'Done', Teacher: 'Mr. Calculua', view: ""},
                 {name: "Mathematic's classwork", start_date: '01/01/2018', end_date: "01/01/2018", status: 'Done', Teacher: 'Mr. Calculua', view: ""},
                 {name: "Mathematic's classwork", start_date: '01/01/2018', end_date: "01/01/2018", status: 'Done', Teacher: 'Mr. Calculua', view: ""},
                 {name: "Mathematic's classwork", start_date: '01/01/2018', end_date: "01/01/2018", status: 'Done', Teacher: 'Mr. Calculua', view: ""},
                 ]
        }
    }
}
</script>

<style>

</style>