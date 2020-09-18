<style>
    @import "Skills.css";
</style>

<script>
    import Section from '../../shared/Section'
    import SkillGroup from './SkillGroup'
    export let skills={};
</script>

<Section title="Skills" props={{style:"margin-left: 1rem; width:100%; flex-grow:2; flex-shrink:"}}>
    <SkillGroup title="Superb (+5)" bind:skills={skills.superb} />
    <SkillGroup title="Great (+4)" bind:skills={skills.great} />
    <SkillGroup title="Good (+3)" bind:skills={skills.good} />
    <SkillGroup title="Fair (+2)" bind:skills={skills.fair} />
    <SkillGroup title="Average (+1)" bind:skills={skills.average} />
    <SkillGroup title="Unranked (0)" bind:skills={skills.unranked} />
</Section>