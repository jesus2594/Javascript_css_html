
//let myLeads = `["www.aweso.com"]`
//1. turn the myLeads string into array
//myLeads = JSON.parse(myLeads)
//2. push a new value to the array
//myLeads.push("www.werty.com")
//3. Turn the array into a string again
//myLeads = JSON.stringify(myLeads)
//4. Console.log the string using typeof to verify that it's a string
//console.log(typeof myLeads)

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]


tabBtn.addEventListener("click", function(){


    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
   
     });
    
});




function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})










//create element
   //set text content
   //append to ul
   /* const li = document.createElement('li')
   li.textContent = myLeads[i]
   ulEl.append(li) */



/* const box = document.getElementById('container')

box.innerHTML = "<button>Buy!</button>"
box.addEventListener('click', function(){
    box.innerHTML += "<p>Thank you for buying!</p>"
}) */

/* 
exercises-------------------------------------------------------------------------------
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)



-----------------------------------------------------------------------------------------
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>The Brooklyn Agency</h1>
        <div id="container">
            <img class="team-img" src="images/hip1.jpg">
            <img class="team-img" src="images/hip2.jpg">
            <img class="team-img" src="images/hip3.jpg">
        </div>
        <script src="index.js"></script>
    </body>
</html>

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: whitesmoke;
    text-align: center;
    color: #130e0f;
}

h1 {
    font-weight: 200;
    letter-spacing: 2px;
}

#container {
    width: 100%;
}

.team-img {
    width: 100px;
    border-radius: 100%;
    margin: 10px;
}


// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()
*/




