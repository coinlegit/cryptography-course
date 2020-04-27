import * as aesjs from 'aes-js';

const key = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const text: string = '12345678901234561234567890123456';
console.log(`Text   : ${text}`);
console.log(`Cipher : ${aesEcbEncrypt(key, text)}`);
console.log(`Key    : [${key.toString()}]`);
console.log(aesEcbDecrypt(key, aesEcbEncrypt(key, text)) === text);

function aesEcbEncrypt(key: number[], text: string): string {
  const textBytes: Uint8Array = aesjs.utils.utf8.toBytes(text);

  const aesEcb: aesjs.ModeOfOperation.ModeOfOperationECB = new aesjs.ModeOfOperation.ecb(key);
  const encryptedBytes: Uint8Array = aesEcb.encrypt(textBytes);

  return aesjs.utils.hex.fromBytes(encryptedBytes);
}

function aesEcbDecrypt(key: number[], cipher: string): string {
  const textBytes: Uint8Array = aesjs.utils.hex.toBytes(cipher);

  const aesEcb: aesjs.ModeOfOperation.ModeOfOperationECB = new aesjs.ModeOfOperation.ecb(key);
  const decryptedBytes: Uint8Array = aesEcb.decrypt(textBytes);

  return aesjs.utils.utf8.fromBytes(decryptedBytes);
}
