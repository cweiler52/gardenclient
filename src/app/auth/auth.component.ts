import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {DatabaseService} from '../services/database.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user = [];
  login: FormGroup;

  constructor(
      private fb: FormBuilder, 
      private dbService: DatabaseService,
      private route: ActivatedRoute,
      private router: Router,
      ) { }

  ngOnInit() {
    this.login = this.fb.group({
      email: new FormControl(),
      password: new FormControl(),
    })

  }

  onLogin() : void {
    this.dbService.login(this.email.value, this.password.value)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
            this.alertService.error(error);
        });
  }
}
