import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule }   from '@angular/router';
import { MaterialModules } from './material-modules';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './service/http-client.service';
import { HelloComponent } from './hello/hello.component';

const routes:Routes = [
  { path: 'hello', component: HelloComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    // HttpClientService
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModules,
    FlexLayoutModule,
    // HttpClientService,
    RouterModule.forRoot(
      routes,
      { enableTracing: true}
    )
  ],
  providers: [
    // 自作のHttpサービス（DI)
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
