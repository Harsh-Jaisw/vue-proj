<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTaskStore } from '../Store/TaskManager';
const param = ref(0)
const list = ref([])
const userStore=useTaskStore()
onMounted(async () => {
  const route = useRoute();
  param.value = route.params
  list.value=await userStore.getUser(param.value.id)
})
</script>
<template>
  <div class="item">

    Welcome Component to {{ param.name }} this is your Data for id - {{ param.id }}
<button @click="userStore.$reset">Reset</button>
    <div v-for="item in list" :key="item.id">
      <p>{{ item.email }}</p>
      <p> {{ item.first_name }} {{ item.last_name }} </p>
      <img height="60" :src=item.avatar />
    </div>
  </div>
</template>

<!-- <style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style> -->
