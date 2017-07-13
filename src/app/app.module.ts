import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { Complab12Component } from './complab12/complab12.component';
import { CompcounterComponent } from './compcounter.component';
import { Complab13Component } from './complab13/complab13.component';
import { DirectiveUpperLiDirective } from './directive-upper-li.directive';
import { MyvisibilityDirective } from './complab13/myvisibility.directive';
import { MycolorDirective } from './complab13/mycolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    Complab12Component,
    CompcounterComponent,
    Complab13Component,
    DirectiveUpperLiDirective,
    MyvisibilityDirective,
    MycolorDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
