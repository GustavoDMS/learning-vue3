import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";

export const useTodosStore = defineStore('todos', () =>{
    const all = ref([])
    const unfinishedTodos = computed(() => all.value.filter((todos) => todos.completed === false))
    const finishedTodos = computed(() => all.value.filter((todos) => todos.completed === false))

    function getTodos(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => all.value = json);
    }
    watch(all, (oldValue, newValue) =>{
        console.log(oldValue,newValue)
    })

    return {all, unfinishedTodos, finishedTodos, getTodos}
})