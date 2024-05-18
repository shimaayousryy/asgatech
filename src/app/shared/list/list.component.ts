import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { ListColumn } from '../models/listColumn';
import { PageResult } from '../models/pageResult';

@Component({
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.scss'],
    selector: 'app-list',
    // providers: [DynamicDialogRef],
})

export class ListComponent implements OnInit {

    //**events
    @Output() getPageEvent = new EventEmitter<any>();
    @Output() addNewEvent = new EventEmitter<any>();
    @Output() editEvent = new EventEmitter<any>();
    @Output() viewEvent = new EventEmitter<any>();
    @Output() deleteEvent = new EventEmitter<any>();
    @Output() onFilterEvent = new EventEmitter<any>();
    @Output() onFilterClearEvent = new EventEmitter<any>();

    //**

    //**inputs
    @Input() listColumns: ListColumn[];
    @Input() title: string;
    @Input() pageResult: PageResult;
    @Input() parentPermission: string;
    @Input() loading: boolean;
    
    @Input() buttonTitle:string ;
    @Input() hideUpdate = "true";
    @Input() hideDelete = "true";
    @Input() hideCreate = true;
    @Input() withAddNew = false;
    @Input() withAction = true;
    @Input() paginator: boolean = true;
    @Input() hideActionWithReadOnly: boolean = false;
    @Input() DeleteMessage: string = '';
    @Output() onChange = new EventEmitter();

    
    // static global flags for search
    public static isSearch: boolean = false;
    public static hiddenFilter: string = null;
    public static isCSClient: boolean = false;
    public static InsuredClients: boolean = null;
    items: MenuItem[];

    //**
    @Input() filterEntityElements: any;
    @Input() addationalMenuItems: any[] = [];

    //**flags
    entityDialog: boolean;
    deleteEntityDialog: boolean = false;
    submitted: boolean;
    createPermission: boolean;
    currSortField: string;
    currSortOrder: string;
    filterList: any = undefined
    isFilter: boolean = false
    
    //**
    @ViewChild('dt') table: Table;
    menuItems: MenuItem[];
    rowsPerPageOptions = [5, 10, 20, 30];
    currMenuRecord: any;
    currMenuRecordIndex: number;

    
    first = 0;

    rows = 10;
    constructor(
    ) {

    }

    ngOnInit() {
        this.menuItems = [];
       this.buttonTitle = 'Create New'
    
    }

    getIsSearch() {
        return ListComponent.isSearch;
    }


    getPage(event) {
        this.getPageEvent.emit();
    }

    pageChange(event) {
        this.onChange.emit(event);

        this.first = event.first;
        this.rows = event.rows;
    }
    addNew() {
        this.addNewEvent.emit();
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }


    edit() {
        this.editEvent.emit({ id: this.currMenuRecord.id });
    }

  
  

    delete() {
        this.deleteEntityDialog = false;
        this.deleteEvent.emit({ id: this.currMenuRecord.id, index: this.currMenuRecordIndex });
        this.refreshList()
    }

    onRecordChange(currentRecord: any, currentIndex: number) {
        
        this.currMenuRecord = currentRecord;
        this.currMenuRecordIndex = currentIndex;
        this.initializeMenu();
    }

    showDeleteDialog() {
        this.deleteEntityDialog = true;
    }

    initializeMenu() {
        
        this.menuItems = [
            {
                label:'View' , visible: true , icon: 'pi pi-eye', command: () => this.view(),
            },
            // {
            //     label:'Delete' , visible: this.withAction , icon: 'pi pi-fw pi-trash', command: () => this.showDeleteDialog(),
            // }
        ];
        console.log(this.currMenuRecord);
         
        this.addationalMenuItems?.forEach(element => {
            debugger
            if (element.visibleCommand != undefined) {
                if (element.visibleCommand()) this.menuItems.push(element);
            }
            else {
                this.menuItems.push(element);
            }
        });
    }

    refreshList() {

        this.getPage(this.table.createLazyLoadMetadata());
    }

   view(){

   }




}
