import { atomWithStorage } from 'jotai/utils'
import { DataAbout } from '../type';
export const atoms = atomWithStorage<string[]>('interest', []);
export const atomsAbout = atomWithStorage<DataAbout[]>('about', []);