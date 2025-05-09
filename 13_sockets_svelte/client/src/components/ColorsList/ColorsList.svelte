<script>
    import { colors} from "../../store/colorStore.js";
</script>
{#each $colors as {nickname, color}}
    <div style={`background-color: ${color}`}>{nickname}: {color}</div>
{/each }