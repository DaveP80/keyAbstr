async function getC(api_url) {
    const response = await fetch(api_url)
    const data = await response.json()
    return data
  }

let cred = {}

let changet = document.getElementById('this')

document.getElementById('btn').addEventListener('click', () => {
    
getC('https://us-east4-majestic-cairn-365919.cloudfunctions.net/example').then(res => {
    cred['key']= res['key']
    changet.textContent = cred['key'].substring(3,6)
})
})
