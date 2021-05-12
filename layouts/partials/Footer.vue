<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col md="5">
          <h4>E-Academy</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            dolores numquam temporibus corrupti dolorem expedita, commodi ea
            iste natus. Deserunt, non ipsam. Totam, earum. Nobis ratione
            praesentium porro a magni.
          </p>
        </b-col>
        <b-col md="3">
          <h6>Workshops</h6>
          <ul>
            <li><a href="#">Dance to the piper</a></li>
            <li><a href="#">Dance to the piper</a></li>
            <li><a href="#">Dance to the piper</a></li>
            <li><a href="#">Dance to the piper</a></li>
          </ul>
        </b-col>
        <b-col md="3" cols="6">
          <h6>Events</h6>
          <ul>
            <li><a href="#">Dance to the piper</a></li>
            <li><a href="#">Dance to the piper</a></li>
            <li><a href="#">Dance to the piper</a></li>
            <li><a href="#">Dance to the piper</a></li>
          </ul>
        </b-col>
        <b-col md="1" cols="6">
          <h6>Events</h6>
          <ul class="socials">
            <li>
              <a href="#"
                ><b-icon
                  icon="facebook"
                  font-scale="1.4rem"
                  variant="light"
                ></b-icon
              ></a>
            </li>
            <li>
              <a href="#"
                ><b-icon
                  icon="Twitter"
                  font-scale="1.4rem"
                  variant="light"
                ></b-icon
              ></a>
            </li>
            <li>
              <a href="#"
                ><b-icon
                  icon="Instagram"
                  font-scale="1.4rem"
                  variant="light"
                ></b-icon
              ></a>
            </li>
            <li>
              <a href="#"
                ><b-icon
                  icon="Linkedin"
                  font-scale="1.4rem"
                  variant="light"
                ></b-icon
              ></a>
            </li>
          </ul>
        </b-col>
      </b-row>

      <hr class="mt-4" />
      <p>Copyright © 2021 Ogochukwu Odom. All Rights Reserved</p>
    </b-container>
  </div>
</template>

<style scoped>
.footer {
  padding: 80px 0 30px 0;
  background: #1c1e1f;
  color: #fff;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer ul a {
  color: #fff;
  text-decoration: none;
}

.socials li {
  margin-bottom: 10px;
}

.footer hr {
  background: #fff;
}
</style>
