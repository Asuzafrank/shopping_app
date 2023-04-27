<template>
  <nav
    class="navbar bg-dark navbar-expand-lg bg-body-tertiary"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <img
        src="../assets/logo.png"
        alt="Logo"
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">
              Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/post" class="nav-link"> post product</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link"> about us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",
};
</script>