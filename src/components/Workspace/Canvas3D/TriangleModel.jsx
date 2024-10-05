import useTriangleShape from '../../../hooks/useTriangleShape';

function TriangleModel({ path, depth, canvasSize, fill, zPosition }) {
  const shape = useTriangleShape(path, canvasSize);

  return (
    <mesh position={[0, 0, zPosition]} castShadow receiveShadow>
      <extrudeGeometry args={[shape, { depth, bevelEnabled: false }]} />
      <meshStandardMaterial
        visible
        transparent={false}
        opacity={1}
        side={2}
        color={fill}
        roughness={0.7}
        metalness={0.4}
        flatShading={false}
      />
    </mesh>
  );
}

export default TriangleModel;
