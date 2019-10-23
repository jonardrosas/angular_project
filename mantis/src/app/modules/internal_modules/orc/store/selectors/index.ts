import { createFeatureSelector } from '@ngrx/store';
import { OrcModuleState } from './../state';

export * from './mantisrecord.selectors';
export * from './orcrecord.selectors';
export * from './mantisobject.selector';

// selectors
export const getOrcModuleStateSelector = createFeatureSelector<OrcModuleState>('orc');
