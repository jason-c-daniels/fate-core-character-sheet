import {writable} from 'svelte/store';

//TODO:
export const applicationName = writable("Fate Core Character Sheet" );

//TODO:
export const sheetName = writable("Character Sheet" );

// TODO: pick a meaningful file extension for 'downloaded' files.
export const fileExtension = writable("fcchar");

//TODO:
export const storageSuffix = writable("character-data");

//TODO: pick a suitable prefix, by convention it should end in a dash "-"
export const storagePrefix = writable("fate-core-character-sheet-");
