<script>
    import "../app.css";
</script>

<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div class="navbar rounded-xl bg-primary text-primary-content mb-5">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">SpaceX Explorers</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a href="/about">About</a></li>
    </ul>
  </div>
</div>

    <slot />
</div>
