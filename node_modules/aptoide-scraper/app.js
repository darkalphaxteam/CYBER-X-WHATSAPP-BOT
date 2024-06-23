const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const file_size_url = (...args) => import('file_size_url').then(({default: file_size_url}) => file_size_url(...args));
const cheerio = require('cheerio')
const tools = require('./fix-link.js')

 async function search(args) {
    let res = (await fetch(tools.api(5, '/apps/search', {
      query: args,
      limit: 1000
    })))

    let ress = {}
    res = (await res.json())
    ress = res.datalist.list.map(v => {
      return {
        name: v.name,
        id: v.package
      }
    })
    return ress
  }
async function download(id) {
    let res = (await fetch(tools.api(5, '/apps/search', {
      query: id,
      limit: 1
    })))

    res = (await res.json())
let name = res.datalist.list[0].name
let package = res.datalist.list[0].package
let icon = res.datalist.list[0].icon
let dllink = res.datalist.list[0].file.path
let lastup = res.datalist.list[0].updated
let size = await file_size_url(dllink)
return{
  name,
  lastup,
  package,
  size,
  icon,
  dllink
}
}

module.exports = { search, download }