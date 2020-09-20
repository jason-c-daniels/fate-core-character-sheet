<style>
    @import "TextField.css";
</style>

<script>
    export let value;
    let element;
    export let type="text";
    export let min="";
    export let max="";
    export let label="";
    export let enabled=true;
    export let style="";
    export let className="";
    $:disabled= enabled ? "" : "disabled";
</script>

<mwc-textfield
        bind:this={element}
        {type}
        {min}
        {max}
        {label}
        {value}
        {style}
        class="{className}"
        {disabled}
        on:change={()=> value= (type==='number' ? parseInt(element.value): element.value) }
        />
