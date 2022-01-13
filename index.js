function buscadorDeImagenesDePerritos(event){
  event.preventDefault();
  let cantidad = document.querySelector('#cantidad').value;
  let url = `https://dog.ceo/api/breeds/image/random/${cantidad}`;

  let config = {
    method: "GET"
  };

  fetch(url, config)
    .then( function (respuesta) {
      if( respuesta.ok){
        return respuesta.json();
      }
    })
    .then(function(respuestaJSON){
      console.log( respuestaJSON);
    });
}

let dogForm = document.querySelector('.dogForm');

dogForm.addEventListener('submit', buscadorDeImagenesDePerritos)