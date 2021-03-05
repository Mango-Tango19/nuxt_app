<template>
<div>
  <Nav />
  <div class="container">
    <Hero />
    <CardSection 
    :cardSection="cardsInfo"
    />
  </div>
  </div>
</template>

<script>

import { largeCardsSection } from '@/assets/data.js' 
    export default {
        data() {
            return {
                cardsInfo: largeCardsSection
            }
        }
    }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
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
}
</style>
