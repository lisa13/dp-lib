import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'dp-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
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
