<template>
  <div class="renderer-container"></div>
</template>

<script>

  export default {
    name: 'Renderer',
    data () {
      return {
        container: null,
        camera: null,
        scene: null,
        renderer: null,
        particles: 0,
        particle: 0,
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

        this.container = document.createElement( 'div' )
    		document.querySelector('.renderer-container').appendChild( this.container )

    		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 )

    		this.camera.position.z = 1000
    		this.camera.position.x = -40
    		this.camera.position.y = 150

    		this.scene = new THREE.Scene()

    		this.scene.background = new THREE.Color( 0xFFFFFF )

    		this.particles = new Array()

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

    				this.particle = this.particles[ i ++ ] = new THREE.Sprite( material )
    				this.particle.position.x = ix * this.separation - ( ( this.amountX * this.separation ) / 2 )
    				this.particle.position.z = iy * this.separation - ( ( this.amountY * this.separation ) / 2 )
    				this.scene.add( this.particle )

    			}

    		}

    		this.renderer = new THREE.CanvasRenderer()
    		this.renderer.setPixelRatio( window.devicePixelRatio )
    		this.renderer.setSize( window.innerWidth, window.innerHeight )
    		this.container.appendChild( this.renderer.domElement )

    		window.addEventListener( 'resize', this.onWindowResize, false )

    	},
      onWindowResize: function () {

    	  this.windowHalfX = window.innerWidth / 2
    	  this.windowHalfY = window.innerHeight / 2

    	  this.camera.aspect = window.innerWidth / window.innerHeight
    	  this.camera.updateProjectionMatrix()

    	  this.renderer.setSize( window.innerWidth, window.innerHeight )

    	},
      animate: function () {

    	  requestAnimationFrame( this.animate )
    		this.render()

    	},
      render: function () {

    	  this.camera.lookAt( this.scene.position );

    		var i = 0;

    		for ( var ix = 0; ix < this.amountX; ix ++ ) {

    		  for ( var iy = 0; iy < this.amountY; iy ++ ) {

    			  this.particle = this.particles[ i++ ];
    				this.particle.position.y = ( Math.sin( ( ix + this.count ) * 0.3 ) * this.wavesParams.position ) + ( Math.sin( ( iy + this.count ) * 0.5 ) * this.wavesParams.position )
						this.particle.scale.x = this.particle.scale.y = ( Math.sin( ( ix + this.count ) * 0.3 ) + 1 ) * 4 +	( Math.sin( ( iy + this.count ) * 0.5 ) + 1 ) * this.wavesParams.scale;

    			}

    		}

    		this.renderer.render( this.scene, this.camera );

    		this.count += 0.1;

    	}
    },
    mounted () {
      this.init()
      this.animate()
    }
  }

</script>

<style>

</style>
