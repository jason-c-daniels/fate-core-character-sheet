<script>
    import GlobalCss from "../GlobalCss";
    /*-- Add support for Web Components to older browsers. --*/
    import "@webcomponents/webcomponentsjs/webcomponents-loader.js";
    import '@material/mwc-top-app-bar-fixed';
    import '@material/mwc-icon-button';
    import '@material/mwc-drawer';
    import '@material/mwc-tab';
    import '@material/mwc-tab-bar';
    import '@material/mwc-icon';
    import '@material/mwc-snackbar';
    import downloadToClient from 'file-saver';
    import Dropzone from "svelte-file-dropzone";
    import Worksheet from "../components/Worksheet";
    import getNewWorksheet, {validateWorksheet} from "../model/worksheet";
    import LocalStorageRepository from '../repository/localStorageRepository';
    import {applicationName, fileExtension, worksheetPrefix, worksheetSuffix} from '../applicationSettings'

    import About from '../components/About/About.md';

    let activeIndex;

    let snackBarElement, tabBarElement;

    let disabled = "";
    let showLoadPane = false;
    let firstCall = true;
    let saveAlsoDownloads = true;
    let ls;

    let snackBarText = 'Replace this with a real message';
    let app_name="",file_ext="", prefix="", suffix="";
    const unsubscribe_name = applicationName.subscribe(value => {
        app_name = value;
    });
    const unsubscribe_ext= fileExtension.subscribe(value => {
        file_ext = value;
    });
    const unsubscribe_prefix= worksheetPrefix.subscribe(value => {
        prefix = value;
        ls=new LocalStorageRepository(prefix);
    });
    const unsubscribe_suffix= worksheetSuffix.subscribe(value => {
        suffix = value;
    });

    let {tempWorksheet, isValid} = doInitialWorksheetLoad();

    let worksheet = isValid ? tempWorksheet : getNewWorksheet();

    scheduleAutosave();

    function doInitialWorksheetLoad() {
        let tempWorksheet;
        let isValid = false;
        try {

            tempWorksheet = ls.load(suffix,getNewWorksheet);
            isValid = validateWorksheet(tempWorksheet);
        } catch (err){
            console.log(err);
            isValid = false;
        }
        return {tempWorksheet, isValid};
    }

    function handleSaveWorksheetClicked() {
        let blob = new Blob([JSON.stringify(worksheet, null, 2)], {type: 'text/plain;charset=utf-8'});
        ls.save(suffix,worksheet);
        showSnackBar('Worksheet saved to local storage.');
        if (saveAlsoDownloads) {
            setTimeout(() => {
                let fileName = `${worksheet.name}.${file_ext}`;
                downloadToClient(blob, fileName);
                showSnackBar(`Sending file: ${fileName}. Check your downloads folder.`);
            }, 2000);
        }
    }

    function handleLoadWorksheetClicked() {
        showLoadPane = true;
        disabled = 'disabled';
    }

    function handleNewWorksheetClicked() {
        gameWorksheet = getNewWorksheet();
        activeIndex = 0;
        showSnackBar('Created a new worksheet.');
    }

    function handleFilesSelect(e) {
        let files = e.detail.acceptedFiles;
        const reader = new FileReader();
        reader.onload = function (e) {
            // e.target.result should contain the text
            try {
                let text = e.target.result;
                let worksheet = JSON.parse(text);
                if (validateWorksheet(worksheet)) {
                    setTimeout(() => showSnackBar("Worksheet loaded."), 250);
                    gameWorksheet = worksheet;
                    activeIndex = 0;
                }
            } catch (err) {
                console.log(err);
                setTimeout(() => showSnackBar("Invalid data format encountered. Nothing loaded."), 250);
            } finally {
                hideLoadPane();
            }
        };
        reader.readAsText(files[0]);
    }

    function hideLoadPane() {
        showLoadPane = false;
        disabled = "";
    }

    function handlePrintClicked() {
        setTimeout(() => window.print(), 500);
    }

    function handleTabActivated(e) {
        activeIndex = tabBarElement.activeIndex;
    }

    function scheduleAutosave() {
        if (!firstCall) {
            return;
        }
        firstCall = false;
        setInterval(() => ls.save(suffix,worksheet), 5 * 1000);
    }

    function showSnackBar(text) {
        snackBarText = text;
        snackBarElement.show();
    }

</script>
<style>
    @import "App.css";
    @import "../components/styles/Page.css";
</style>

<svelte:head>
    <title>{app_name}</title>

    <!-- Your application must load the Roboto and Material Icons fonts. -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
</svelte:head>

<GlobalCss/>

<main class="noprint">
    <mwc-top-app-bar-fixed>
        <div slot="title"><span>{app_name}</span></div>
        <mwc-tab-bar slot="actionItems" style="display: inline-block" bind:this={tabBarElement}
                     activeIndex={activeIndex} on:MDCTabBar:activated={handleTabActivated}>
            <mwc-tab label="Worksheet"></mwc-tab>
            <mwc-tab label="About"></mwc-tab>
        </mwc-tab-bar>
        <mwc-icon-button icon="note_add" slot="actionItems" on:click={handleNewWorksheetClicked}
                         {disabled}></mwc-icon-button>
        {#if showLoadPane}
            <mwc-icon-button icon="cancel" slot="actionItems" on:click={hideLoadPane}></mwc-icon-button>
        {:else}
            <mwc-icon-button icon="folder_open" slot="actionItems"
                             on:click={handleLoadWorksheetClicked}></mwc-icon-button>
        {/if}
        <mwc-icon-button icon="save" slot="actionItems" on:click={handleSaveWorksheetClicked}
                         {disabled}></mwc-icon-button>
        <mwc-icon-button icon="print" slot="actionItems" on:click={handlePrintClicked} {disabled}></mwc-icon-button>
        {#if (showLoadPane)}
            <div id="content" class="file-loader" style="height: 100%">
                <Dropzone on:drop={handleFilesSelect}
                          containerStyles="height:92vh;color:#333333; background-color:#EFEFEF;"/>
            </div>
        {:else}
            <div id="content" style="padding:0">
                {#if activeIndex === 0}
                    <Worksheet bind:worksheet={worksheet}/>
                {:else if activeIndex === 1}
                    <About />
                {:else}
                    <div class="page">
                        <h3>TBD/Coming Soon</h3>
                    </div>
                {/if}
            </div>
        {/if}
        <mwc-snackbar labelText="{snackBarText}" bind:this={snackBarElement}>
            <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
        </mwc-snackbar>
    </mwc-top-app-bar-fixed>
</main>

<main class="printme">
    <!-- This section is intended for print rendering only. You may suppress the rendering of this entire section
         to HTML if you like, but you'll need to ensure it's been rendered right before the print dialog is invoked.
         (i.e. print() )
     -->
    <Worksheet bind:gameWorksheet={worksheet}/>

</main>
