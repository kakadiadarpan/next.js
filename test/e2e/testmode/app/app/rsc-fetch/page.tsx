// We want to trace this fetch in runtime
export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  return {}
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { status } = await searchParams

  if (status === 'error') {
    throw new Error('Error')
  }

  const text = await (
    await fetch('https://next-data-api-endpoint.vercel.app/api/random')
  ).text()
  return <pre>{text}</pre>
}
