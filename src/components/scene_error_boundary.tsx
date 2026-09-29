import {Component} from 'react';
import type {ReactNode} from 'react';

interface SceneErrorBoundaryProps {
  children: ReactNode;
  /** Called when the scene fails, e.g. WebGL is unavailable. */
  onError: () => void;
}

interface SceneErrorBoundaryState {
  hasError: boolean;
}

/**
 * Renders nothing if the 3D scene throws, so the menu and pages still work
 * on the plain panel background.
 */
export class SceneErrorBoundary extends Component<
  SceneErrorBoundaryProps,
  SceneErrorBoundaryState
> {
  override state: SceneErrorBoundaryState = {hasError: false};

  static getDerivedStateFromError(): SceneErrorBoundaryState {
    return {hasError: true};
  }

  override componentDidCatch() {
    this.props.onError();
  }

  override render() {
    return this.state.hasError ? null : this.props.children;
  }
}
