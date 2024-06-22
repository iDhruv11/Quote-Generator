const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
        by: "Nelson Mandella"    
        
    },
    {
        quote: "It's always seems impossible untill its done", 
        by: "Nelson Mandella"
    }, 
    {
        quote: "The way to get started is to quit talking and begin doing.",
        by: "Walt disney"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        by: "Eleanor Roosevelt"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        by: "James Cameron"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        by: "Mahatma Gandhi"
    }
];
const regen = document.querySelector('.regen');
const quoteHolder = document.querySelector('.quote');
const authorHolder = document.querySelector('.said-by');
let prevIndex;
regen.addEventListener('click', ()=>{
    let index = Math.floor(Math.random()*6);
    if(index == prevIndex){
        if(index == 5){
            index = index - 1;
        }else{
            index = index + 1;
        }
    }
    prevIndex = index;
    quoteHolder.innerText = quotes[index].quote;
    authorHolder.innerText = `- ${quotes[index].by}`;
        

})