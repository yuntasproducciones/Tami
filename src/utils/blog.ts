import type Blog from "src/models/Blog";
import { config } from "../../config";

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