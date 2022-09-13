import { inject } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "./app/pages/home/home.component";
import { QuotesService } from "./app/services/quotes.service";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            quote: () => inject(QuotesService).getRamdon()
        }
    }
]