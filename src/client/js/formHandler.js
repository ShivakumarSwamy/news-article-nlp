import { isValidUrl } from './validUrl';

function handleSubmit(event) {
    event.preventDefault();

    const url = document.getElementById('name').value;

    if (!isValidUrl(url)) {
      alert('Please enter a valid article url for sentiment analysis');
      return
    }

    console.log("::: Form Submitted :::");

    fetch('http://localhost:8080/evaluateArticle', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "url": url })
    })
    .then(res => res.json())
    .then(function(data) {
        document.getElementById('results').innerHTML = data.displayText;
    })
}


export { handleSubmit }
