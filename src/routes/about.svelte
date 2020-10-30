<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>
my name is : {name}
<input class="p-2 rounded border" bind:value={name}>

<p>This is the 'about' page. There's not much here.</p>

<script>
	let name = "john"
</script>