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

    const username = this.inputUsername.nativeElement.value
    if (username !== '') {
      localStorage.setItem('username', username)
      this.router.navigate(['timeline']);
    }
  }

}
