import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// components
import { HeaderComponent } from '../components';
import { SidePanelComponent } from '../components';
import { UserCredentialsComponent } from '../components';
import { MyDocumentsComponent } from '../pages/dashboard';
import { TeamDocumentsComponent } from '../pages/dashboard';

//material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        HeaderComponent,
        SidePanelComponent,
        UserCredentialsComponent,
        MyDocumentsComponent,
        TeamDocumentsComponent
    ],
    providers: [
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatSidenavModule,
        MatCardModule,
        FlexLayoutModule
    ],
    exports: [
        // modules
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatSidenavModule,
        MatCardModule,
        FlexLayoutModule,
        // components
        HeaderComponent,
        SidePanelComponent,
        UserCredentialsComponent,
        MyDocumentsComponent,
        TeamDocumentsComponent
    ]
})
export class SharedModule {
}
