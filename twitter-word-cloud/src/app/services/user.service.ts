import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
