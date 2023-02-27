<script>
  export let user;
  export let i;
</script>

<div
  class="flex m-5 bg-white border p-2 roudned-lg shadow-md hover:shadow-lg cursos-pointer items-center"
>
  <p class="w-10">{i + 1}</p>
  <img src={user.image} alt={user.name} class="rounded-full w-14 h-14" />
  <p class="mx-5 w-20">{user.name}</p>
  <p class="mx-5 w-40">{user.email}</p>
</div>
