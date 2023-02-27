<script>
  import user1 from "../assets/images/user1.png";
  import user2 from "../assets/images/user2.png";
  import user3 from "../assets/images/user3.png";

  let users = [
    {
      image: user1,
      name: "Jane",
      email: "jane@bitfumes.com",
    },
    {
      image: user2,
      name: "Daisy",
      email: "daisy@email.com",
    },
    {
      image: user3,
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
