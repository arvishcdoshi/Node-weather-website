const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = "From JavaScript"

weatherForm.addEventListener('submit', (e) => {
    // Prevents the default behaviour of refreshing the browser.
    e.preventDefault()

    //Fetch the search value: ex Boston, Berlin etc
    const location = search.value 

    // INITIALLY --> 22 -> remove any previous result, 21 -> show proper UI
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""
    
    fetch('/weather?address=' + location).then( (response) => {
    response.json().then((data)=> {
        if(data.error) {
           messageOne.textContent = data.error
        }
        else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})

})