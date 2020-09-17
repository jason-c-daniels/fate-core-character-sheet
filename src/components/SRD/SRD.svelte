<style>
    @import "SRD.css";
</style>

<script>
    import '@material/mwc-icon-button'

    import TOC from './TOC.md'
    import Section1 from './chapters/1.md'
    import Section2 from './chapters/2.md'
    import Section2_1 from './chapters/2-1.md'
    import Section3 from './chapters/3.md'
    import Section4 from './chapters/4.md'

    let showToc = window.innerWidth > 15.25 * 6.022 * 16; //(inches*em/inch*px/em)

    if (window.location.hash) {
        setTimeout(() => {
            document.getElementById(window.location.hash.replace("#", "")).scrollIntoView();
        }, 250);
    }
</script>


    <div class="toc">

        {#if showToc}
            <mwc-icon-button style="float:right" icon="chevron_left" on:click={()=> showToc=false} ></mwc-icon-button>
        {:else}
            <mwc-icon-button icon="chevron_right" on:click={()=> showToc=true} ></mwc-icon-button>
        {/if}

        {#if showToc}
            <h2>Table of Contents</h2>
                <TOC />
        {/if}
    </div>
<div class="this-page">
    <Section1 />
    <Section2 />
    <Section2_1 />
    <Section3 />
    <Section4 />
</div>



