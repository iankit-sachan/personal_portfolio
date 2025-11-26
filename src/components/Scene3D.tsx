import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, scale, color, speed }: { position: [number, number, number]; scale: number; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002 * speed;
      meshRef.current.rotation.y += 0.003 * speed;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.002;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.5}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function GlowingSphere({ position }: { position: [number, number, number] }) {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={sphereRef} position={position} scale={1.5}>
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#10b981"
            attach="material"
            distort={0.7}
            speed={4}
            roughness={0}
            metalness={1}
            emissive="#10b981"
            emissiveIntensity={0.8}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, color }: { position: [number, number, number]; color: string }) {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={torusRef} position={position} scale={0.8}>
        <Torus args={[1, 0.3, 16, 100]}>
          <meshStandardMaterial
            color={color}
            roughness={0.1}
            metalness={0.9}
            emissive={color}
            emissiveIntensity={0.4}
          />
        </Torus>
      </mesh>
    </Float>
  );
}

function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2.5}>
      <mesh ref={cubeRef} position={position} scale={0.6}>
        <Box args={[1, 1, 1]}>
          <MeshDistortMaterial
            color={color}
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </Box>
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#10b981" />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#3b82f6" />
      <spotLight position={[0, 5, 0]} intensity={0.5} angle={0.3} penumbra={1} color="#10b981" />

      <GlowingSphere position={[0, 0, 0]} />

      <FloatingShape position={[-4, 2, -2]} scale={0.6} color="#10b981" speed={1.2} />
      <FloatingShape position={[4, -1, -1]} scale={0.8} color="#3b82f6" speed={0.9} />
      <FloatingShape position={[-2, -2, 1]} scale={0.5} color="#06b6d4" speed={1.4} />
      <FloatingShape position={[3, 3, -3]} scale={0.7} color="#14b8a6" speed={1} />

      <FloatingTorus position={[5, 1, -4]} color="#10b981" />
      <FloatingTorus position={[-5, -2, -3]} color="#3b82f6" />

      <FloatingCube position={[-3, -1, -5]} color="#14b8a6" />
      <FloatingCube position={[2, -3, -2]} color="#06b6d4" />
    </>
  );
}
