<script>
  import FilterUser from "./FilterUser.svelte";
  import NewUser from "./NewUser.svelte";
  import User from "./User.svelte";
  import { users, addNewUser, remove } from "../stores/store";
  import { tweened } from "svelte/motion";
  import { cubicIn, quintOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";

  $: filteredUsers = $users;

  const progress = tweened(0, {
    duration: 400,
    easing: cubicIn,
  });

  const filter = ({ detail }) => {
    if (detail === "null") {
      filteredUsers = $users;
      return;
    }

    detail = detail === "true";

    filteredUsers = $users.filter((user) => user.active === detail);
  };

  onMount(() => {
    progress.set($users.length);
  });
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of users</h1>

  <div class="flex justify-between mx-4 items-center">
    <FilterUser on:filter={filter} />
    <NewUser on:newUser={addNewUser} />
  </div>

  <progress max="15" min="0" value={$progress} class="w-full mx-4" />

  {#each filteredUsers as user, i (user.id)}
    <div animate:flip={{ duration: 1000, delay: 250, easing: quintOut }}>
      <User on:remove={remove} {user} {i} />
    </div>
  {:else}
    <p>No user found!</p>
  {/each}
</div>
