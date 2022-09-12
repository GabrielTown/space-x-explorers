<script>
  import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error.message}</h1>
<p>It looks like you just hit a page that doesn't exist</p>
