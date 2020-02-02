import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'dp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public username: FormControl;
    public password: FormControl;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.username = new FormControl('', [Validators.required]);
        this.password = new FormControl('', [Validators.required]);
    }
}
