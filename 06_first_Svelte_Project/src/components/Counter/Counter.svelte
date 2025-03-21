<script>
    let counter = $state(0);

</script>

<h3>
    counter {counter}
</h3>
<button onclick={() => counter++}>
    increment
</button>
<button onclick={() => counter--}>
    decrement
</button>
