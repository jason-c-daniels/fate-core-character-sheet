
<style>
    @import "Section.css";
</style>

<script>
    export let title;
    export let hint="";
    export let indent="0";
    export let props={};
</script>

<div class="section" {...props}>
    <div class="header" style="padding-left:0.1in">
        <span >{title}</span>
    </div>
    <div class="content" style="padding-left:{indent}">
        {#if (!!hint)}
            <span class="hint">{hint}</span>
        {/if}
        <slot>

        </slot>
    </div>
</div>