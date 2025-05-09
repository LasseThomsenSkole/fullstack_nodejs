<script>
    import {nickname} from "./store/nicknameStore.js";

    import Colors from "./pages/Colors/Colors.svelte";
    import Registraion from "./pages/registration/Registraion.svelte";

    //todo onmount til localstorage ting
</script>
{#if !$nickname}
    <Registraion/>
{:else}
    <Colors/>
{/if}