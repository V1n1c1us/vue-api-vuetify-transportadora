<template>
  <v-form>
    <v-text-field
      v-model="name"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-btn color="primary" @click="send">Primary</v-btn>
  </v-form>
</template>
<script>
export default {
    data: () => ({
        name: '',
        email: ''
    }),
    methods: {
        send () {
            console.log(this.name + ' ' + this.email)
        }
    }
}
</script>
