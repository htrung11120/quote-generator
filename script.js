const quoteNum = document.querySelector('header')
const quoteAdvice = document.querySelector('.quote')
const dice = document.querySelector('.dice')

async function fetchQuote() {
  let quote = await fetch('https://api.adviceslip.com/advice')
  let data = await quote.json()
  return data
}

dice.addEventListener('click', async () => {
  let data = await fetchQuote()
  let quote = data.slip
  quoteNum.textContent = `ADVICE #${quote.id}`
  quoteAdvice.textContent = quote.advice
  console.log(quoteAdvice.textContent)
})
