import { CheckNavigationBase } from './base';
import * as _ENUMS from './../enums/main';


export class OrcCheckNavigation extends CheckNavigationBase {

    public mainTabs = [
         _ENUMS.TAB1,
    ];  

   constructor() {
        super();    
    }

}

export class OrcPtrfCheckNavigation extends OrcCheckNavigation {}
export class OrcPtrfF1CheckNavigation extends OrcCheckNavigation {}
export class OrcPtrfF7CheckNavigation extends OrcCheckNavigation {}
export class OrcPtrfF8CheckNavigation extends OrcCheckNavigation {}


export class OrcFtrfCheckNavigation extends OrcCheckNavigation {}
export class OrcFtrfF1CheckNavigation extends OrcCheckNavigation {}

export class OrcFtrfF7CheckNavigation extends OrcCheckNavigation {
    public mainTabs = [
         _ENUMS.TAB1,
         _ENUMS.TAB2
    ];  
}

export class OrcFtrfF8CheckNavigation extends OrcCheckNavigation {}
