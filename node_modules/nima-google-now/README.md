<h1 align="center"> 
🌐 nima google now 🌐
</h1>
<h6 align="center"> This is Google Translate , Google Search & Google Image Downloader,
  
  nodejs api package for developers
</h6>
<br>

### ➩  Install
```
yarn add nima-google-now
```

### ➩ Require 
```
const { googleSearch , googleImage , googleTranslate } = require("nima-google-now")
```

### 🔍 Google Search 
```

googleSearch('Whatsapp').then((res) => {
console.log(res)
}) .catch((err) => {
console.log(err)
})

```
### ✅ Result Google Search
```
{
  authour: 'MR NIMA',
  status: true,
  result: [
    {
      no: 1,
      title: 'WhatsApp',
      url: 'https://www.whatsapp.com/',
      description: 'WhatsApp Messenger: More than 2 billion people in over 180 countries use WhatsApp to stay in touch with friends and family, anytime and anywhere.'
    },
    {
      no: 2,
      title: 'WhatsApp Messenger - Apps on Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.whatsapp&hl=en_US&gl=US',
      description: "WhatsApp from Meta is a FREE messaging and video calling app. It's used by over 2B people in more than 180 countries. It's simple, reliable, and private, ..."
    },
    {
      no: 3,
      title: 'WhatsApp Messenger on the App Store',
      url: 'https://apps.apple.com/us/app/whatsapp-messenger/id310633997',
      description: "WhatsApp from Meta is a FREE messaging and video calling app. It's used by over 2B people in more than 180 countries. It's simple, reliable, and private, ..."
    },
    {
      no: 4,
      title: 'WhatsApp',
      url: 'https://apps.microsoft.com/store/detail/whatsapp/9NKSQGP7F2NH',
      description: "WhatsApp from Meta is a 100% free messaging app. It's used by over 2B people in more than 180 countries. It's simple, reliable, and private, ..."
    },
    {
      no: 5,
      title: 'WhatsApp - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/WhatsApp',
      description: 'WhatsApp (also called WhatsApp Messenger) is a freeware, cross-platform, centralized instant messaging (IM) and voice-over-IP (VoIP) service owned by US ...'
    },
    {
      no: 6,
      title: 'What is WhatsApp? How to use the app, tips, tricks, and more',
      url: 'https://www.digitaltrends.com/mobile/what-is-whatsapp/',
      description: 'May 6, 2023 — WhatsApp is a free, multifunctional, multiplatform messaging app and one of the most popular call and chat apps available.'
    }
  ]
}
```


