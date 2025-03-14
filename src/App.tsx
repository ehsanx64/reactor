import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { MailOpen } from 'lucide-react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>
        <MailOpen /> Login with Email
      </Button>
    </div>
  )
}

export default App
