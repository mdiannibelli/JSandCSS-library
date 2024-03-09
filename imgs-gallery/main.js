
const section = document.getElementById('section');
const container = document.querySelector('.dataContainer')

fetch('./chracters.json')
.then(res => res.json())
.then(data => {
    const chracters = data.chracters;

    chracters.forEach(({imgUrl, name, quote, description}) => {
        
        /* generate imgs */
        const img = document.createElement('img');
        img.className = name;
        img.src = imgUrl;
        section.appendChild(img)

        /* Almacenamos el name a cada imagen  */
        img.setAttribute('data-name', name);

        /* Almacenamos la quote & description a cada imagen  */
        img.setAttribute('data-quote', quote)
        img.setAttribute('data-description', description)

        
        img.addEventListener('mouseover', () => {
            const chracterName = img.getAttribute('data-name')
            const chracterQuote = img.getAttribute('data-quote')
            const chracterDescription = img.getAttribute('data-description')

            //h1 
            const h1 = document.createElement('h1');
            h1.className = 'h1Data';
            h1.textContent = chracterName;
            container.innerHTML ='';
            container.appendChild(h1)

            //quote 
            const quote = document.createElement('quote');
            quote.className = 'quoteData';
            quote.textContent = chracterQuote;
            container.appendChild(quote)

            //description
            const description = document.createElement('p');
            description.classList = 'pData';
            description.textContent = chracterDescription;
            container.appendChild(description)
        })
        

    })
   
})
.catch(error => console.error('Error fetching data:', error))
