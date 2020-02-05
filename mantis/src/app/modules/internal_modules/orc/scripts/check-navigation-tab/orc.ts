import { CheckNavigationBase } from './base';
import * as _ENUMS from './../enums/main';


export class OrcCheckNavigation extends CheckNavigationBase {

    public mainTabs = [
        {id: _ENUMS.TAB1.id, title: 'All Checks'},
    ];  

}

export class OrcPtrfCheckNavigation extends OrcCheckNavigation {}
export class OrcPtrfF1CheckNavigation extends OrcCheckNavigation {}
export class OrcPtrfF7CheckNavigation extends OrcCheckNavigation {}
export class OrcPtrfF8CheckNavigation extends OrcCheckNavigation {}


export class OrcFtrfCheckNavigation extends OrcCheckNavigation {}
export class OrcFtrfF1CheckNavigation extends OrcCheckNavigation {}

export class OrcFtrfF7CheckNavigation extends OrcCheckNavigation {
    public mainTabs = [
        { id: _ENUMS.TAB1.id, title: 'All Checks'},
        { id: _ENUMS.TAB2.id, title: 'Assigned iST'},
        // { id: _ENUMS.TAB3.id, title: 'Assigned SOA'},
        // { id: _ENUMS.TAB4.id, title: 'Assigned fST'},
    ];  
}

export class OrcFtrfF8CheckNavigation extends OrcCheckNavigation {}
