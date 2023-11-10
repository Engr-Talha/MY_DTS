import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  tokenFromUI: string = '0123456789123456';
  encrypted: any = '';
  responce: string = '';
  constructor() {
    // this.encryptUsingAES256();
  }
  encryptUsingAES256(request: any) {
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let encrypted = CryptoJS.AES.encrypt(JSON.stringify(request), _key, {
      keySize: 16,
      iv: _iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    this.encrypted = encrypted.toString();
    sessionStorage.setItem('token', JSON.stringify(this.encrypted));
  }

  decryptUsingAES256() {
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    const token = JSON.parse(localStorage.getItem('token') + '');

    return CryptoJS.AES.decrypt(token, _key, {
      keySize: 16,
      iv: _iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
  }
}
