const increase = document.querySelector('#increase')
const reset = document.querySelector('#reset')
const decrease = document.querySelector('#decrease')
const counter = document.querySelector('.counter')

    let counterValue = 0;

 increase.addEventListener('click', () => {
    counterValue ++
    if(counterValue > 0)
    {
        counter.style.color = 'green'
    }
    counter.innerText = counterValue
    if(counterValue == 0)
    {
        counter.style.color = 'black'
    }

})
decrease.addEventListener('click', () => {
    counterValue --
    if(counterValue < 0)
    {
        counter.style.color = 'red'
    }
    counter.innerText = counterValue
    if(counterValue == 0)
    {
        counter.style.color = 'black'
    }
})
reset.addEventListener('click', () => {
    counterValue = 0
    counter.style.color = 'black'
    counter.innerText = counterValue
})

   