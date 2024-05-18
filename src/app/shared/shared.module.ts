import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { GalleriaModule } from 'primeng/galleria';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ListComponent } from './list/list.component';
import { HideColumn } from './pipe/hideColumn';

@NgModule({
  declarations: [
    ListComponent,
    HideColumn,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    HttpClientModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputMaskModule,
    PasswordModule,
    SidebarModule,
    PanelMenuModule,
    TableModule,
    // IconFieldModule,
    // InputIconModule,
    DropdownModule,
    CommonModule,
    CalendarModule,
    ToggleButtonModule,
    SelectButtonModule,
    InputNumberModule,
    GalleriaModule,
    MenuModule,
    OverlayPanelModule,
    CarouselModule,
    DialogModule

],
exports: [
    ListComponent,
    HideColumn,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    HttpClientModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputMaskModule,
    PasswordModule,
    SidebarModule,
    PanelMenuModule,
    TableModule,
    // IconFieldModule,
    // InputIconModule,
    DropdownModule,
    CalendarModule,
    CommonModule,
    ToggleButtonModule,
    SelectButtonModule,
    InputNumberModule,
    GalleriaModule,
    MenuModule,
    OverlayPanelModule,
    CarouselModule,
    DialogModule,
    
    

],
providers: [],
bootstrap: []
})
export class SharedModule { }
