
<p align="center">
  <a href="" rel="noopener">
 <img width=100px height=100px src="https://yt5s.com/icon/android-icon-192x192.png" alt="YT5S"></a>
</p>


<h2 align="center">Youtube MP4 MP3 Downloader</h2>





## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

The unofficial Scrap <a href="https://yt5s.com/" > [https://yt5s.com/] </a>

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing


```sh
yarn add @sl-code-lords/youtube-dl
```

or

```sh
npm i @sl-code-lords/youtube-dl
```

## 🎈 Usage <a name="usage"></a>

```ts
var { yt5s }  = require('@sl-code-lords/youtube-dl')

```

```ts
var vid = await yt5s('https://youtu.be/0geqOYqwL0s') //youtube video link or query
```


```ts
//result

{
  status: true,
  code_creator: { name: 'Thisal Sanujaya', github: '@sanuwaofficial' },
  result: {
    url: 'https://youtu.be/0geqOYqwL0s',
    title: 'Lelena (ලෙලෙනා) - Nilan Hettiarachchi Official Music Video',
    uploader: 'SGM Tunes',
    thumbnail: 'https://i.ytimg.com/vi/0geqOYqwL0s/0.jpg',
    audio: {
      '128': { quality: '128kbps', Size: '3.36 MB', url: Function }
   },
    video: {
     '144': { quality: '144p', size: '2.58 MB', url: Function },
     '240': { quality: '240p', size: '5.70 MB', url: Function },
     '360': { quality: '360p', size: '16.29 MB',url: Function },
     '480': { quality: '480p', size: '24.93 MB',url: Function },
     '720': { quality: '720p', size: '51.03 MB',url: Function }
  }
  }
}
```
## download MP3

```ts

await vid.result.audio[128].url()
```
```ts
//result

'https://ve60.aadika.xyz/download/0geqOYqwL0s/mp3/128/1689077942/306e928b29120b4c22d0648f98d43e94a3ab2da88dc8c22703833a5857ad41d5/1?f=yt5s.com'

```
## download MP4

```ts
await vid.result.video[720].url()
```
```ts
//result

'https://redirector.googlevideo.com/videoplayback?expire=1689086318&ei=DhWtZImhBMjI1gKUlJS4BA&ip=2a01%3A4f8%3A202%3A32c2%3A%3A2&id=o-AJK7txNbC-cx9IJsRvX0qR5u39hm_6fiNOnJKRczw7VL&itag=22&source=youtube&requiressl=yes&mh=D1&mm=31%2C26&mn=sn-4g5ednde%2Csn-f5f7knee&ms=au%2Conr&mv=m&mvi=5&pl=50&initcwndbps=546250&spc=Ul2Sq_dhtAqR4kcBnmtKyY5ZcF_yzAs&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=194.188&lmt=1630864661640850&mt=1689064393&fvip=4&fexp=24007246%2C51000011%2C51000024&beids=24350018&c=ANDROID&txp=5511222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIcDWIDpH-SiQImcUDdIOutR-mbbZeIRsqGTBH56SY27AiEA6xw0gP9HI-iUT0DGoYnxKVBjZJ5KYbmg_iAdbCD8fQ0%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAI3lGuwmT58Sw-PnaMQhNPuE1S93RO-VLlxHCE7YqaOZAiAhK9VTIDNdPFD5_nWyGgxfiuiG0F_-4PWZc_OPrCtKkQ%3D%3D&host=rr5---sn-4g5ednde.googlevideo.com&title=yt5s.com-Lelena%20(%E0%B6%BD%E0%B7%99%E0%B6%BD%E0%B7%99%E0%B6%B1%E0%B7%8F)%20-%20Nilan%20Hettiarachchi%20Official%20Music%20Video'

```
## ✍️ Authors <a name = "authors"></a>

- [@sanuwaofficial](https://github.com/sanuwaofficial) - scraped project author

See also the list of [contributors](https://github.com/SL-CODE-LORDS/youtube-dl/contributors) who participated in this project.