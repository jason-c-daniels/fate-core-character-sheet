<style>
    @import "Switch.css";
</style>

<script>
    import '@material/mwc-switch';
    export let value;
    export let title="";
    export let enabled=true;
    $:checked = value ? "checked" : "";
    $:disabled = enabled ? "" : "disabled";
</script>
<div style="width:100%">
{#if !!title}
    <label for="switch">{title}</label>
{/if}
<mwc-switch id="switch"  {checked} {disabled} on:change={()=>value=!value}/>
</div>