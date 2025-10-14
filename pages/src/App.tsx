import yuriIcon from '/images/common/apple-touch-icon.png'
import './App.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {

  return (
    <div className="grid gap-4">
      <Card className="text-center">
      <h1 className="text-2xl">yuri</h1>
        <div className="flex justify-center">
          <Avatar className="w-18 h-18">
            <AvatarImage src={yuriIcon} alt="yuri" />
            <AvatarFallback>yuri</AvatarFallback>
          </Avatar>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <a
              href="https://qiita.com/yuri_t"
              className="underline"
            >
              Qiita
            </a>
          </CardTitle>
        </CardHeader>
        <CardContent>
          test
        </CardContent>
      </Card>
    </div>
  )
}

export default App
