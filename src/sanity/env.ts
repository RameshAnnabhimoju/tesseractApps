function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}

export const projectId = assertValue(
  import.meta.env.VITE_SANITY_PROJECT_ID,
  'Missing VITE_SANITY_PROJECT_ID in .env.local'
)

export const dataset = assertValue(
  import.meta.env.VITE_SANITY_DATASET,
  'Missing VITE_SANITY_DATASET in .env.local'
)

export const apiVersion = import.meta.env.VITE_SANITY_API_VERSION ?? '2024-01-01'
