<template>
  <div class="favorite-wrapper">
    <div class="form-wrapper">
      <form>
        <input v-model="favorite.name" />
        <select v-model="favorite.sport" name="fav-sport">
          <option value=''>-- Choose One --</option>
          <option v-for="sport in sports" v-bind:value="sport">{{ sport }}</option>
        </select>
        <button @click.prevent="addField" :disabled="!isValid">Add Field</button>
      </form>
    </div>
    <div class="favorite-list-wrapper">
      <h2>Fields Configured ({{ count }})</h2>
      <ul class="favorite-list">
        <li v-for="fav in favorites"> {{ fav.name }} ({{ fav.sport }}) </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sports: [ 'Baseball', 'Football', 'Basketball' ],
      favorite: {
        name: '',
        sport: ''
      }
    }
  },

  computed: {
    favorites() {
      return this.$store.state.favorites
    },

    isValid() {
      return (this.favorite.name !== '' && this.favorite.sport !== '');
    },
    
    count() {
      return this.$store.state.favorites.length
    }
  },

  methods: {
    addField() {
      if (!this.isValid)
        return

      this.$store.commit('addFavorite', this.favorite)
      this.favorite = { name: '', sport: '' }
    }
  }
}
</script>

<style>
</style>
