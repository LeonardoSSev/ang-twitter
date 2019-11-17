import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('username', {static: false}) inputUsername: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  performLoginAction(event) {
    event.preventDefault();

    if (this.inputUsername.nativeElement.value !== '') {
      this.router.navigate(['timeline']);
    }
  }

}
