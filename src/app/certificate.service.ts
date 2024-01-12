// certificate.service.ts
import { Injectable } from '@angular/core';
import * as forge from 'node-forge';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  async generateCertificate(subjectName: string): Promise<string> {
    try {
      const pkcs10 = await this.createPKCS10(subjectName);

      return pkcs10;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  private async createPKCS10(subjectName: string): Promise<string> {
    const keys = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
    const certRequest = forge.pki.createCertificationRequest();
    certRequest.publicKey = keys.publicKey;
    certRequest.setSubject([{ name: 'commonName', value: subjectName }]);

    
    const privateKey = keys.privateKey;
    certRequest.sign(privateKey, forge.md.sha256.create()); 
    const pem = forge.pki.certificationRequestToPem(certRequest);

    return pem;
  }
}

