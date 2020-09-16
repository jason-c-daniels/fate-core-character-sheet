<style>
    @import "SkillGroup.css";
</style>

<script>
    export let title="";
    export let skills=[];
</script>

<div class="flex-row">
    <label>
        {title}
    </label>
        <input type="text" bind:value={skills[0]}>
        <input type="text" bind:value={skills[1]}>
        <input type="text" bind:value={skills[2]}>
        <input type="text" bind:value={skills[3]}>
        <input type="text" bind:value={skills[4]}>
</div>