
let ejecutarCodigo = () =>{
    //alert('hola,mundo');
    let elemento = document.getElementById('titulo10')
    elemento.textContent = "Album de fotos";

    let arreglo = document.getElementsByClassName('text-muted')
    elemento2 = arreglo[1];
    elemento2.innerHTML = '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>'

    let arreglo2 = document.getElementsByTagName("p");
    elemento = arreglo2[2];
    elemento.className = "d-none";

    let urls = [ 
      { url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino'}, 
      { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'energia'}, 
      { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá'},
      { url: 'https://images.unsplash.com/photo-1653965188866-e544c043a2f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'playa'},
      { url: 'https://images.unsplash.com/photo-1653242816429-fd9393b49bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'platos'},
      { url: 'https://images.unsplash.com/photo-1653896775515-ae85244f58a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'cámara'},
      { url: 'https://images.unsplash.com/photo-1653971858341-865fca7c6d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', alt: 'hogar'},
      { url: 'https://images.unsplash.com/photo-1653883094445-9a53d0e9ac2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'cueva'},
      { url: 'https://images.unsplash.com/photo-1653865507270-731da1afface?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'mujer'}]
  
  
      let arreglo_svg = document.getElementsByClassName("bd-placeholder-img");
  
      for (let i=0; i< urls.length ; i++){
          let img = document.createElement("img");
          img.src = urls[i].url;
          img.alt = urls[i].alt;
          img.height = '250'
          arreglo_svg[0].replaceWith(img)
      }

  };



  ejecutarCodigo();

S