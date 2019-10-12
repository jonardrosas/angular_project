export class NgxDtTableOptionsModel {
    headerHeight: number = 50;
    externalPaging: boolean = false;
    externalSorting: boolean = false;
    footerHeight: number = 50;
    loadingIndicator: boolean = false;
    limit: number;
    offset: number;
    count: number;
    rowHeight = 40;
    ngxClass;
}

export class TastypiePage{
    //limit: number;
    offset: number;
    total_count: number;
    page: number;
}

export class TastypieLimit{
    limit: number;
}


export class TastypieSort{
    order_by: string;
    ordering: string;

    constructor(prop?: string){
        if(prop){
            this.order_by = prop;
            this.ordering = prop;
        }
    }

    getSort(event): void{
        if(event.sorts.length > 0){
            if(event.sorts[0].dir == 'desc'){
                this.order_by = "-" + event.sorts[0].prop
                this.ordering = "-" + event.sorts[0].prop
            }else{
                this.order_by = event.sorts[0].prop
                this.ordering = event.sorts[0].prop
            }

        }
    }
}

export class NgxDtTablePage {
    size: number = 20;
    totalElements;
    totalPages: number = 0;
    pageNumber: number = 1;
}

