<template>
  <div class="ps-7 py-5">
    <v-icon>mdi-home-outline</v-icon>
    <span class="text-grey"> > 첼린지 > 목록</span>
  </div>
  <v-sheet elevation="6">
    <v-tabs
      height="100"
      prev-icon="mdi-chevron-left"
      next-icon="mdi-chevron-right"
      show-arrows
      centered
      stacked
    >
      <v-tab v-for="category in categoryList" :key="category.name">
        <v-icon>{{ category.icon }}</v-icon>
        <br />
        {{ category.name }}
      </v-tab>
    </v-tabs>
  </v-sheet>
  <v-card class="pt-10">
    <v-card-text class="overflow-hidden">
      <v-btn class="ms-2 float-end" height="55" variant="outlined">
        검색
      </v-btn>
      <v-text-field
        class="ms-2 float-end w-25"
        :loading="loading"
        variant="outlined"
        label="검색어를 입력하세요"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
      <div class="ms-2 float-end w-50">
        <v-select
          class="ps-2 float-end w-25"
          variant="outlined"
          v-model="selectedPeriod"
          :items="periods"
          label="기간"
          multiple
        >
          <template v-slot:prepend-item>
            <v-list-item title="전체선택" @click="togglePeriod">
              <template v-slot:prepend>
                <v-checkbox-btn
                  :color="likesSomePeriod ? 'indigo-darken-4' : undefined"
                  :indeterminate="likesSomePeriod && !likesAllPeriod"
                  :model-value="likesSomePeriod"
                ></v-checkbox-btn>
              </template>
            </v-list-item>

            <v-divider class="mt-2"></v-divider>
          </template>
        </v-select>
        <v-select
          class="ps-2 float-end w-25"
          variant="outlined"
          v-model="selectedFrequency"
          :items="frequencys"
          label="빈도"
          multiple
        >
          <template v-slot:prepend-item>
            <v-list-item title="전체선택" @click="toggleFrequency">
              <template v-slot:prepend>
                <v-checkbox-btn
                  :color="likesSomeFrequency ? 'indigo-darken-4' : undefined"
                  :indeterminate="likesSomeFrequency && !likesAllFrequency"
                  :model-value="likesSomeFrequency"
                ></v-checkbox-btn>
              </template>
            </v-list-item>

            <v-divider class="mt-2"></v-divider>
          </template>
        </v-select>
        <v-select
          class="ps-2 float-end w-25"
          variant="outlined"
          :items="orderItems"
          label="정렬"
        ></v-select>
        <v-select
          class="ps-2 float-end w-25"
          variant="outlined"
          :items="showItems"
          label="보기방법"
        ></v-select>
      </div>
    </v-card-text>

    <v-list height="600">
      <v-list-subheader inset>전체보기</v-list-subheader>

      <v-divider class="mb-5" inset></v-divider>

      <v-list-item
        class="ps-16"
        v-for="(category, index) in categorys"
        :key="category.title"
        :subtitle="category.subtitle"
      >
        <template v-slot:prepend>
          <v-avatar :color="category.color">
            <v-icon color="white">{{ category.icon }}</v-icon>
          </v-avatar>
        </template>

        {{ category.title }}
        <v-chip>10,000점</v-chip>
        <v-icon class="ms-3" v-if="index === 0">mdi-thumb-up</v-icon>
        <v-icon class="ms-3" v-if="index === 0">mdi-poll</v-icon>

        <template v-slot:append>
          <span class="me-3">
            <v-icon>mdi-human-male-male</v-icon>
            300명 참여중
          </span>
          <v-btn
            color="grey-lighten-1"
            :icon="category.favoriteIcon"
            variant="text"
            @click="
              () => {
                category.favorite = !category.favorite;
                category.favoriteIcon = category.favorite
                  ? 'mdi-star'
                  : 'mdi-star-outline';
              }
            "
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>

    <v-pagination :length="3"></v-pagination>
  </v-card>
</template>

