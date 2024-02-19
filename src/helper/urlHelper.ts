export function generateRandomShort(): string {
  const list = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let res = "";
  const rndLength = 7;
  for (let i = 0; i < rndLength; i++) {
    let rnd = Math.floor(Math.random() * list.length);
    res = res + list.charAt(rnd);
  }
  return res;
}

export function isValidUrl(url: string): boolean {
  const prefixes = ['http', 'https', 'ftp'];
  let isValidUrl = false;
  
  const startsWithPrefix = prefixes.some(prefix => url.startsWith(`${prefix}://`));
  if (!startsWithPrefix) return false;

  try {
    new URL(url);
    isValidUrl = true;
  } catch (err) {
    isValidUrl = false;
  }
  return isValidUrl;
}
