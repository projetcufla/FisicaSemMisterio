export const formatNumber = (num: number, decimals: number = 2): string => {
  return num.toFixed(decimals);
};

export const degToRad = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

export const radToDeg = (radians: number): number => {
  return (radians * 180) / Math.PI;
};

export const calculateKineticEnergy = (mass: number, velocity: number): number => {
  return 0.5 * mass * velocity * velocity;
};

export const calculatePotentialEnergy = (mass: number, gravity: number, height: number): number => {
  return mass * gravity * height;
};

export const calculateRotationalKineticEnergy = (momentOfInertia: number, angularVelocity: number): number => {
  return 0.5 * momentOfInertia * angularVelocity * angularVelocity;
};