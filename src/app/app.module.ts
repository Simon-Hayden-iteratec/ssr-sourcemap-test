import { isPlatformServer } from '@angular/common';
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(@Inject(PLATFORM_ID) pId: string) {
    if (isPlatformServer(pId)) {
      throw new Error('BOOM');
    }
  }
}
