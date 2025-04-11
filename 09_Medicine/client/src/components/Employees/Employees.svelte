<script>
    let employees = $state([])
    fetch("https://localhost:80/employees")
        .then(response => response.json())
        .then((result) => {
            employees = result.data
        })
</script>
<h1>Employees available</h1>
<h4>...</h4>
{#each employees as employee }
    <h4>{employee}</h4>
{/each}