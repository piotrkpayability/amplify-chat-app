import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    formGroup: FormGroup;
    constructor(private readonly fb: FormBuilder) {}

    ngOnInit() {
        this.formGroup = this.fb.group({
            username: [''],
            password: [''],
        });
    }
    onSubmit() {}
}
