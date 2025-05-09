<script>
    import { onMount} from "svelte";
    import io from 'socket.io-client';
    import { colors } from "../../store/colorStore.js";
    import ColorsList from "../../components/ColorsList/ColorsList.svelte";

    let color = "#ff0000"
    let socket;

    onMount(()=>{
        socket = io("http://localhost:80");
        socket.on('server-sends-color', (data)=>{
            document.body.style.backgroundColor = data.color // gør normal ikke det her (DOM manipulation)
            const nickname = 'lasse'
            colors.update((colorsArray)=>{
                colorsArray.push({ color: data.color, nickname })
                return colorsArray;
            })
        })
    })

    function submitColor(){
        console.log(color)
        socket.emit('client-sends-color', {color})
    }
</script>
<input type="color" bind:value={color}>
<button onclick={submitColor}>Submit color</button>
<ColorsList/>