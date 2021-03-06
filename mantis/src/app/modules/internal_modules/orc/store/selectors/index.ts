import { createFeatureSelector } from '@ngrx/store';
import { OrcModuleState } from './../state';

export * from './mantisrecord.selectors';
export * from './mantisresolution.selector';
export * from './mantisstage.selector';
export * from './orcrecord.selectors';
export * from './mantisobject.selector';
export * from './orcrecordviolation.selector';

// selectors
export const getOrcModuleStateSelector = createFeatureSelector<OrcModuleState>('orc');
