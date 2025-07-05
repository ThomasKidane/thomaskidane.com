declare module 'animated-backgrounds' {
  export interface LayerConfig {
    animation: string;
    opacity: number;
    blendMode: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    speed: number;
  }

  export interface InteractionConfig {
    effect: 'attract' | 'repel' | 'follow' | 'burst' | 'gravity' | 'magnetic' | 'vortex' | 'wave';
    strength: number;
    radius: number;
    continuous: boolean;
    multiTouch: boolean;
  }

  export interface AnimatedBackgroundProps {
    animationName: string;
    theme?: string;
    interactive?: boolean;
    interactionConfig?: InteractionConfig;
    adaptivePerformance?: boolean;
    fps?: number;
    style?: React.CSSProperties;
  }

  export interface LayeredBackgroundProps {
    layers: LayerConfig[];
  }

  export const AnimatedBackground: React.FC<AnimatedBackgroundProps>;
  export const LayeredBackground: React.FC<LayeredBackgroundProps>;
} 