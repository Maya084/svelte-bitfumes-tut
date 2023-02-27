<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { fade } from "svelte/transition";

  export let user;
  export let i;

  const remove = () => {
    dispatch("remove", user.id);
  };
</script>

<div
  transition:fade={{ duration: 500 }}
  class="flex m-5 bg-white border p-2 roudned-lg shadow-md hover:shadow-lg cursos-pointer items-center relative"
>
  <button
    on:click={remove}
    class="absolute right-0 top-0 -mt-3 rounded-full w-5 h-5 bg-red-300 text-white text-sm hover:bg-red-500"
  >
    x
  </button>
  <p class="w-10">{i + 1}</p>
  <img src={user.image} alt={user.name} class="rounded-full w-14 h-14" />
  <p class="mx-5 w-20">{user.name}</p>
  <p class="mx-5 w-40">{user.email}</p>
</div>
