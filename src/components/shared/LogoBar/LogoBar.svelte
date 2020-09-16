<style>
    @import "LogoBar.css";
</style>

<script>
    import Logo from "./logo.svg"
    import {worksheetName} from '../../../applicationSettings'
    let worksheet_name="";
    const unsubscribe = worksheetName.subscribe(value => {
        worksheet_name = value;
    });
</script>
<div class="logo-bar">
<div class="logo">
    <Logo height="100%" width="100%"/>
</div>
<h2>{worksheet_name}</h2>
</div>