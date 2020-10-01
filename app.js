#! /usr/bin/env node
'strict mode'
const fetch = require('node-fetch')

const [,, ...args] = process.argv

const body = {
  'url': args[0]
}

fetch('https://rel.ink/api/links/', {
  method: 'POST',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json'}
})
  .then(res => res.json())
  .then(json => console.log(`https://rel.ink/${json.hashid}`))

/*
const shaolink = require('shaolink')

const shortLink = shaolink('https://sloth.code')

*/
