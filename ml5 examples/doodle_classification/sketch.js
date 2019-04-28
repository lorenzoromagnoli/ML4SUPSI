let mobilenet;
let canvas;

function setup() {
  canvas = createCanvas( 400, 400 );
  background( 255 );
  //load mobilenet models and invoke the modelReady callback when loaded
  mobilenet = ml5.imageClassifier( 'MobileNet', modelReady );
}

function modelReady() {
  console.log( "model is ready" );
  classifyCanvas();
}

function draw() {
  stroke( 0 );
  if ( mouseIsPressed === true ) {
    line( mouseX, mouseY, pmouseX, pmouseY );
  }
}

function classifyCanvas() {
  mobilenet.predict( canvas, gotResult );
}

function gotResult( err, results ) {
  select( '#result' ).html( results[ 0 ].className );
  select( '#probability' ).html( nf( results[ 0 ].probability, 0, 2 ) );
  classifyCanvas();
}