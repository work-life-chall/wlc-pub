<template>
  <v-container>
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">가이드 화면 명</th>
          <th class="text-left">가이드 화면 특성</th>
          <th class="text-left">경로</th>
          <th class="text-center">비고</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in guideData" :key="data.name">
          <td>{{ index }}</td>
          <td><router-link :to="data.path">{{ data.name }}</router-link></td>
          <td>{{ data.charact }}</td>
          <td>{{ data.path }}</td>
          <td>{{ data.remark }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const guideData = ref([
    /* main */
    {
        name: 'USER_MAIN_01',
        charact: '메인페이지(HOME)',
        path: '/main',
        remark: '',
    },
    /* challenge */
    {
        name: 'USER_CHAL_01',
        charact: '첼린지 목록',
        path: '/chal/list',
        remark: '',
    },
    {
        name: 'USER_CHAL_02',
        charact: '첼린지 상세',
        path: '/chal/detail',
        remark: '실제 route와 주소다름(퍼블리싱이므로)',
    },
]);
</script>
