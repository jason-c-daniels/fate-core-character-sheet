import {writable} from 'svelte/store';

//TODO:
export const applicationName = writable("[Your Application Name Here]" );

//TODO:
export const worksheetName = writable("[Your Worksheet Name Here]" );

// TODO: pick a meaningful file extension for 'downloaded' files.
export const fileExtension = writable("fcwks");

//TODO:
export const worksheetSuffix = writable("worksheet-suffix");

//TODO: pick a suitable prefix, by convention it should end in a dash "-"
export const worksheetPrefix = writable("fate-core-worksheet-app-prefix-");
