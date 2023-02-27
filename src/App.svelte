<script>
  import Users from "./lib/Users.svelte";
  import HomePage from "./lib/HomePage.svelte";
  import { Router, Route, Link } from "svelte-navigator";
</script>

<Router>
  <nav class="p-4 bg-blue-800 text-white">
    <Link to="/" class="mx-4 cursor-pointer hover:underline">Home</Link>
    <Link to="/users" class="mx-4 cursor-pointer hover:underline">Users</Link>
  </nav>

  <Route path="/">
    <HomePage />
  </Route>
  <Route path="/users">
    <Users />
  </Route>
</Router>
