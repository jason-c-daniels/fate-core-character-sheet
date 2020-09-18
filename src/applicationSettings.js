import {writable} from 'svelte/store';
import getNewDials from "./model/dials";
export const applicationName = writable("Fate Core Character Sheet" );
export const sheetName = writable("Character Sheet" );
export const fileExtension = writable("fc3s-char");
export const storageSuffix = writable("character-data");
export const storagePrefix = writable("fate-core-character-sheet-");
export const dials = writable(getNewDials());