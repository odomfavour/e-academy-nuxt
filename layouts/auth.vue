<template>
  <div class="d-flex auth-page">
      <div class="image-box">
          <div class="inner-box">
              <div class="my-5 text-center">
                  <nuxt-link to="/"><h3>E-Academy</h3></nuxt-link>
              </div>
                <img src="/online2.svg" class="img-fluid" alt="">
          </div>
      </div>
      <div class="auth-section"> 
        <Nuxt />
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .auth-page {
        height: 100vh;
    }

    .image-box {
        width: 50%;
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background: #eee;
    }

    .image-box img {
        width: 80%;
    }

    .auth-section {
        width: 50%;
    }

    @media(max-width: 900px) {
        .image-box {
            display: none;
        }

        .auth-section {
            width: 100%;
        }
    }



</style>