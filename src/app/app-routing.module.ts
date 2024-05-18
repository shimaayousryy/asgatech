import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/product/product.module').then(m => m.ProductModule) },
                    { path: 'product', loadChildren: () => import('./demo/components/product/product.module').then(m => m.ProductModule) },
                    { path: 'order', loadChildren: () => import('./demo/components/order/order.module').then(m => m.OrderModule) },
                    { path: 'user', loadChildren: () => import('./demo/components/user/user.module').then(m => m.UserModule) },
                    
                  
                
                ]
            },

            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
