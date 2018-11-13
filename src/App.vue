<template>
  <v-app>
    <v-navigation-drawer termporary v-model="sideNav" app>
      <v-list>
        <v-list-tile 
          v-for="item in menuItems"
          :keys="item.title"
          router
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.native.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      sideNav: false,
      menuItems: [
        { icon : 'supervisor_account', title: 'Home', link: '/'},
        { icon : 'room', title: 'Produtos', link: '/#'},
        { icon : 'face', title: 'Fornecedor', link: '/fornecedor'},
        { icon : 'lock_open', title: 'Sing in', link: '/fornecedor'}
      ]
    }
  }
}
</script>
