import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { materialImports } from './material-imports';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityComponent } from './components/city/city.component';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const rootRoutes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'city/:id',
    component: CityComponent
  }
];

@NgModule({
  declarations: [AppComponent, CityComponent, MenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    materialImports,
    RouterModule.forRoot(rootRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
