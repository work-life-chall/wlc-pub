<template>
  <v-footer v-if="router.currentRoute.value.fullPath !== '/'" class="bg-grey-lighten-2">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>@WLC</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import router from "@/router";
import { ref } from 'vue';
//
const links = ref(['FAQ', '공지사항', '리워드 약관']);
</script>
