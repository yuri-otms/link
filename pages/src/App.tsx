import yuriIcon from '/images/common/apple-touch-icon.png'
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
  const message: number = "Hello World!";
  console.log(message);

  const linkCards = [
    {
      cardTitle: 'Qiita',
      titleLink: 'https://qiita.com/yuri_t',
      description: '',
      links: [
        {
          linkTitle: '元ひきこもり37歳業務未経験女性がバックエンドエンジニアとして地方で採用されるまで',
          linkUrl: 'https://qiita.com/yuri_t/items/2b7b29b58ef981198fd8'
        }
      ],
    },
    {
      cardTitle: 'yuri | note',
      titleLink: 'https://note.com/yuri_bbr',
      description: '37歳でWebエンジニアになる前・なった後の記録',
      links: [
        {
          linkTitle: '私のプログラミング歴 - 34歳で学習開始から37歳で就職するまで',
          linkUrl: 'https://note.com/yuri_bbr/n/n805a24e68d8c'
        }
      ],
    },
    {
      cardTitle: 'サクッと作文　韓国語',
      titleLink: 'https://ko.sksk.fun/',
      description: '未経験就活時のポートフォリオ　韓国語を作文して学ぶWebアプリ(Python/Flask)',
      links: [
        {
          linkTitle: 'yuri-otms/sksk_ko (GitHub)',
          linkUrl: 'https://github.com/yuri-otms/sksk_ko'
        },
        {
          linkTitle: '【個人開発】韓国語の文法を復習するアプリ「サクッと作文　韓国語」のデモ版をリリースしました #Flask - Qiita',
          linkUrl: 'https://qiita.com/yuri_t/items/747a4369bc25c5561139'
        }
      ],
    },
    {
      cardTitle: 'オムライス | note',
      titleLink: 'https://note.com/omuraisu_kk',
      description: '38歳でマッチングアプリ婚した記録。結婚前・結婚後',
      links: [
        {
          linkTitle: '彼氏いない歴17年の38歳女性が婚活して結婚するまでに読んだコミックエッセイ12選｜オムライス',
          linkUrl: 'https://note.com/omuraisu_kk/n/nac1f7bdf2f3b'
        }
      ],
    },
    {
      cardTitle: 'yuri（@lstliauou） / X',
      titleLink: 'https://x.com/lstliauou',
      description: 'ポストはリプライ含めてこまめに削除しています。',
      links: [],
    },
  ];


  return (
    <div className="w-full max-w-lg mx-auto space-y-3 p-4">
      <Card className="gap-4">
      <h1 className="text-2xl text-center">yuri</h1>
        <div className="flex justify-center">
          <Avatar className="w-18 h-18">
            <AvatarImage src={yuriIcon} alt="yuri" />
            <AvatarFallback>yuri</AvatarFallback>
          </Avatar>
        </div>
        <CardContent>
          <p className="text-sm">
            未経験で37歳から2年間バックエンドエンジニア(退職済み) <br />
            不登校、ひきこもり、長期無職、対人恐怖（社交不安障害）、短期離職の繰り返しから、自分の夢を叶える方法を模索する人。
          </p>
        </CardContent>
      </Card>
      {
        linkCards.map(elem =>
          <Card>
            <CardHeader>
              <CardTitle>
                <Link href={elem.titleLink}>
                  {elem.cardTitle}
                </Link>
              </CardTitle>
              <CardDescription>
                {elem.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                {
                  elem.links.map(elem =>
                    <li>
                      <Link href={elem.linkUrl}>
                        {elem.linkTitle}
                      </Link>
                    </li>
                  )
                }
              </ul>
            </CardContent>
          </Card>
        )
      }
    </div>
  )
}

export default App
