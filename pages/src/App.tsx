import yuriIcon from '/images/common/apple-touch-icon.png'
import './App.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "@/components/ui/link"

function App() {

  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      <Card>
      <h1 className="text-2xl text-center">yuri</h1>
        <div className="flex justify-center">
          <Avatar className="w-18 h-18">
            <AvatarImage src={yuriIcon} alt="yuri" />
            <AvatarFallback>yuri</AvatarFallback>
          </Avatar>
        </div>
        <CardContent>
          <p>
            未経験で37歳から2年間バックエンドエンジニア<br className="sm:hidden" />(退職済み) <br />
            不登校、ひきこもり、長期無職、対人恐怖（社交不安障害）、短期離職の繰り返しから、自分の夢を叶える方法を模索する人。
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <Link href="https://qiita.com/yuri_t">
              Qiita
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Link href="https://qiita.com/yuri_t/items/2b7b29b58ef981198fd8">
            元ひきこもり37歳業務未経験女性がバックエンドエンジニアとして地方で採用されるまで
          </Link>
              など
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <Link href="https://note.com/yuri_bbr">
              yuri | note
            </Link>
          </CardTitle>
          <CardDescription>
            37歳でWebエンジニアになる前・なった後の記録
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="https://note.com/yuri_bbr/n/n805a24e68d8c">
            私のプログラミング歴 - 34歳で学習開始から37歳で就職するまで
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <Link href="https://note.com/omuraisu_kk">
              オムライス | note
            </Link>
          </CardTitle>
          <CardDescription>
            38歳でマッチングアプリ婚した記録。結婚前・結婚後
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="https://note.com/omuraisu_kk/n/nac1f7bdf2f3b">
            彼氏いない歴17年の38歳女性が婚活して結婚するまでに読んだコミックエッセイ12選｜オムライス
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <Link href="https://x.com/lstliauou">
              yuri（@lstliauou） / X
            </Link>
          </CardTitle>
          <CardDescription>
            ポストはリプライ含めてこまめに削除しています。
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export default App
