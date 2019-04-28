let mobilenet;
let puffin;

function preload() {
  puffin = loadImage( 'assets/puffin.jpg' );
}

function setup() {
  createCanvas( 400, 400 );
  background( 100 );
  //load mobilenet models and invoke the modelReady callback when loaded
  mobilenet = ml5.imageClassifier( 'MobileNet', modelReady );
  image( puffin, 0, 0, width );
}

function modelReady() {
  console.log( "model is ready" );
  //use the model to predict what's the image looks like
  //the gotResults() callback will be invoked once the image is processed
  mobilenet.predict( puffin, gotResults );
}

// by default you want error as a first parameter of the callback.
function gotResults( error, results ) {
  if ( error ) {
    console.error( error );
  } else {
    console.log( results );

    let label = results[ 0 ].className;
    let prob = results[ 0 ].probability;

    fill( 0 );
    textSize( 30 );
    text( label, 10, height - 100 );
    text( prob, 10, height - 50 );
  }
}