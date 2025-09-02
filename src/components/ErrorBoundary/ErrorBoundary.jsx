import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <AlertTriangle size={48} />
            </div>
            
            <h1 className={styles.title}>Oops! Something went wrong</h1>
            
            <p className={styles.message}>
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            
            <button 
              onClick={this.handleReload}
              className={styles.reloadButton}
            >
              <RefreshCw size={20} />
              Reload Page
            </button>

            {process.env.NODE_ENV === 'development' && (
              <details className={styles.errorDetails}>
                <summary className={styles.errorSummary}>Error Details</summary>
                <pre className={styles.errorText}>
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;