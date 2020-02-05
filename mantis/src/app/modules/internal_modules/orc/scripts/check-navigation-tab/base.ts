import * as _ENUMS from './../enums/main';


export class CheckNavigationBase {

    public mainTabs = [
        { id: _ENUMS.TAB1.id, title: 'All Checks'},
    ];       

    public defaultSubTab = [
        _ENUMS.ALL,
        _ENUMS.CLOSED,
        _ENUMS.OPEN
    ]    

}