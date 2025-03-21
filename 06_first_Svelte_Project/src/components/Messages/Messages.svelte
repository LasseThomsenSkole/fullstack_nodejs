<script>
    import FirstMessage from "./FirstMessage.svelte";

    const messages = $state([])
    let messageInput = $state("");
    function addMessage(){
        messages.push(messageInput)
        messageInput = ""
    }
</script>
<FirstMessage firstMessage={messages[0]}/>
<h1>Messages</h1>
<p>{messages}</p>
<input bind:value={messageInput} placeholder="type message">
<button onclick={addMessage}>submit message</button>
