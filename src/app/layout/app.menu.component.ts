import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Product', icon: 'pi pi-fw pi-home', routerLink: ['/product'] },
                    { label: 'Order', icon: 'pi pi-fw pi-home', routerLink: ['/order'] },
                    { label: 'User', icon: 'pi pi-user', routerLink: ['/user'] }


                ]
            },
        ]
    }
}
