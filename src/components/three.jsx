import * as THREE from 'three'
import { useEffect } from 'react'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import watercolor from '../images/watercolor.jpg'

const ThreeScene=()=>{
    useEffect(()=>{
const scene=new THREE.Scene()
const camera=new THREE. PerspectiveCamera(100, window.innerWidth/window.innerHeight, 0.1, 1000)
const canvas=document.getElementById('canvas')


const renderer=new THREE.WebGLRenderer({canvas, antialias:true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.TorusGeometry(2, 0.1, 16, 100); // Updated TorusGeometry parameters
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Create a basic material
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);
const light= new THREE.PointLight(0xffffff,1,100)
light.position.set(1,1,1)
scene.add(light)

const controls =new OrbitControls(camera, renderer.domElement)


const bg= new THREE.TextureLoader().load('https://cdn.dribbble.com/userupload/10297827/file/original-0f3a15d12f6275d041f7443e55ff28a1.jpeg?resize=752x')
scene.background=bg
camera.position.z = 5;
function animate() {
	requestAnimationFrame( animate );
    torus.rotation.x +=0.01
    torus.rotation.y +=0.01
    torus.rotation.z +=0.01
    controls.update()
	renderer.render( scene, camera );
}
animate();
},[])
return(
    <>
  <canvas id='canvas' className=''/>
    </>
)

}

export default ThreeScene