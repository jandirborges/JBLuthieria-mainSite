import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? "production";

/**
 * Indica se o Sanity está configurado (env vars presentes).
 * Quando false, o site usa dados mock locais — útil em desenvolvimento
 * antes da configuração do CMS.
 */
export const isSanityConfigured = Boolean(projectId);

let _client: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (!projectId) return null;
  if (!_client) {
    _client = createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    });
  }
  return _client;
}

const builder = projectId ? imageUrlBuilder({ projectId, dataset }) : null;

/**
 * Constrói URL otimizada para uma imagem do Sanity (com hotspot/crop respeitados).
 * Retorna null se o Sanity não estiver configurado.
 */
export function urlFor(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}
