<script>
    import {nickname} from "./store/nicknameStore.js";
    import Colors from "./pages/Colors/Colors.svelte";
    import Registraion from "./pages/registration/Registraion.svelte";

</script>
{#if !$nickname}
    <Registraion/>
{:else}
    <Colors/>
{/if}