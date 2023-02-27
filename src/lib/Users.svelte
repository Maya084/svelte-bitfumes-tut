<script>
  import user1 from "../assets/images/user1.png";
  import user2 from "../assets/images/user2.png";
  import user3 from "../assets/images/user3.png";
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

  let filteredUsers = users;

  const filter = (e) => {
    let status = e.target.value;
    if (status === "null") {
      filteredUsers = users;
      return;
    }

    status = status === "true";

    filteredUsers = users.filter((user) => user.active === status);
  };
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of users</h1>

  <div class="ml-4 mt-4">
    <label for="user-filer"> Filter User </label>
    <select
      name="user-filer"
      id="user-filer"
      on:change={filter}
      class="border rounded-lg px4 py2 ml-4"
    >
      <option value={null}>All</option>
      <option value={true}>Active</option>
      <option value={false}>Inactive</option>
    </select>
  </div>

  {#each filteredUsers as user, i (user.id)}
    <User {user} {i} />
  {:else}
    <p>No user found!</p>
  {/each}
</div>
