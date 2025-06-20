<template>
  <h1>App</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/mylearn">MyLearn</RouterLink> |
    <RouterLink to="/myFirebaseFood">MyFirebaseFood</RouterLink> |
    <RouterLink to="/articles">Articles</RouterLink> |
    <RouterLink to="/vue3">Vue3</RouterLink> |
    <RouterLink to="/price">Price</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/myvideopage">MyVideoPage</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup></script>
