<script>
  let users = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Jane",
      email: "jane@bitfumes.com",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/9824/9824594.png",
      name: "Daisy",
      email: "daisy@email.com",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/9793/9793060.png",
      name: "Anna",
      email: "anna@lol.com",
    },
  ];
</script>

<div>
  <h1>List of users</h1>
  {#each users as user}
    <div>
      <img src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  {/each}
</div>
