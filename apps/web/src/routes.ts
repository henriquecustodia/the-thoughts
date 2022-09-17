import { Routes } from "@angular/router";
import { getRandomThought } from "@libs/thoughts";
import { HomeComponent } from "./app/pages/home/home.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            thought: () => getRandomThought()
        }
    }
]