type Subscriber<T> = (value: T) => void;

export class Subject<T> {
  subscribers = new Set<Subscriber<T>>();
  value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  next = (value: T) => {
    this.value = value;
    this.subscribers.forEach((sub) => sub(this.value));
  };

  getValue = () => {
    return this.value;
  };

  subscribe = (subscriber: Subscriber<T>) => {
    this.subscribers.add(subscriber);
    return () => this.subscribers.delete(subscriber);
  };
}