<script setup>
import { computed } from "vue";
import { ref } from "vue";
//
const categoryList = ref([
  {
    icon: "mdi-check-all",
    name: "전체보기",
  },
  {
    icon: "mdi-run",
    name: "운동",
  },
  {
    icon: "mdi-pencil",
    name: "공부",
  },
  {
    icon: "mdi-calendar-check",
    name: "일상",
  },
  {
    icon: "mdi-food",
    name: "음식",
  },
  {
    icon: "mdi-flag-checkered",
    name: "목표",
  },
  {
    icon: "mdi-account-outline",
    name: "보안",
  },
  {
    icon: "mdi-circle-small",
    name: "소확행",
  },
  {
    name: "카테고리",
  },
  {
    name: "카테고리",
  },
  {
    name: "카테고리",
  },
  {
    name: "카테고리",
  },
  {
    name: "카테고리",
  },
  {
    name: "카테고리",
  },
  {
    name: "카테고리",
  },
  {
    name: "카테고리",
  },
  {
    name: "카테고리",
  },
  {
    name: "카테고리",
  },
  {
    name: "카테고리",
  },
  {
    name: "카테고리",
  },
]);
const loading = ref(false);
const loaded = ref(false);
const selectedFrequency = ref([]);
const selectedPeriod = ref([]);
const frequencys = ref(["매일", "평일", "주말"]);
const periods = ref(["한달", "3주", "2주", "1주"]);
const orderItems = ref([
  "최신순",
  "리워드 높은 순",
  "리워드 낮은 순",
  "가장 많은 참여율 순",
]);
const showItems = ref(["전체보기", "추천만 보기", "랭킹만 보기"]);
const categorys = ref([
  {
    color: "black",
    icon: "mdi-run",
    subtitle: "매일, 2주동안",
    title: "스쿼트 100회 하기",
    favoriteIcon: "mdi-star-outline",
    favorite: false,
  },
  {
    color: "black",
    icon: "mdi-calendar-check",
    subtitle: "매일",
    title: "기상 첼린지",
    favoriteIcon: "mdi-star",
    favorite: false,
  },
  {
    color: "black",
    icon: "mdi-run",
    subtitle: "매일, 2주동안",
    title: "스쿼트 100회 하기",
    favoriteIcon: "mdi-star-outline",
    favorite: false,
  },
  {
    color: "black",
    icon: "mdi-calendar-check",
    subtitle: "매일",
    title: "기상 첼린지",
    favoriteIcon: "mdi-star",
    favorite: false,
  },
  {
    color: "black",
    icon: "mdi-run",
    subtitle: "매일, 2주동안",
    title: "스쿼트 100회 하기",
    favoriteIcon: "mdi-star-outline",
    favorite: false,
  },
  {
    color: "black",
    icon: "mdi-calendar-check",
    subtitle: "매일",
    title: "기상 첼린지",
    favoriteIcon: "mdi-star",
    favorite: false,
  },
  {
    color: "black",
    icon: "mdi-run",
    subtitle: "매일, 2주동안",
    title: "스쿼트 100회 하기",
    favoriteIcon: "mdi-star-outline",
    favorite: false,
  },
  {
    color: "black",
    icon: "mdi-calendar-check",
    subtitle: "매일",
    title: "기상 첼린지",
    favoriteIcon: "mdi-star",
    favorite: false,
  },
  {
    color: "black",
    icon: "mdi-run",
    subtitle: "매일, 2주동안",
    title: "스쿼트 100회 하기",
    favoriteIcon: "mdi-star-outline",
    favorite: false,
  },
]);

const onClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    loaded.value = false;
  }, 2000);
};

const likesAllFrequency = computed(() => {
  return selectedFrequency.value.length === frequencys.value.length
    ? true
    : false;
});
const likesSomeFrequency = computed(() => {
  return selectedFrequency.value.length > 0 ? true : false;
});
const likesAllPeriod = computed(() => {
  return selectedPeriod.value.length === periods.value.length ? true : false;
});
const likesSomePeriod = computed(() => {
  return selectedPeriod.value.length > 0 ? true : false;
});

const toggleFrequency = () => {
  if (likesAllFrequency.value) {
    selectedFrequency.value = [];
  } else {
    selectedFrequency.value = frequencys.value.slice();
  }
};

const togglePeriod = () => {
  if (likesAllPeriod.value) {
    selectedPeriod.value = [];
  } else {
    selectedPeriod.value = periods.value.slice();
  }
};
</script>
