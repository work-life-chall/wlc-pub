<template>
  <div>
    <!-- New 첼린지 배너 -->
    <v-card theme="dark" flat rounded="0">
      <v-window v-model="onboarding">
        <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
          <v-card height="200" class="d-flex justify-center align-center">
            <span class="text-h2"> New 첼린지 배너 {{ n }} </span>
          </v-card>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn variant="plain" icon="mdi-chevron-left" @click="prev"></v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ isSelected, toggle }"
            :value="n"
          >
            <v-btn
              :variant="isSelected ? 'outlined' : 'text'"
              icon="mdi-record"
              @click="toggle"
            ></v-btn>
          </v-item>
        </v-item-group>
        <v-btn variant="plain" icon="mdi-chevron-right" @click="next"></v-btn>
      </v-card-actions>
    </v-card>
    <!-- 리워드 적립 TOP3 -->
    <v-card>
      <div class="d-flex justify-center">
        <v-icon class="mt-5" icon="mdi-trophy-outline" size="100"></v-icon>
      </div>
      <div class="d-flex justify-center">
        <span class="mb-5">리워드 적립 TOP3</span>
      </div>
      <div class="w-50 mx-auto mb-5 d-flex justify-space-between">
        <div class="align-self-end">
          <v-card
            width="120"
            height="120"
            variant="outlined"
            image="src/assets/avatar2.png"
          >
          </v-card>
          <div class="text-center">
            <b>TOP2</b>
            <br />
            OOO
            <br />
            13,000점
          </div>
        </div>
        <div>
          <v-card
            width="150"
            height="150"
            variant="outlined"
            image="src/assets/avatar1.png"
          >
          </v-card>
          <div class="text-center">
            <b>⭐TOP1⭐</b>
            <br />
            강현구
            <br />
            20,000점
          </div>
        </div>
        <div class="align-self-end">
          <v-card
            width="90"
            height="90"
            variant="outlined"
            image="src/assets/avatar3.png"
          >
          </v-card>
          <div class="text-center">
            <b>TOP3</b>
            <br />
            OOO
            <br />
            11,890점
          </div>
        </div>
      </div>
    </v-card>
    <!-- 랭킹 -->
    <v-card class="bg-grey-lighten-2" title="랭킹" prepend-icon="mdi-poll">
      <v-tabs v-model="tab">
        <v-tab value="participation">참여율 높은 순</v-tab>
        <v-tab value="reward">리워드 높은 순</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="participation">
            <div class="mt-3">
              <div class="mb-7 text-caption">
                1️⃣ [그냥 주는 첼린지] 매일매일 스쿼트
              </div>
              <v-slider
                v-model="slider1"
                thumb-label="always"
                max="1000"
                disabled="true"
              ></v-slider>
            </div>
            <div class="mt-3">
              <div class="mb-7 text-caption">2️⃣ 건강식단 첼린지</div>
              <v-slider
                v-model="slider2"
                thumb-label="always"
                max="1000"
                disabled="true"
              ></v-slider>
            </div>
            <div class="mt-3">
              <div class="mb-7 text-caption">3️⃣ 업무 공유 첼린지</div>
              <v-slider
                v-model="slider3"
                thumb-label="always"
                max="1000"
                disabled="true"
              ></v-slider>
            </div>
          </v-window-item>

          <v-window-item value="reward">
            <div class="mt-3">
              <div class="mb-7 text-caption">
                1️⃣ 능률 1.5배 첼린지 (Reward x2)
              </div>
              <v-slider
                v-model="slider1"
                thumb-label="always"
                max="1000"
                disabled="true"
              ></v-slider>
            </div>
            <div class="mt-3">
              <div class="mb-7 text-caption">2️⃣ 그린 푸드 첼린지</div>
              <v-slider
                v-model="slider2"
                thumb-label="always"
                max="1000"
                disabled="true"
              ></v-slider>
            </div>
            <div class="mt-3">
              <div class="mb-7 text-caption">3️⃣ 업무 공유 첼린지</div>
              <v-slider
                v-model="slider3"
                thumb-label="always"
                max="1000"
                disabled="true"
              ></v-slider>
            </div>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    <!-- 첼린지 카테고리 -->
    <v-card class="mt-5" title="첼린지 카테고리">
      <div class="w-75 mx-auto mb-5 d-flex justify-space-between">
        <div>
          <v-btn icon="mdi-run" size="100"></v-btn>
          <div class="mt-1 text-center">운동</div>
        </div>
        <div>
          <v-btn icon="mdi-pencil" size="100"></v-btn>
          <div class="mt-1 text-center">공부</div>
        </div>
        <div>
          <v-btn icon="mdi-calendar-check" size="100"></v-btn>
          <div class="mt-1 text-center">일상</div>
        </div>
        <div>
          <v-btn icon="mdi-food" size="100"></v-btn>
          <div class="mt-1 text-center">식습관</div>
        </div>
        <div>
          <v-btn icon="mdi-flag-checkered" size="100"></v-btn>
          <div class="mt-1 text-center">목표</div>
        </div>
      </div>
      <div class="mb-5 d-flex justify-center">
        <router-link :to="'#'">전체보기</router-link>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
//
const onboarding = ref(0);
const length = ref(3);
const tab = ref(null);
const slider1 = ref(700);
const slider2 = ref(300);
const slider3 = ref(150);

const next = () => {
  onboarding.value =
    onboarding.value + 1 > length.value ? 1 : onboarding.value + 1;
};

const prev = () => {
  onboarding.value =
    onboarding.value - 1 <= 0 ? length.value : onboarding.value - 1;
};

//const timer = setInterval(next, 3000);

onBeforeUnmount(() => {
  //clearInterval(timer);
});
</script>
