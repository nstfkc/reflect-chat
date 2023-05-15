export type Observer<T> = (value: T) => void;

export type Subscription = {
  unsubscribe: () => void;
};

export type Subscriber<T> = (value: T) => any;
export class Subject<T> {
  counter = 0;
  value: T = null as any;
  subscribers: { [key: string]: Subscriber<T> } = {};
  constructor(value: T) {
    this.value = value;
  }

  next = (nextValue: T): void => {
    this.value = nextValue;
    Object.values(this.subscribers).forEach((subscriber: Subscriber<T>) =>
      subscriber(nextValue)
    );
  };

  subscribe = (fn: Subscriber<T>): Subscription => {
    this.counter++;
    const index = `${this.counter}`;
    this.subscribers[index] = fn;
    return {
      unsubscribe: () => {
        delete this.subscribers[index];
      },
    };
  };

  destroy = (): void => {
    this.value = null as any;
  };

  getValue = (): T => this.value;
}
