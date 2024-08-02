```
const loader = new STLLoader();
loader.load( './models/stl/ascii/slotted_disk.stl', function ( geometry ) {

    const material = new THREE.MeshPhongMaterial( { color: 0xff9c7c, specular: 0x494949, shininess: 200 } );
    const mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( 0, - 0.25, 0.6 );
    mesh.rotation.set( 0, - Math.PI / 2, 0 );
    mesh.scale.set( 0.5, 0.5, 0.5 );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add( mesh );

} );
```