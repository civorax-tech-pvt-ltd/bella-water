/**
 * Video files are hosted on Vercel Blob rather than shipped in `public/`.
 * They're large (multi-MB) binary assets that don't belong in a static
 * export's deploy bundle or in git — this is the single source of truth
 * for their URLs. Poster/thumbnail images stay local (small, no bandwidth
 * concern) — see src/data/manufacturing-process.ts.
 */
const BLOB_BASE = "https://pxotfi53ej5gbl9d.public.blob.vercel-storage.com";

export const videoUrls = {
  bellaCinematic: `${BLOB_BASE}/bella-cinematic.mp4`,
  bellaAdv1: `${BLOB_BASE}/bella-adv1.mp4`,
  bottleBlowingPackaging: `${BLOB_BASE}/bottle-blowing-packaging.mp4`,
  capMolding: `${BLOB_BASE}/cap-molding.mp4`,
  petPreformManufacturing: `${BLOB_BASE}/pet-preform-manufacturing.mp4`,
  waterTreatment: `${BLOB_BASE}/water-treatment.mp4`,
} as const;
