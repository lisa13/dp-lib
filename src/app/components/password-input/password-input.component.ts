import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'dp-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {
    @Input() inputControl: FormControl;
    @Input() placeholder: string;
    @Input() required: boolean;
    @Input() disabled: boolean;
    @Input() readonly: boolean;
    constructor() {
    }

    ngOnInit() {
    }

}
