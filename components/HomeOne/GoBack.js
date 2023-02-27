import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" style={{"textAlign":"right", "position":"absolute","right":"4vh", "color":"white"}} onClick={() => router.back()}>
      Click here to go back
    </button>
  )
}