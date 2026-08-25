import type Blog from "src/models/Blog";
import { config } from "../../config";
import DOMPurify from "dompurify";

export function getBlogImageUrl(miniatura?: string | null): string {
    if (!miniatura) return "/images/default-blog.webp";
    return miniatura
        .startsWith("http") ? miniatura : `${config.apiUrl}${miniatura}`;
}

export function matchesBlogSearch(blog: Blog, term: string): boolean {
    return !!(
        blog.titulo.toLowerCase().includes(term) ||
        blog.nombre_producto?.toLowerCase().includes(term) ||
        blog.subtitulo1.toLowerCase().includes(term)
    );
}

export function sanitizaHtml(html: string | null | undefined): string {
    if (!html) return "";
    return DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ["p", "strong", "em", "u", "a", "ul", "ol", "li", "br", "span", "div"],
        ALLOWED_ATTR: ["href", "target", "rel", "title"],
    });
}