### 🖼️ Google Image search 
```


googleImage('Queen Elisa Whatsapp Bot').then((res) => {
console.log(res)
}) .catch((err) => {
console.log(err)
})


```
### ✅ Result Google Image Search
```
{
  authour: 'MR NIMA',
  status: true,
  result: [
    'https://i.ytimg.com/vi/25D2RWMf7Ew/sddefault.jpg',
    'https://i.ytimg.com/vi/EvbTT4UyqIA/sddefault.jpg',
    'https://i.ytimg.com/vi/Lx--ZYrBWac/maxresdefault.jpg',
    'https://storage.googleapis.com/replit/images/1656833043492_7857b84fba2da74ef497c3924e7a6106.jpeg',
    'https://whatsappit.com/public/storage/groups/whats-app-bot-group-queen-elisa-whatsapp-bot-1.jpg',
    'https://i.ytimg.com/vi/DEpSpJRg4CA/maxresdefault.jpg',
    'https://storage.googleapis.com/replit/images/1679894523283_62d7f529be427466c2169d5a1e9e75d0.jpeg',
    'https://i.ytimg.com/vi/y9mZOJqaYyg/sddefault.jpg',
    'https://storage.googleapis.com/replit/images/1675162125627_d61792fd6596fc82336b97c986c00378.jpeg',
    'https://assets-global.website-files.com/5e42772e6a8cfd42a9715206/63bc29683144b8208a46de43_LANDBOT-HOW-TO-CREATE-A-WHATSAPP-CHATBOT-300 (1).jpeg',
    'https://i.imgur.com/6rs61MY.png',
    'https://i.ytimg.com/vi/G4_vdkmxzMs/maxresdefault.jpg',
    'https://assets-global.website-files.com/5e42772e6a8cfd42a9715206/63a00820989451d94535af9e_dQmG-jGrQ9yAh1Pa1PwdVUB7BVetuSoWqWe00IFGe5_jI4hVjFqbXzhNAWzAnEMm4CpJdCzlESqs7WOQdGgRSIuU4Ye9OTkAPr4CMOvUxjNJWU5OAbrIfBEGfO-R2BJ_ylqemkjcOU7-dHPgF0kIyRO6zxZYfkq9l0CbbIrydkoCHV9yKQdEuncLLJPVvw.png',
    'https://influencermarketinghub.com/wp-content/uploads/2019/12/Best-Whatsapp-Chatbot-Tools.png',
    'https://i.imgur.com/dzPTA6u.png',
    'https://pps.whatsapp.net/v/t61.24694-24/350765150_729330718878628_4610321565478788555_n.jpg?ccb=11-4&oh=01_AdSHLKjqWDl6mqqOttP_s885mT8iPgF5cm833vjP8JYgbg&oe=648EA2B2',
    'https://storage.googleapis.com/replit/images/1678290660174_fdf7ded35726dc7691f6e9e95478219a.jpeg',
    'https://deadline.com/wp-content/uploads/2022/07/Emmys-2022.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f7/The_fin_de_siècle_newspaper_proprietor_(cropped).jpg',
    'https://assets.cdn.prod.twilio.com/original_images/ruby-whatsapp-header.png',
    'https://influencermarketinghub.com/wp-content/uploads/2019/12/WhatsApp-Automation-_-Landbot-for-WhatsApp-Googl.jpg',
    'https://groupda.link/add/img/profile/1681190961.jpg',
    'https://www.billboard.com/wp-content/uploads/2022/08/eliza-rose-press-cr-phoebe-cowley-2022-billboard-1548.jpg',
    'https://1.bp.blogspot.com/-BjEulKnFCXI/XjCwpMszeBI/AAAAAAAAg5M/n370SvwxZwEISOJlDCaVBVuXcW87vP5NwCLcBGAsYHQ/s1600/Pringles_Mortybot_Rick_and_Morty.jpg',
    'https://www.janithsadanuwan.tech/QueenNilu/img/3.jpeg',
    'https://staging.sessions.edu/wp-content/uploads/tana2.png',
    'https://i.dailymail.co.uk/1s/2023/03/30/16/69295525-0-image-a-42_1680191315173.jpg',
    'https://www.pamhurst.com/cdn/shop/articles/IMG_0640_2048x.jpg?v=1645722274',
    'https://i.ytimg.com/vi/dXAbuOPm63w/hqdefault.jpg',
    'https://www.dailymaverick.co.za/wp-content/uploads/2022/03/therapy-g3ee84051b_1920-e1646664283486.png',
    'https://assets-global.website-files.com/5e42772e6a8cfd42a9715206/63a008207670a12c4f4bfccc_G6K1uNd6cEFKyHOGbe9tsc5uM_OFhHEbD4HglzQ49QdVE0NTLHBY2apcR19ERvYVvzv67EdtQgZYKdRLIAHjAh_xpITeBPxdc8CtqEQFlbKjRnsTt3lbnZ5GXSCCJispZrpmN80FZlnbRuopAzwo3kgHVrTUvLN1KA3OGR4813eF6NMbSUQvm0YeKdKUeA.png',
    'https://s3.ap-southeast-1.amazonaws.com/gfg-origin-dsc.ibilik.com/production/images/rooms/8002293/1542852-1681118854_4_ori.jpeg',
    'https://i.ytimg.com/vi/wqVscBDmsQA/maxresdefault.jpg',
    'https://assets.isu.pub/document-structure/230425092243-1f3858e47fbfb89b3b9c45f1c97b374f/v1/a3b7666d2c15e7f4d73c9e4124bfc1d9.jpeg',
    'https://fahrenhouse.com/blog/wp-content/uploads/2018/11/International-Bibliography-of-History-of-Education-and-Children’s-Literature-2013.jpg',
    'https://images.bestwestern.com/bwi/brochures/45024/photos/1024/22972194.jpg',
    'https://i0.wp.com/jd-bots.com/wp-content/uploads/2021/07/pexels-photo-46924.jpeg?fit=1400,933&ssl=1',
    'https://openseauserdata.com/files/1d73f2d355b52e1b2107b911d07d2fd9.jpg',
    'https://lighthousetattooclub.com/wp-content/uploads/2023/05/cropped-Lighthouse-Tattoo-Favicon.png',
    'https://s3.ap-southeast-1.amazonaws.com/gfg-origin-dsc.ibilik.com/production/images/rooms/8002293/1542852-1681118854_3_ori.jpeg',
    'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CBDUVG56SJF4FMRCGN2LPTFL3I.jpg',
    'https://i1.rgstatic.net/publication/317616947_A_survey_to_examine_public_perceptions_and_use_of_social_media_for_health_information/links/5943a52eaca2722db49cd978/largepreview.png',
    'https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/37/4c/98/374c98d7-2490-c80c-a678-86ad99a07953/mza_13363953502371246578.jpeg/1200x1200bb.jpg',
    'https://i0.wp.com/imageamplified.com/wp-content/uploads/2020/05/CLIENT-MAGAZINE-Andrew-Skrynnyk-Ryan-Curtis-by-Berta-Pfirsich.-Spring-2020-www.imageamplified.c-15.jpg?fit=727,933&ssl=1',
    'https://pps.whatsapp.net/v/t61.24694-24/307216120_582740316869202_8818934892141214371_n.jpg?ccb=11-4&oh=01_AVy0Cd0yq4zaSTx2IjY6O9ITiLTrJkEPRSQfrkzarcHScg&oe=6355F5D5',
    'https://www.qodeup.com/DATI/attachments/575/1675356539.jpeg',
    'https://elroyalehotel.com/wp-content/uploads/2021/08/Alchemy-Bar-sherman-oaks.jpg',
    'https://i.dailymail.co.uk/1s/2023/05/05/14/70618167-12050563-Update_Google_has_started_to_roll_out_its_new_passkey_technology-a-102_1683293117636.jpg',
    'https://img.yumpu.com/54471880/1/500x640/is-hong-kong-about-to-implode.jpg',
    'https://www.somethinghaute.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-14-at-2.59.36-PM.jpeg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjxELoR27OMmpivAbU1W8UQPH_eBRO1EyF-2Va_53oJSQsvILcg9deckRTwegrtiVy13FnH6Vk1lJvJIZ4rrls2K7aaMfAqmzPsMuVqIGHjgirHaOXN79VN0G5DmIpZOBryZTSrya78FDI0gn5hSv1SlT57KjzXBjWPYt26Pi0ZyzbF8tO_rXXOHCU3A/s1600/lap-0-14h47.jpg',
    'https://media.vandal.net/i/ivandal/1920x1081/11-2022/2022111717333698_1.jpg',
    'https://distrowatch.com/images/ktyxqzobhgijab/gentoo.png',
    'https://jillrbennett.files.wordpress.com/2023/02/dscn9850-2.jpeg?w=1024',
    'https://ih1.redbubble.net/image.592095335.3603/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u5.jpg',
    'https://ii3.pepperfry.com/media/catalog/product/b/e/800x880/beige-cotton-solid-5-x-7-feet-hand-woven-carpet-by-saral-home-beige-cotton-solid-5-x-7-feet-hand-wov-jyz6jl.jpg',
    'https://onlinelibrary.wiley.com/cms/asset/45f4a932-7022-4806-b173-5134e779d389/hae14537-gra-0001-m.jpg',
    'https://en.wemakefuture.it/cdn/?url=storage.ibrida.io/public/uploader/db5a17eb-c873-4d01-bdef-aecf3d23195e.jpg&h=350&w=382&t=fit&q=80&output=jpg&il',
    'http://sanmateo.noticiasdesantabrigida.com/wp-content/uploads/2019/02/WhatsApp_Image_2018-05-14_at_23.14.40.jpeg',
    'https://www.antevenio.com/wp-content/uploads/2012/06/Pinterest-Infographic-189x450.jpg',
    'https://i.ytimg.com/vi/xKRs3oJP8Bs/maxresdefault.jpg',
    'https://swisherpost.co.za/wp-content/uploads/2022/07/2022-emmy-awards.jpeg',
    'https://thesunflower.com/wp-content/uploads/2020/11/IMG_9136-900x600.jpg',
    'https://i0.wp.com/farm4.static.flickr.com/3080/2851379467_1df719e447.jpg?resize=450,225',
    'https://benuanta.co.id/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-09-at-14.34.44.jpeg',
    'https://i.ytimg.com/vi/t5PfsovutZA/maxresdefault.jpg',
    'https://reassemblingnature.org/wp-content/uploads/2018/10/WhatsApp-Image-2018-10-12-at-10.45.58-1024x1024.jpeg',
    'https://i1.rgstatic.net/publication/342946132_Democracy_and_Fake_News_Information_Manipulation_and_Post-Truth_Politics/links/6448fa0ef105f301690d20cd/largepreview.png',
    'https://cdn-thumbnails.huggingface.co/social-thumbnails/models/trituenhantaoio/bert-base-vietnamese-uncased.png',
    'https://www.alphahelicapeptides.com/modules/smartblog/images/6-single-default.jpg',
    'https://qph.cf2.quoracdn.net/main-thumb-2142551398-200-xemdzixbkqrjitngzdvssqgzpoujfxpo.jpeg',
    'https://govtjobalert365.com/wp-content/uploads/2023/05/photo_2023-05-25_06-12-14.jpg',
    'https://i2.wp.com/christianswhocursesometimes.com/wp-content/uploads/2021/06/F2EE3059-FD25-4FD6-A7E4-E5841E2AB004-576x1024.jpg?resize=576,1024&ssl=1',
    'https://www.furtherfield.org/wp-content/uploads/2019/03/Amit-Rai-Jugaad-Time-Cover-1024x842.jpeg',
    'http://olihealthmagazine.org/resimler/images/image.png',
    'https://pcchile.cl/wp-content/uploads/2020/05/662BBDAD-8A6A-4050-9C23-521412195CFA.jpeg'
  ]
}
```



### 🧧 Google Translate 
```
googleTranslate('Welcome','si').then((res) => {
console.log(res)
}) .catch((err) => {
console.log(err)
})
```
### ✅ Result Translate 
```
{ 
authour: 'MR NIMA', 
status: true,
result: 'සාදරයෙන් පිළිගනිමු'
 }
```

<br>

#### 👨‍💻 Author - [Mr Nima](https://github.com/DarkMakerofc)
