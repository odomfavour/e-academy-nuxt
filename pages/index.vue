<template>
  <div class="">
    <div class="hero-image">
      <div class="hero-content">
        <b-container>
          <b-row>
            <b-col></b-col>
            <b-col cols="12" md="6" class="hero-text">
              <h1 class="intro">Study from the comfort of your home</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates porro beatae distinctio modi fuga, illum natus
                commodi ex reprehenderit provident architecto nisi, quis, nam
                rem ad? Laboriosam possimus quisquam consequatur?
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <div class="offer-section">
      <b-container>
        <b-row>
          <b-col cols="12" md="4">
            <h2>What we offer</h2>
            <h4>We Bring The Best Things for You</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cum ea blanditiis repellendus cupiditate quod delectus
              exercitationem beatae tempore facere, pariatur excepturi commodi
              culpa magni laboriosam optio possimus quae ipsa?
            </p>
            <b-button variant="outline-primary" class="mb-4"
              >Read More</b-button
            >
          </b-col>
          <b-col>
            <div class="offers">
              <b-row>
                <b-col md="6" class="mb-4">
                  <div class="offer">
                    <b-icon
                      icon="camera"
                      font-scale="3"
                      variant="danger"
                    ></b-icon>
                    <h5>Advanced Speakers</h5>
                    <p>
                      Hear 9 inspiring talks, meet the best product people in
                      Europe, and party together after the event!
                    </p>
                  </div>
                </b-col>
                <b-col md="6" class="mb-4">
                  <div class="offer">
                    <b-icon
                      icon="camera"
                      font-scale="3"
                      variant="danger"
                    ></b-icon>
                    <h5>Advanced Speakers</h5>
                    <p>
                      Hear 9 inspiring talks, meet the best product people in
                      Europe, and party together after the event!
                    </p>
                  </div>
                </b-col>
                <b-col md="6" class="mb-4">
                  <div class="offer">
                    <b-icon
                      icon="camera"
                      font-scale="3"
                      variant="danger"
                    ></b-icon>
                    <h5>Advanced Speakers</h5>
                    <p>
                      Hear 9 inspiring talks, meet the best product people in
                      Europe, and party together after the event!
                    </p>
                  </div>
                </b-col>
                <b-col md="6" class="mb-4">
                  <div class="offer">
                    <b-icon
                      icon="camera"
                      font-scale="3"
                      variant="danger"
                    ></b-icon>
                    <h5>Advanced Speakers</h5>
                    <p>
                      Hear 9 inspiring talks, meet the best product people in
                      Europe, and party together after the event!
                    </p>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="principal-view">
      <b-container>
        <b-row>
          <b-col md="5">
            <img src="/ogo.png" class="img-fluid" alt="" />
          </b-col>
          <b-col
            md="7"
            class="d-flex align-items-center justify-content-center"
          >
            <div>
              <h2>Our Mission</h2>
              <h4>We Bring The Best Things for You</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente cum ea blanditiis repellendus cupiditate quod delectus
                exercitationem beatae tempore facere, pariatur excepturi commodi
                culpa magni laboriosam optio possimus quae ipsa?
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="stars-section">
      <div class="container">
        <b-row>
          <b-col md="6" class="mb-4" v-for="(star, index) in 4" :key="index">
            <div class="star-card">
              <div class="d-flex flex-md-row flex-column">
                <div class="star-image text-center mr-2 mt-4">
                  <b-img
                    v-bind="{
                      blank: false,
                      blankColor: '#777',
                      class: 'm1'
                    }"
                    rounded="circle"
                    alt="Circle image"
                    src="/ogo.png"
                  ></b-img>
                </div>
                <div class="star-note">
                  <h4 class="">person</h4>
                  <p>
                    Personal Information Anna assumed the role of Chief Product
                    Officer in July 2017 and leads the product
                  </p>
                </div>
              </div>
              <div class="star-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 361.1 62.7"
                >
                  <path
                    d="M59.2,19.4c91.2-28.9,166.6,27.1,224,33.9c37.7,4.5,67.8-9.4,77.9-53.3H0v62.4C11.5,45.7,30.5,29.4,59.2,19.4z"
                  ></path>
                </svg>
              </div>
            </div>
          </b-col>
          <!-- <b-col md="6" class="mb-4">
            <div class="star-card">
              <div class="d-flex">
                <div class="star-image text-center mr-2 mt-4">
                  <b-img
                    v-bind="{
                      blank: false,
                      blankColor: '#777',
                      width: 150,
                      height: 150,
                      class: 'm1'
                    }"
                    rounded="circle"
                    alt="Circle image"
                    src="/gallery1.jpg"
                  ></b-img>
                </div>
                <div class="star-note">
                  <h4 class="mt-5">person</h4>
                  <p>
                    Personal Information Anna assumed the role of Chief Product
                    Officer in July 2017 and leads the product
                  </p>
                </div>
              </div>
              <div class="star-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 361.1 62.7"
                >
                  <path
                    d="M59.2,19.4c91.2-28.9,166.6,27.1,224,33.9c37.7,4.5,67.8-9.4,77.9-53.3H0v62.4C11.5,45.7,30.5,29.4,59.2,19.4z"
                  ></path>
                </svg>
              </div>
            </div>
          </b-col>
          <b-col md="6" class="mb-4">
            <div class="star-card">
              <div class="d-flex">
                <div class="star-image">
                  <div class="star-image text-center mr-2 mt-4">
                    <b-img
                      v-bind="{
                        blank: false,
                        blankColor: '#777',
                        width: 150,
                        height: 150,
                        class: 'm1'
                      }"
                      rounded="circle"
                      alt="Circle image"
                      src="/ogo.png"
                    ></b-img>
                  </div>
                </div>
                <div class="star-note">
                  <h4 class="mt-5">person</h4>
                  <p>
                    Personal Information Anna assumed the role of Chief Product
                    Officer in July 2017 and leads the product
                  </p>
                </div>
              </div>
              <div class="star-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 361.1 62.7"
                >
                  <path
                    d="M59.2,19.4c91.2-28.9,166.6,27.1,224,33.9c37.7,4.5,67.8-9.4,77.9-53.3H0v62.4C11.5,45.7,30.5,29.4,59.2,19.4z"
                  ></path>
                </svg>
              </div>
            </div>
          </b-col>
          <b-col md="6" class="mb-4">
            <div class="star-card">
              <div class="d-flex">
                <div class="star-image text-center mr-2 mt-4">
                  <b-img
                    v-bind="{
                      blank: false,
                      blankColor: '#777',
                      width: 150,
                      height: 150,
                      class: 'm1'
                    }"
                    rounded="circle"
                    alt="Circle image"
                    src="/ogo.png"
                  ></b-img>
                </div>
                <div class="star-note">
                  <h4 class="mt-5">person</h4>
                  <p>
                    Personal Information Anna assumed the role of Chief Product
                    Officer in July 2017 and leads the product
                  </p>
                </div>
              </div>
              <div class="star-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 361.1 62.7"
                >
                  <path
                    d="M59.2,19.4c91.2-28.9,166.6,27.1,224,33.9c37.7,4.5,67.8-9.4,77.9-53.3H0v62.4C11.5,45.7,30.5,29.4,59.2,19.4z"
                  ></path>
                </svg>
              </div>
            </div>
          </b-col> -->
        </b-row>
        <div class="my-4">
          <div class="text-center">
            <b-button variant="outline-info">View All</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="gallery-section">
      <div class="my-5 text-center">
        <h2>Gallery</h2>
        <h4>Our Photospeak</h4>
      </div>
      <div class="picture-gallery">
        <div class="pic-box">
          <img src="/bg_testimonials.jpg" alt="" class="img-fluid" />
        </div>
        <div class="pic-box">
          <img src="/gallery1.jpg" alt="" class="img-fluid" />
        </div>
        <div class="pic-box">
          <img src="/hero-img.jpg" alt="" class="img-fluid" />
        </div>
        <div class="pic-box">
          <img src="/gallery2.jpg" alt="" class="img-fluid" />
        </div>
      </div>
    </div>
    <div class="testimonial-section">
      <div class="container">
        <b-row>
          <b-col>
            <div class="testimonial-face">
              <img src="/bg_testimonials.jpg" alt="" class="img-fluid" />
            </div>
          </b-col>
          <b-col md="7">
            <div class="mt-5">
              <h2>Testimonials</h2>
              <h4>What people say</h4>
              <div class="testimonies">
                <b-row>
                  <b-col md="6">
                    <b-card class="mb-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut facilis illum tempore, mollitia reprehenderit dolore.
                      Repellat ipsam suscipit voluptatum expedita.
                    </b-card>
                  </b-col>
                  <b-col md="6">
                    <b-card class="mb-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut facilis illum tempore, mollitia reprehenderit dolore.
                      Repellat ipsam suscipit voluptatum expedita.
                    </b-card>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // layout: 'default'
};
</script>

