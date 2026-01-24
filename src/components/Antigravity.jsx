/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';

const AntigravityInner = ({
  count = 300,
  magnetRadius = 6,
  ringRadius = 7,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 1.5,
  lerpSpeed = 0.05,
  color = '#0ad1b0',
  autoAnimate = true,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = 'capsule',
  fieldStrength = 10
}) => {
  const meshRef = useRef(null);
  const { viewport, size } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    
    const colorObj = new THREE.Color(color);
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = ringRadius + Math.random() * particleVariance;
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * depthFactor;
      
      colors[i * 3] = colorObj.r;
      colors[i * 3 + 1] = colorObj.g;
      colors[i * 3 + 2] = colorObj.b;
      
      scales[i] = particleSize * (0.5 + Math.random() * 0.5);
    }
    
    return { positions, colors, scales };
  }, [count, ringRadius, particleVariance, particleSize, color, depthFactor]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Convert mouse position to world coordinates
    const mouseX = mousePos.current.x * viewport.width / 2;
    const mouseY = mousePos.current.y * viewport.height / 2;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Original position
      const angle = (i / count) * Math.PI * 2 + rotationSpeed * time;
      const baseRadius = ringRadius + Math.sin(time * waveSpeed + i * 0.1) * waveAmplitude;
      
      let x = Math.cos(angle) * baseRadius;
      let y = Math.sin(angle) * baseRadius;
      let z = particles.positions[i3 + 2];
      
      // Mouse interaction
      const dx = mouseX - x;
      const dy = mouseY - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < magnetRadius) {
        const force = (1 - distance / magnetRadius) * fieldStrength;
        x -= (dx / distance) * force;
        y -= (dy / distance) * force;
      }
      
      // Apply pulse effect
      const pulse = Math.sin(time * pulseSpeed + i * 0.05) * 0.5 + 0.5;
      const scale = particles.scales[i] * (0.8 + pulse * 0.4);
      
      dummy.position.set(x, y, z);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      {particleShape === 'capsule' ? (
        <capsuleGeometry args={[0.05, 0.1, 4, 8]} />
      ) : (
        <sphereGeometry args={[0.05, 8, 8]} />
      )}
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </instancedMesh>
  );
};

const Antigravity = (props) => {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <AntigravityInner {...props} />
      </Canvas>
    </div>
  );
};

export default Antigravity;
