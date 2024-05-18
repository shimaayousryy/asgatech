import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { ListColumn } from '../models/listColumn';
import { PageResult } from '../models/pageResult';

@Component({
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.scss'],
    selector: 'app-list',
})

export class ListComponent implements OnInit {

    //**events
    @Output() getPageEvent = new EventEmitter<any>();
    @Output() viewEvent = new EventEmitter<any>();
 
    //**

    //**inputs
    @Input() listColumns: ListColumn[];
    @Input() title: string;
    @Input() pageResult: PageResult;
    
   

    @Input() withAction = true;
    @Input() paginator: boolean = true;
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
  

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }


 
    onRecordChange(currentRecord: any, currentIndex: number) {
        this.currMenuRecord = currentRecord;
        this.currMenuRecordIndex = currentIndex;
        this.initializeMenu();
    }



    initializeMenu() {
        
        this.menuItems = [
            {
                label:'View' , visible: true , icon: 'pi pi-eye', command: () => this.view(),
            },
       
        ];
         
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
    this.viewEvent.emit({ currentRow: this.currMenuRecord });

   }




}
