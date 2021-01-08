<template>
  <div id="navboot">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="#home">
        <img src="@/assets/logo dark.png" class="img-fluid" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link active" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#clients">Clients</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#why">Why US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testmonial">Testimonials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="lang">
        <a href="index.html" class="btn btn btn-primary">EN</a>
        <a href="about.html" class="btn btn btn-primary">AR</a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navbarboot"
};
</script>
