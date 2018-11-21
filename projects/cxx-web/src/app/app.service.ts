import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  defaultUrl: string;
  constructor(private http: HttpClient) {
  }

}
