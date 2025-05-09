<script>
    import { onMount} from "svelte";
    import io from 'socket.io-client';
    let socket;
    onMount(()=>{
        socket = io("http://localhost:80");
    })
    let color = "#ff0000"
    function submitColor(){
        console.log(color)
        socket.emit('client-sends-color', {color})
    }
</script>
<input type="color" bind:value={color}>
<button onclick={submitColor}>Submit color</button>