import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonComponent} from './components';
import { TextInputComponent } from './components/text-input/text-input.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { MenuListHeadingComponent } from './components/menu-list-heading/menu-list-heading.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        TextInputComponent,
        PasswordInputComponent,
        MenuListItemComponent,
        MenuListHeadingComponent,
        ListHeaderComponent,
        ListItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    providers: [],
    exports: [
        ButtonComponent,
        TextInputComponent,
        PasswordInputComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
