<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <div v-if="router.currentRoute.value.fullPath === '/'">
        워라첼 사용자 UI 퍼블리싱
      </div>
      <div v-else class="d-flex justify-space-between">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <span class="align-self-center">
          <v-img width="60" src="@/assets/temporary-logo.png" @click="router.push({name:'Main'})"/>
        </span>
        <span class="align-self-center">
          <v-btn variant="plain" @click="overlay = !overlay">
            <v-icon icon="mdi-account"></v-icon>
            로그인
          </v-btn>
        </span>
      </div>
    </v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" permanent absolute>
    <v-list>
      <v-list-item
        prepend-avatar="@/assets/avatar1.png"
        title="강현구"
        subtitle="님 반갑습니다."
      >
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list 
      :lines="false" 
      density="compact" 
      nav
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item.path"
        :active="false"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.name"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-overlay
    v-model="overlay"
    contained
    class="pt-10 justify-center"
  >
  
  <v-card width="500">
    <span class="d-flex justify-end">
      <v-icon icon="mdi-alpha-x" size="50" @click="overlay = !overlay">
      </v-icon>
    </span>
    <h1 class="mb-15 d-flex justify-center">
      WLC LOGIN
    </h1>
      <v-text-field
      class="mx-auto mt-5 w-75"
      label="아이디"
      variant="outlined"
      :rules="rules"
      hide-details="auto"
      ></v-text-field>
      <v-text-field
        class="mx-auto mt-5 w-75"
        label="비밀번호"
        variant="outlined"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-checkbox class="d-inline-block mt-3 ps-14" label="아이디 저장"></v-checkbox>
      <div class="mt-5 d-flex justify-center">
        <v-btn size="large" variant="outlined" @click="loaded = !loaded">
          로그인
        </v-btn>
      </div>
      <span v-if="!loaded" class="my-6 d-flex justify-center text-red-accent-3">
        ※ 계정 정보에 관한 문의는 각 회사 담당자에게 문의 ※
      </span>
      <v-text-field
        v-else
        color="success"
        loading
        disabled
      ></v-text-field>
    </v-card>
  </v-overlay>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
//
const drawer = ref(false);
const items = ref([
  {
    id: 0,
    name: "내 정보 조회",
    icon: 'mdi-account',
    path: "",
  },
  {
    id: 1,
    name: "팀 정보 조회",
    icon: 'mdi-account-multiple',
    path: "",
  },
  {
    id: 2,
    name: "즐겨찾기",
    icon: 'mdi-star',
    path: "",
  },
  {
    id: 3,
    name: "내 첼린지 기록",
    icon: 'mdi-history',
    path: "",
  },
]);
const overlay = ref(false);
const loaded = ref(false);
const rules = ref([
  value => !!value || '필수 입력 값입니다.',
  value => (value && value.length >= 3) || '최소 3자 이상 입력해야 합니다.',
]);
</script>