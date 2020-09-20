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
    import Switch from "../../components/shared/Switch/Switch.svelte";
    import TextField from "../../components/shared/TextField/TextField.svelte";

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
            dials.set({...my_dials});
        }
    }
</script>

<mwc-dialog heading="Character Sheet Settings" bind:this={settingsDialogElement} on:closed={handleDialogClosed} width="120rem" >
    <div style="margin-top: 1rem;">
        <h3>Sheet Configuration</h3>
        <TextField type="number" min="0" max="10" label="Number of sheets of notes" bind:value={my_dials.numberOfNotesSheet} style="width:100%"/>
        <TextField type="text" label="Top section title" bind:value={my_dials.topTitle} style="width:100%" />
        <h3>Attributes, Approaches and Skills</h3>
        <Switch title="Use skills" bind:value={my_dials.useSkillsInsteadOfApproaches} />
        <Switch title="Use approaches" bind:value={my_dials.useApproachesInsteadOfSkills} />
        <Switch title="Use attributes" bind:value={my_dials.useAttributes} />
        <TextField type="text" label="Attributes section name" bind:value={my_dials.attributesName} enabled={my_dials.useAttributes} style="width:100%"/>

        <h3>Equipment, Extras, and Stunts</h3>
        <TextField type="number" min="5" max="16" label="Number of rows for Equipment, Extras, and Stunts" bind:value={my_dials.middleRows} style="width:100%"/>
        <Switch title="Use equipment." bind:value={my_dials.useEquipment} />
        <Switch title="Use extras" bind:value={my_dials.useExtras} />
        <Switch title="Use stunts" bind:value={my_dials.useStunts} />


        <h3>Stress</h3>
        <Switch title="Use stress" bind:value={my_dials.useStress} />
        <Switch title="Use single point stress boxes." bind:value={my_dials.useSinglePointStressBoxes} enabled="{my_dials.useStress}"/>
        <Switch title="Use single stress track" bind:value={my_dials.useSingleStressTrack} enabled="{my_dials.useStress}"/>
        <TextField type="number" min="1" max="12" label="Number of stress boxes" bind:value={my_dials.numberOfStressBoxes} style="width:100%" enabled="{my_dials.useStress}"/>
        <TextField type="number" min="1" max="12" label="Stress boxes become gray after #" bind:value={my_dials.stressBoxesGrayAfter} style="width:100%" enabled="{my_dials.useStress}"/>
        <TextField type="text" label="Physical stress track title" enabled={!my_dials.useSingleStressTrack && my_dials.useStress} bind:value={my_dials.physicalStressTitle} style="width:100%"/>
        <TextField type="text" label="Physical stress track subtitle" enabled={!my_dials.useSingleStressTrack && my_dials.useStress} bind:value={my_dials.physicalStressSubtitle} style="width:100%"/>
        <TextField type="text" label="Mental stress title" enabled={!my_dials.useSingleStressTrack && my_dials.useStress} bind:value={my_dials.mentalStressTitle} style="width:100%"/>
        <TextField type="text" label="Mental stress track subtitle" enabled={!my_dials.useSingleStressTrack && my_dials.useStress} bind:value={my_dials.mentalStressSubtitle} style="width:100%"/>
        <TextField type="text" label="Single stress track title" enabled={my_dials.useSingleStressTrack && my_dials.useStress} bind:value={my_dials.singleStressTitle} style="width:100%"/>
        <TextField type="text" label="Single stress track subtitle" enabled={my_dials.useSingleStressTrack && my_dials.useStress} bind:value={my_dials.singleStressSubtitle} style="width:100%"/>

        <h3>Conditions and Consequences</h3>
        <Switch title="Use conditions" bind:value={my_dials.useConditions}/>
        <Switch title="Use consequences" bind:value={my_dials.useConsequences}/>
        <Switch title="Hide fourth consequence" bind:value={my_dials.hideFourthConsequence} enabled={my_dials.useConsequences}/>

    </div>
    <mwc-button
            slot="primaryAction"
            dialogAction="ok">
        Save
    </mwc-button>
</mwc-dialog>
