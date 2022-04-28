import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  processName = 'Sign in'
  board!:HTMLElement | null
  username = ''
  password = ''
  confirm = ''
  constructor() {
  }
  
  ngOnInit(): void {
    this.board = document.getElementById('auth')
  }
  signIn(){
    this.processName = 'Sign in'
    this.show()
  }
  signUp(){
    this.processName = 'Sign up'
    this.show()
  }
  send(){
    console.log(this.username,this.password,this.confirm);
  }
  show(){
    this.board?.classList.remove('no')
  }
  x(){
    this.board?.classList.add('no')
  }
}
