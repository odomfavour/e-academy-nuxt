<template>
  <div class="container">
    <div class="top my-3">
      <small>Overview</small>
      <h4>Results Stash</h4>
    </div>
    <div class="mt-4" v-for="(level, index) in levels" :key="index">
      <h3>{{ level.name }}</h3>
      <div class="row">
        <div class="col-md-4" v-for="(term, index) in terms" :key="index">
          <b-card>
            <div class="text-center">
              <h3>{{ term.name }}</h3>
            </div>
            <div class="text-right">
              <nuxt-link
                :to="`/courses/grades/${level.name + term.id}`"
                class="btn btn-outline-primary"
                >See Grades</nuxt-link
              >
            </div>
          </b-card>
        </div>
      </div>
      <hr class="mt-5" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      levels: [
        { name: "Year One" },
        { name: "Year Two" },
        { name: "Year Three" },
        { name: "Year Four" }
      ],
      terms: [
        { name: "First Term", id: "first_term" },
        { name: "Second Term", id: "second_term" },
        { name: "Third Term", id: "third_term" }
      ]
    };
  }
};
</script>

<style></style>



// const nth = function(d) {
//   if (d > 3 && d < 21) return 'th';
//   switch (d % 10) {
//     case 1:  return "st";
//     case 2:  return "nd";
//     case 3:  return "rd";
//     default: return "th";
//   }
// }

// const fortnightAway = new Date(+new Date + 12096e5);
// const date = fortnightAway.getDate();
// const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][fortnightAway.getMonth()];

// document.getElementById("date").innerHTML = `In two weeks it will be the ${date}<sup>${nth(date)}</sup> ${month} ${fortnightAway.getFullYear()}`;

// // test
// const dates = [...Array(32).keys()].slice(1).map(i => `${i}${nth(i)}`)
// console.log(dates.join(", "))