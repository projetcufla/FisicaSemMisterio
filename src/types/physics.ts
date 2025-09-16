export interface SimulationState {
  isRunning: boolean;
  time: number;
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  energy: {
    kinetic: number;
    potential: number;
    total: number;
  };
}

export interface ProjectileParams {
  mass: number;
  initialVelocity: number;
  angle: number;
  gravity: number;
}

export interface PendulumParams {
  length: number;
  initialAngle: number;
  damping: number;
  gravity: number;
}

export interface RotationalParams {
  mass: number;
  radius: number;
  height: number;
  momentOfInertia: number;
}