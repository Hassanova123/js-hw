const myEmojis = ["🎾","🍇","🚣"]


function renderEmojis(){
    let emojiContainer = document.getElementById("emoji-container")
    for (let i=0;i<myEmojis.length;i++){
        let emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}
renderEmojis()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value){
        myEmojis.push(emojiInput.value)
        renderEmojis()
    }
})

const remBtn = document.getElementById("rem-btn")
remBtn.addEventListener("click", function(){
    const emojiOutput = document.getElementById("emoji-output")
    if (emojiOutput.value){
        myEmojis.pop(emojiOutput.value)
        renderEmojis()
    }
})


const remBtn2 = document.getElementById("rem-btn2")
remBtn2.addEventListener("click", function(){
    const emojiOutput2 = document.getElementById("emoji-output2")
    if (emojiOutput2.value){
        myEmojis.shift(emojiOutput2.value)
        renderEmojis()
    }
})

const pushBtn2 = document.getElementById("push-btn2")
pushBtn2.addEventListener("click", function(){
    const emojiInput2 = document.getElementById("emoji-input2")
    if (emojiInput2.value){
        myEmojis.unshift(emojiInput2.value)
        renderEmojis()
    }
})