<style>
.hero-image {
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg, #000000c9, #000000c7),
    url("/hero.jpg");
  background-size: cover;
  background-position: 50% 0%;
  width: 100%;
  height: 100vh;
  opacity: 1;
  z-index: 20;
  color: #fff;
  margin-top: 60px;
}

.hero-image .intro {
  margin-top: 300px;
  font-size: 50px;
}
@media (max-width: 425px) {
  .hero-text .intro {
    margin-top: 150px;
    font-size: 22px;
  }

  .hero-text p {
    font-size: 15px;
  }

  .star-image img {
    object-fit: cover;
    width: 120px !important;
    height: 120px !important;
  }

  .star-note h4 {
    margin-top: 15px;
  }

  .star-note p {
    font-size: 14px;
  }

  .picture-gallery {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}

.hero-text h1 .offer-section {
  margin: 120px 0;
}

.offer-section {
  padding: 100px 0;
}

.offer {
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: all 500ms linear;
}

.offer:hover {
  transform: translateY(-20px);
  background-color: #fff;
}

.principal-view {
  margin-bottom: 120px;
  min-height: 400px;
  padding-top: 100px;
  background: #ccc;
}

.principal-view img {
  margin-top: -47%;
}

/* star */

.stars-section {
  margin-bottom: 120px;
}
.star-card {
  position: relative;
  padding: 40px 30px;
  background: #f3f3f3;
  border-radius: 10px;
  transition: all 500ms linear;
}
/* .star-image {
  width: 100%;
}
.star-image img{
  height: 185px;
  width: 185px;
  object-fit: cover;
  border-radius: 50%;
} */

.star-image img {
  object-fit: cover;
  width: 150px;
  height: 150px;
}

.star-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
}

.star-svg svg {
  fill: #c5e0e8;
}

.star-card:hover {
  background: #fff;
  box-shadow: 0 15px 38px 0 rgb(0 0 0 / 10%);
}

.star-card:hover svg {
  fill: #c3dce4;
}

.testimonial-section {
  margin-bottom: 120px;
  background: #ccc;
  padding: 0px 30px 100px;
}

.testimonial-face img {
  max-width: 118.552%;
  margin-top: -15%;
  margin-left: -18%;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 26px 38px 0px rgb(0 0 0 / 15%);
}

.testimony-bg {
  background: #ccc;
}

/* //gallery */

.gallery-section {
  margin: 120px 0;
}

.picture-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 100px;
}

.pic-box img {
  height: 250px;
  object-fit: cover;
  width: 100%;
}

@media (max-width: 900px) {
  .picture-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
