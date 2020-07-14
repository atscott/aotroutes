import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {Page3Component} from "./page3/page3.component";


const page1Path = 'page1';
export enum Paths {
  PAGE_2 = 'page2'
}
const page2Path = 'page2';
const getPagePath = (pageNumber: number) => `page${pageNumber}`;


const routes: Routes = [
  {path: page1Path, component: Page1Component},
  {path: Paths.PAGE_2, component: Page2Component},
  {path: getPagePath(3), component: Page3Component},
  {path: '**', redirectTo: page1Path}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
