export function isValidEmail(value: string) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return emailRegex.test(value);
}

export function shimmer(w: number, h: number) {
  return `
  <svg
    width="${w}"
    height="${h}"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <linearGradient id="g">
        <stop stop-color="#F3F3F3" offset="20%" />
        <stop stop-color="#EBEBEC" offset="50%" />
        <stop stop-color="#F3F3F3" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#F3F3F3" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate
      xlink:href="#r"
      attributeName="x"
      from="-${w}"
      to="${w}"
      dur="1s"
      repeatCount="indefinite"
    />
  </svg>  
  `;
}

export function toBase64(str: string) {
  return typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
}
