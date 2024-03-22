<script setup>

import {useTodosStore} from "@/stores/todos.js";
import {onBeforeMount} from "vue";

const todos = useTodosStore()

onBeforeMount(() => todos.getTodos())
</script>

<template>
  <div>
    <transition-group>
    <div v-for="todo in todos.unfinishedTodos" :key="todo.id" class="item">
      <input type="checkbox" id="" v-model="todo.completed">{{todo.title}}
    </div>
    </transition-group>
  </div>
</template>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition: all 0.7s;
}
.v-leave-from { opacity: 1; }
.v-leave-to { opacity: 0; }

.item{
  margin-left: 25%;
  margin-right: 25%;
  padding: 5px;
  margin-bottom: 5px;
  background-color: lightslategrey;
  border-radius: 3px;
}


</style>