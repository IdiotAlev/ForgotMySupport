import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IntroGuard implements CanActivate {
  canActivate() {
    return true;
  }
}
