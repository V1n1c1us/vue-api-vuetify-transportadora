<template>
    <v-alert
      dismissible
      v-model="showAlert"
      type="success"
      @click="close">
      {{ msgSuccess }}
    </v-alert>
</template>
<script>
export default {
    name: 'alert-message',
    props: ['msgSuccess', 'alert'],    
    updated() {
        this.show = this.alert
    },
    computed: {
        showAlert() {
            return this.alert
        }
    },
    methods: {
        close() {
            this.$emit('close', false)
        }
    }
}
</script>

