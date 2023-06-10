const arr = []
const number = /^[0-9]+$/

while (arr.length != 10) {
    const a = prompt("Enter 10 time only Number Here")
    if (a.match(number)) {
        let b=parseInt(a)
        arr.push(b)
    }

}
const ShowArrayHere = document.getElementById('ShowArrayHere')
const ShowSortingArrayHere=document.getElementById('ShowSortingArrayHere')
ShowArrayHere.innerHTML += `[ `
arr.forEach(element => {

    ShowArrayHere.innerHTML += `${element} `
});
ShowArrayHere.innerHTML += `]`
const body = document.body
const buttonSort = document.getElementById('buttonSort')
buttonSort.addEventListener('click', () => {
    const h3 = document.createElement('h3')
    h3.innerText = 'Sorting Array are List Here'
    h3.className = 'd-flex justify-content-center'
    body.appendChild(h3)
    const div =document.createElement('div')
    div.className='d-flex justify-content-center mb-3'
    for (let index = 0; index < arr.length-1; index++) {
        for (let j = 0; j < arr.length - 1; j++) {
            let temp;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
            console.log(j)

        }

    }
    console.log(arr)
    div.innerHTML+=`[`
    arr.forEach(element => {

        div.innerHTML += `${element} `
    });
    div.innerHTML += `]`
    body.appendChild(div)
    buttonSort.style.display='none'

})