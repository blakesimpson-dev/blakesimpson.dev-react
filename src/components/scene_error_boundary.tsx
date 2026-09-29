import {Component} from 'react';
import type {ReactNode} from 'react';

interface SceneErrorBoundaryProps {
  children: ReactNode;
  onError: () => void;
}

interface SceneErrorBoundaryState {
  hasError: boolean;
}

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
