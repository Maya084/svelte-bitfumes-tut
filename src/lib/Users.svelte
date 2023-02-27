<script>
  import user1 from "../assets/images/user1.png";
  import user2 from "../assets/images/user2.png";
  import user3 from "../assets/images/user3.png";
  import FilterUser from "./FilterUser.svelte";
  import NewUser from "./NewUser.svelte";
  import User from "./User.svelte";

  let users = [
    {
      id: 1,
      image: user1,
      name: "Jane",
      email: "jane@bitfumes.com",
      active: true,
    },
    {
      id: 2,
      image: user2,
      name: "Daisy",
      email: "daisy@email.com",
      active: false,
    },
    {
      id: 3,
      image: user3,
      name: "Anna",
      email: "anna@lol.com",
      active: true,
    },
  ];

  $: filteredUsers = users;

  const filter = ({ detail }) => {
    if (detail === "null") {
      filteredUsers = users;
      return;
    }

    detail = detail === "true";

    filteredUsers = users.filter((user) => user.active === detail);
  };

  const remove = ({ detail }) => {
    users = users.filter((user) => user.id !== detail);
  };

  const addNewUser = ({ detail }) => {
    users.push({
      ...detail,
      id: users.length + 1,
      image: user3,
    });
    users = users;
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
