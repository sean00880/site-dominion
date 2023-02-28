import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Page() {
  const router = useRouter()

  return (
    <Link href="#quote">
    <button type="button" className="pickService" style={{"fontFamily":"Smooch Sans"}} onClick={() => router.back()}>
      Like this service? Get started.
    </button>
    </Link>
  )
}