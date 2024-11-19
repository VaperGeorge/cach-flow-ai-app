export interface SafeAreaInset {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface Button {
  type?: string;
  text: string;
  color: string;
  textColor: string;
  isVisible: boolean;
  isProgressVisible: boolean;
  isActive: boolean;
  hasShineEffect: boolean;
  position?: string; // Optional since it's only in SecondaryButton
}

export interface BiometricManager {
  isInited: boolean;
  isBiometricAvailable: boolean;
  biometricType: string;
  isAccessRequested: boolean;
  isAccessGranted: boolean;
  isBiometricTokenSaved: boolean;
  deviceId: string;
}

export interface Sensor {
  isStarted: boolean;
  x: number | null;
  y: number | null;
  z: number | null;
}

export interface DeviceOrientation extends Sensor {
  absolute: boolean;
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
}

export interface LocationManager {
  isInited: boolean;
  isLocationAvailable: boolean;
  isAccessRequested: boolean;
  isAccessGranted: boolean;
}

export interface TelegramWebApp {
  initData: string;
  initDataUnsafe: Record<string, unknown>;
  version: string;
  platform: string;
  colorScheme: string;
  themeParams: Record<string, unknown>;
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  safeAreaInset: SafeAreaInset;
  contentSafeAreaInset: SafeAreaInset;
  isClosingConfirmationEnabled: boolean;
  isVerticalSwipesEnabled: boolean;
  isFullscreen: boolean;
  isOrientationLocked: boolean;
  isActive: boolean;
  bottomBarColor: string;
  BackButton: {
    isVisible: boolean;
  };
  MainButton: Button;
  SecondaryButton: Button;
  SettingsButton: {
    isVisible: boolean;
  };
  HapticFeedback: Record<string, unknown>;
  CloudStorage: Record<string, unknown>;
  BiometricManager: BiometricManager;
  Accelerometer: Sensor;
  DeviceOrientation: DeviceOrientation;
  Gyroscope: Sensor;
  LocationManager: LocationManager;
}
