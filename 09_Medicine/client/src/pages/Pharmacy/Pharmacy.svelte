<script>
    import {onMount} from "svelte";

    import Employees from "../../components/Employees/Employees.svelte";
    import {fetchGet} from "../../util/fetch.js";
    import {fetchPost} from "../../util/fetch.js";
    import {BASE_URL} from "../../stores/generalStore.js";

    let pills = [];
    onMount(async () => {
        pills = (await fetchGet($BASE_URL + "/pills")).data;
        console.log(pills);
    })

    async function fillPrescription() {
        fetchPost($BASE_URL + "/pills", {
            name: "Headache pills",
        })
        pills = (await fetchGet($BASE_URL + "/pills")).data
    }
</script>
<h1>pharmacy</h1>
<Employees/>
{#each pills as pill}
    <h2>{pill.name}</h2>
{/each}

<button onclick={fillPrescription}>Fill prescription</button>

