<style>
    @import "Notes.css";
</style>

<script>
    import NotesSheet from "./NotesSheet";

    export let notes=[""];
    export let count=0;
    export let name="";

</script>

{#if count > 0}
    {#each Array(count) as _,i}
        <NotesSheet bind:notes={notes[i]} page="{i+1}" subtitle="{name}"/>
    {/each}
{/if}