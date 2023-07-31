import cuid2 from "@paralleldrive/cuid2";

type Subscriber<T> = (value: T) => void;

export class Subject<T> {
  subscribers = new Set<Subscriber<T>>();
  value: T;
  id: string;

  constructor(initialValue: T) {
    this.value = initialValue;
    this.id = cuid2.createId();
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
