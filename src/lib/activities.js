import { writable } from 'svelte/store';

export const cpuActivity = writable(false);
export const diskActivity = writable(false);
export const cpuPercentage = writable(0);
