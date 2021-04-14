namespace App {
  // Autobind decorator
  export function Autobind(_target: any, _mehtodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      }
    }
    return adjustedDescriptor;
  }
}