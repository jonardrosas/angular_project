import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}


}