import './App.css'
import * as THREE from 'three';
import { useEffect } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function App() {

  let model: THREE.Group;

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
    camera.position.set(0.5,-0.5,2);
    // rendererk
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load("./models/shiba.gltf", (gltf)=>{
      model = gltf.scene;
      model.rotateY(-0.5);
      scene.add(model);
    });    

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
    <div className="mainContent">
      <h2>T Code</h2>
      <p>web developer</p>
    </div>
    </>
  )
}

export default App
