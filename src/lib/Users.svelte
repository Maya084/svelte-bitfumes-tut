<script>
  import FilterUser from "./FilterUser.svelte";
  import NewUser from "./NewUser.svelte";
  import User from "./User.svelte";
  import { users, addNewUser, remove } from "../stores/store";

  $: filteredUsers = $users;

  const filter = ({ detail }) => {
    if (detail === "null") {
      filteredUsers = $users;
      return;
    }

    detail = detail === "true";

    filteredUsers = $users.filter((user) => user.active === detail);
  };
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of users</h1>

  <div class="flex justify-between mx-4 items-center">
    <FilterUser on:filter={filter} />
    <NewUser on:newUser={addNewUser} />
  </div>

  {#each filteredUsers as user, i (user.id)}
    <User on:remove={remove} {user} {i} />
  {:else}
    <p>No user found!</p>
  {/each}
</div>
