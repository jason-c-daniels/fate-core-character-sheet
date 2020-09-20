<style>
    @import "SettingsDialog.css";
</style>

<script>
    import '@material/mwc-dialog';
    import '@material/mwc-button';

    import '@material/mwc-select';
    import '@material/mwc-textfield';
    import '@material/mwc-list';
    import '@material/mwc-list/mwc-list-item';

    import getNewDials from '../../model/dials'
    import {dials} from '../../applicationSettings'
    import Switch from "./Switch/Switch.svelte";
    import TextField from "./TextField/TextField.svelte";

    let my_dials = getNewDials();


    let settingsDialogElement,
            attributesNameElement,
            numberOfStressBoxesElement,
            stressBoxesGrayAfterElement,
            physicalStressTitleElement,
            physicalStressSubtitleElement,
            mentalStressTitleElement,
            mentalStressSubtitleElement,
            singleStressTitleElement,
            singleStressSubtitleElement,
            middleRowsElement;

    const unsubscribe_dials = dials.subscribe(value => {
        my_dials = {...value};
    });

    export function show(current_dials) {
        // reset "my_dials" to current state of the dials
        console.log("made it.");
        my_dials = {...current_dials};

        settingsDialogElement.show();
    }

    export function getDials() {
        return my_dials;
    }

    function handleDialogClosed(evt) {
        if (evt.detail.action === 'ok') {

            my_dials.stressBoxesGrayAfter = parseInt(stressBoxesGrayAfterElement.value);
            my_dials.numberOfStressBoxes = parseInt(numberOfStressBoxesElement.value);
            my_dials.physicalStressTitle = physicalStressTitleElement.value;
            my_dials.physicalStressSubtitle = physicalStressSubtitleElement.value;
            my_dials.mentalStressTitle = mentalStressTitleElement.value;
            my_dials.mentalStressSubtitle = mentalStressSubtitleElement.value;
            my_dials.singleStressTitle = singleStressTitleElement.value;
            my_dials.singleStressSubtitle = singleStressSubtitleElement.value;
            dials.set({...my_dials});
        }
    }
</script>

<mwc-dialog heading="Character Sheet Settings" bind:this={settingsDialogElement} on:closed={handleDialogClosed} width="120rem" >
    <div style="margin-top: 1rem;">
        <h3>Attributes, Approaches and Skills</h3>
        <Switch title="Use skills" bind:value={my_dials.useSkillsInsteadOfApproaches} />
        <Switch title="Use approaches" bind:value={my_dials.useApproachesInsteadOfSkills} />
        <Switch title="Use attributes" bind:value={my_dials.useAttributes} />
        <TextField type="text" label="Attributes Section Name" bind:value={my_dials.attributesName} style="width:100%"/>

        <h3>Equipment, Stunts Extras</h3>
        <TextField type="number" min="5" max="16" label="Number of Rows in Middle Section" bind:value={my_dials.middleRows} style="width:100%"/>
        <Switch title="Use equipment." bind:value={my_dials.useEquipment} />
        <Switch title="Use extras" bind:value={my_dials.useExtras} />

        <h3>Stress</h3>
        <Switch title="Use single point stress boxes." bind:value={my_dials.useSinglePointStressBoxes} />
        <Switch title="Use single stress track" bind:value={my_dials.useSingleStressTrack} />
        <TextField type="number" min="1" max="12" label="Number of Stress Boxes" bind:value={my_dials.numberOfStressBoxes} style="width:100%"/>
        <TextField type="number" min="1" max="12" label="Stress Boxes Become Gray After #" bind:value={my_dials.stressBoxesGrayAfter} style="width:100%"/>
        <TextField type="text" label="Physical stress track title" enabled={!my_dials.useSingleStressTrack} bind:value={my_dials.physicalStressTitle} style="width:100%"/>
        <TextField type="text" label="Physical stress track subtitle" enabled={!my_dials.useSingleStressTrack} bind:value={my_dials.physicalStressSubtitle} style="width:100%"/>
        <TextField type="text" label="Mental stress title" enabled={!my_dials.useSingleStressTrack} bind:value={my_dials.mentalStressTitle} style="width:100%"/>
        <TextField type="text" label="Mental stress track subtitle" enabled={!my_dials.useSingleStressTrack} bind:value={my_dials.mentalStressSubtitle} style="width:100%"/>
        <TextField type="text" label="Single stress track title" enabled={my_dials.useSingleStressTrack} bind:value={my_dials.singleStressTitle} style="width:100%"/>
        <TextField type="text" label="Single stress track subtitle" enabled={my_dials.useSingleStressTrack} bind:value={my_dials.singleStressSubtitle} style="width:100%"/>

        <h3>Conditions and Consequences</h3>
        <Switch title="Use conditions" bind:value={my_dials.useConditions}/>
        <Switch title="Use consequences" bind:value={my_dials.useConsequences}/>
        <Switch title="Hide fourth consequence" bind:value={my_dials.hideFourthConsequence} enabled={my_dials.useConsequences}/>
        <Switch title="Use corruption" bind:value={my_dials.useCorruption}/>

    </div>
    <mwc-button
            slot="primaryAction"
            dialogAction="ok">
        Save
    </mwc-button>
</mwc-dialog>
