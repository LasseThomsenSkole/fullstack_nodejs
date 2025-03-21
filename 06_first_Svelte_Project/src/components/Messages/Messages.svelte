<script>
    const messages = $state([",21,312", 2,32,344])
    let messageInput = $state("");
    function addMessage(){
        messages.push(messageInput)
        messageInput = ""
    }
</script>

<h1>Messages</h1>
<p>{messages}</p>
<input bind:value={messageInput} placeholder="type message">
<button onclick={addMessage}>submit message</button>
