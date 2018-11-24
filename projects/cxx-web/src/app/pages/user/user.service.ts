import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';
import { tap } from 'rxjs/operators';
import { Route, Router } from '@angular/router';
@Injectable()
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  login(name: any, psw: any) {
    const req = {
      name: name,
      psw: this.passwordEncryption(name, psw)
    };
    return this.http.post('user/login', req).pipe(tap((rsp: any) => {
      if (!rsp) {
        this.router.navigate(['./ph']);
      }
    }));
  }

  passwordEncryption(userName: string, password: string, encryptionFactor: string = ''): string {
    // 密码：for_$n(@RenSheng)_$n+="die"
    // 解释：人生自古谁无死
    return Md5.hashStr(userName + 'for_$n(@RenSheng)_$n+="die"' + password + encryptionFactor).toString();
  }

}
