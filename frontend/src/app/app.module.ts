/************************************************************************
 *                                                                      *
 * EDIT THIS FILE ONLY IF NG-RAP NEEDS IT AS AN ENTRY POINT             *
 * CREATE YOUR OWN ENTRY MODULE, OR ADAPT THE "GUIDE MODULE"            *
 * AS YOUR STARTING POINT                                               *
 *                                                                      *
 * KEEP THE APP MODULE CLEAN                                            *
 *                                                                      *
 * NOTE: Your entry module does not necessarily have to be lazy loaded  *
 *                                                                      *
 ************************************************************************/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { GuideModule } from './guide/guide.module';
import { NgRapCommonsModule } from '@r-software/ng-rap-commons';
import { HttpClientModule } from '@angular/common/http';
import { MetaDataService } from 'meta-data/meta-data.service';
import { NgRapStorageModule } from '@r-software/ng-rap-storage';
import { ConfigurationMode, NgRapConfigurationModule } from '@r-software/ng-rap-configuration';
import { NgRapLoggingModule } from '@r-software/ng-rap-logging';
import { NgRapCloudModule } from '@r-software/ng-rap-cloud';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    GuideModule,
    AppRoutingModule,
    NgRapCommonsModule,
    HttpClientModule,
    NgRapStorageModule.forRoot(),
    NgRapConfigurationModule.forRoot({configurationMode: ConfigurationMode.LOCAL_CONFIGURATION}),
    NgRapLoggingModule.forRoot(),
    NgRapCloudModule.forRoot()
  ],
  providers: [MetaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
