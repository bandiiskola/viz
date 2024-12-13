import { Routes } from '@angular/router';
import { HibaBevitelComponent } from './hiba-bevitel/hiba-bevitel.component';
import { HibaListaComponent } from './hiba-lista/hiba-lista.component';

export const routes: Routes = [
    {path:'feltolt', component:HibaBevitelComponent},
    {path:'modosit/:id', component:HibaBevitelComponent},
    {path:'lista', component:HibaListaComponent}
];
