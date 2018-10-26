import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: any;
  constructor() { }
  getIpAndPort() {
    return this.config.api.protocol + '//' + this.config.api.host + ':' + this.config.api.port + '/';
  }

}
