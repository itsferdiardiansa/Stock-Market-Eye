export const buildApiUrl = (
  version: 'v1' | 'v2',
  endpoint: string,
  params: Record<string, string | number | boolean>
): string => {
  const baseUrl = [version, endpoint].join('/')

  const queryString = new URLSearchParams(
    Object.entries(params).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        acc[key] = String(value)
      }

      return acc
    }, {} as Record<string, string>)
  ).toString()

  return queryString ? `/${baseUrl}?${queryString}` : baseUrl
}
