import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
    login() {
      
      this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
    logout() {
      this.afAuth.signOut()
    }
}

