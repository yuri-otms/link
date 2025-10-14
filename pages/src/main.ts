import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 class="text-red-500">yuri</h1>
        <dl>
            <dt><a class="text-cyan-500 underline" href="https://qiita.com/yuri_t">Qiita</a></dt>
            <dd><a class="text-cyan-500 underline" href="https://qiita.com/yuri_t/items/2b7b29b58ef981198fd8">元ひきこもり37歳業務未経験女性がバックエンドエンジニアとして地方で採用されるまで</a>など</dd>
            <dt><a class="text-cyan-500 underline" href="https://note.com/yuri_bbr">yuri | note</a></dt>
            <dd>37歳でWebエンジニアになる前・なった後の記録</dd>
            <dt><a class="text-cyan-500 underline" href="https://note.com/omuraisu_kk">オムライス | note</a></dt>
            <dd>38歳でマッチングアプリ婚した記録。結婚前・結婚後</dd>
        </dl>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
