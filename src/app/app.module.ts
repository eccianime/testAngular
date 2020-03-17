import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BaseAppComponent } from './baseApp.component';

import { InputDataComponent } from './inputData.component';
import { TableDataComponent } from './tableData.component';

import { ListCityComponent } from './listCity.component';
import { CityDetailComponent } from './cityDetail.component';
import { LowerSectionComponent } from './lowerSection.component';

const routes = [
	{ path: "index", component: BaseAppComponent},
	{ path: "city/:id", component: CityDetailComponent},
	{ path: "**", redirectTo: "/index"},
];

@NgModule({
	declarations: [AppComponent,BaseAppComponent,InputDataComponent,TableDataComponent,ListCityComponent,CityDetailComponent,LowerSectionComponent],
	imports: [BrowserModule,HttpClientModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}