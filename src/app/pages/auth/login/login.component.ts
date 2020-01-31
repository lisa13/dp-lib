import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public name: FormControl;
    public password: FormControl;

    constructor(private router: Router,
        private fb: FormBuilder) {

    }

    ngOnInit() {
        this.createFormControls();
    }

    public login(): void {
        this.router.navigate(['/home/my-documents']);
    }

    private createFormControls(): void {
        this.name = new FormControl('', [Validators.required]);
        this.password = new FormControl('', [Validators.required]);
        this.createFormGroup();

    }

    private createFormGroup(): void {
        this.loginForm = this.fb.group({
            name: this.name,
            password: this.password
        });

    }
}
