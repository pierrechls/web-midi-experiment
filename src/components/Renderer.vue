<template>
  <div class="renderer-container"></div>
</template>

<script>

  var container = null
  var camera = null
  var scene = null
  var renderer = null
  var particles = null
  var particle = null

  import WebMidi from 'webmidi'

  export default {
    name: 'Renderer',
    data () {
      return {
        count: 0,
        windowHalfX: window.innerWidth / 2,
        windowHalfY: window.innerHeight / 2,
        separation: 100,
        amountX: 50,
        amountY: 50,
        wavesParams: {
          position: 20,
          scale: 4
        }
      }
    },
    methods: {
      init: function () {
        container = document.createElement( 'div' )
    		document.querySelector('.renderer-container').appendChild( container )
    		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 )
    		camera.position.z = 1000
    		camera.position.x = -40
    		camera.position.y = 150
    		scene = new THREE.Scene()
    		scene.background = new THREE.Color( 0xFFFFFF )
    		particles = new Array()
    		var PI2 = Math.PI * 2
    		var material = new THREE.SpriteCanvasMaterial( {
    			color: 0x555555,
    			program: function ( context ) {
    				context.beginPath()
    				context.arc( 0, 0, 0.5, 0, PI2, true )
    				context.fill()
    			}
    		} )
    		var i = 0
    		for ( var ix = 0; ix < this.amountX; ix ++ ) {
    			for ( var iy = 0; iy < this.amountY; iy ++ ) {
    				particle = particles[ i ++ ] = new THREE.Sprite( material )
    				particle.position.x = ix * this.separation - ( ( this.amountX * this.separation ) / 2 )
    				particle.position.z = iy * this.separation - ( ( this.amountY * this.separation ) / 2 )
    				scene.add( particle )
    			}
    		}
    		renderer = new THREE.CanvasRenderer()
    		renderer.setPixelRatio( window.devicePixelRatio )
    		renderer.setSize( window.innerWidth, window.innerHeight )
    		container.appendChild( renderer.domElement )
    		window.addEventListener( 'resize', this.onWindowResize, false )
    	},
      onWindowResize: function () {
    	  this.windowHalfX = window.innerWidth / 2
    	  this.windowHalfY = window.innerHeight / 2
    	  camera.aspect = window.innerWidth / window.innerHeight
    	  camera.updateProjectionMatrix()
    	  renderer.setSize( window.innerWidth, window.innerHeight )
    	},
      animate: function () {
    	  requestAnimationFrame( this.animate )
    		this.render()
    	},
      render: function () {
    	  camera.lookAt( scene.position );
    		var i = 0;
    		for ( var ix = 0; ix < this.amountX; ix ++ ) {
    		  for ( var iy = 0; iy < this.amountY; iy ++ ) {
    			  particle = particles[ i++ ];
    				particle.position.y = ( Math.sin( ( ix + this.count ) * 0.3 ) * this.wavesParams.position ) + ( Math.sin( ( iy + this.count ) * 0.5 ) * this.wavesParams.position )
						particle.scale.x = particle.scale.y = ( Math.sin( ( ix + this.count ) * 0.3 ) + 1 ) * 4 +	( Math.sin( ( iy + this.count ) * 0.5 ) + 1 ) * this.wavesParams.scale;
    			}
    		}
    		renderer.render( scene, camera );
    		this.count += 0.1;
    	}
    },
    mounted () {
      this.init()
      this.animate()

      WebMidi.enable(function (err) {
        if (err) {
          console.log('WebMidi could not be enabled.', err)
        } else {
          console.log('WebMidi enabled!')
        }
      })
    }
  }

</script>

<style lang="scss" scoped>

  .renderer-container {
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
