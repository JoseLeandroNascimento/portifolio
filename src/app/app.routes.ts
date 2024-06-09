import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "", loadChildren: () => import("./pages/home-page/home.module").then(m => m.HomeModule)
    }
];
