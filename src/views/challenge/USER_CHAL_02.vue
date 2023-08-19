<template>
  <div class="ps-7 py-5">
    <v-icon>mdi-home-outline</v-icon>
    <span class="text-grey"> > 첼린지 > 상세</span>
  </div>
  <v-card theme="dark" flat rounded="0">
    <v-card height="200" class="d-flex justify-center align-center">
      <span class="text-h2"> 상세 이미지 존 </span>
    </v-card>
  </v-card>
  <v-card
    prepend-icon="mdi-run"
    class="mt-5"
    title="스쿼트 100회 하기"
    subtitle="매일, 2주동안, 10,000점"
  >
    <template v-slot:append>
      <span class="me-3">
        <v-icon>mdi-human-male-male</v-icon>
        300명 참여중
      </span>
      <v-btn color="grey-lighten-1" icon="mdi-star" variant="text"></v-btn>
    </template>
    <div class="overflow-hidden">
      <v-btn
        prepend-icon="mdi-hand-pointing-right"
        class="me-3 mb-5 float-end"
        variant="plain"
      >
        빠른 참여신청
      </v-btn>
    </div>
    <div class="mt-5">
      <div class="d-flex justify-center">
        <v-icon>mdi-pound</v-icon>
        <span class="mb-5">첼린지 의의</span>
      </div>
      <v-card-text class="text-center">
        스쿼트는 <br />
        하체 근육을 기른다 ... <br />
        신체기능을 유지하게 한다 ... <br />
        관절의 안정성과 자세를 개선한다 ... <br />
        지방을 태운다 ... <br />
        유연성을 향상시킨다 ... <br />
      </v-card-text>
      <div class="mt-3 d-flex justify-center">
        <v-icon>mdi-pound</v-icon>
        <span class="mb-5">첼린지 진행 방식</span>
      </div>
      <v-card-text class="text-center">
        스쿼트는 <br />
        하체 근육을 기른다 ... <br />
        신체기능을 유지하게 한다 ... <br />
        관절의 안정성과 자세를 개선한다 ... <br />
        지방을 태운다 ... <br />
        유연성을 향상시킨다 ... <br />
      </v-card-text>
      <div class="mt-3 d-flex justify-center">
        <v-icon>mdi-pound</v-icon>
        <span class="mb-5">첼린지 인증방법</span>
      </div>
      <v-card-text class="text-center">
        스쿼트는 <br />
        하체 근육을 기른다 ... <br />
        신체기능을 유지하게 한다 ... <br />
        관절의 안정성과 자세를 개선한다 ... <br />
        지방을 태운다 ... <br />
        유연성을 향상시킨다 ... <br />
      </v-card-text>
      <div class="mt-3 d-flex justify-center">
        <v-icon>mdi-pound</v-icon>
        <span class="mb-5">리워드 지급</span>
      </div>
      <v-card-text class="text-center">
        스쿼트는 <br />
        하체 근육을 기른다 ... <br />
        신체기능을 유지하게 한다 ... <br />
        관절의 안정성과 자세를 개선한다 ... <br />
        지방을 태운다 ... <br />
        유연성을 향상시킨다 ... <br />
      </v-card-text>
      <div class="mt-3 d-flex justify-center">
        <v-icon>mdi-pound</v-icon>
        <span class="mb-5">유의사항</span>
      </div>
      <v-card-text class="text-center">
        스쿼트는 <br />
        하체 근육을 기른다 ... <br />
        신체기능을 유지하게 한다 ... <br />
        관절의 안정성과 자세를 개선한다 ... <br />
        지방을 태운다 ... <br />
        유연성을 향상시킨다 ... <br />
      </v-card-text>
    </div>
    <div class="d-flex justify-center my-10">
        <v-btn variant="tonal">
            신청하기
        </v-btn>
    </div>
  </v-card>
</template>

<script setup>
//
</script>
