export function cn(...values:(string|false|null|undefined)[]){return values.filter(Boolean).join(' ')}
export function absoluteUrl(path:string){return `${process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000'}${path}`}
