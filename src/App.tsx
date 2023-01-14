import './App.css'
import * as THREE from 'three';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    const canvas: HTMLCanvasElement = document.querySelector("#canvas") as HTMLCanvasElement;
    const sizes = {
      width: innerWidth,
      height: innerHeight
    }
    // scene
    const scene = new THREE.Scene();
    // camera 
    const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000);
    camera.position.set(1,1,3);
    // rendererk
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // アニメーション
    const tick = ()=>{
      renderer.render(scene,camera);
      requestAnimationFrame(tick);
    }

    tick();

  }, []);

  return (
    <>
    <canvas id="canvas"></canvas>
    <div className="mainContent"></div>
    </>
  )
}

export default App
