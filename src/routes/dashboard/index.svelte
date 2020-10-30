<div style="display:flex; flex-direction: column;">
    Dashboard name: {name}
    
    <input class="p-2 border rounded" type="text" bind:value={name}>
    <button class="bg-red-300 p-3 border rounded" on:click={onClick}>Click Me!</button>
</div>

<script>
    let name = "John"
    function onClick() {
        alert('clicked: '+name)
    }
</script>