export class NgxDtTableOptionsModel {
    headerHeight: number = 30;
    externalPaging: boolean = true;
    externalSorting: boolean = true;
    footerHeight: number = 0;
    limit: number;
    offset: number;
    count: number;
    rowHeight: string = 'auto';
    class: string = 'material';
}

export class NgxDtTablePage {
    size: number = 0;
    totalElements: number = 0;
    totalPages: number = 0;
    pageNumber: number = 0;

}


export class PagedData<T> {
  data = new Array<T>();
  page = new NgxDtTablePage();

}