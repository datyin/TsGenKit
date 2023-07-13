type ListenerCallback<T = any> = (data: T) => void;
type AsyncListenerCallback<T = any> = (data: T) => Promise<void>;

class Emitter {
  #events: {[key: string]: (ListenerCallback | AsyncListenerCallback)[]} = {};

  constructor() {
    this.#events = {};
  }

  public on<T>(event: string, listener: ListenerCallback<T> | AsyncListenerCallback<T>): void {
    if (!this.#events[event]) {
      this.#events[event] = [];
    }

    this.#events[event].push(listener);
  }

  public emit<T>(event: string, data: T): void {
    if (!this.#events[event]) {
      return;
    }

    this.#events[event].forEach(listener => listener(data));
  }

  public off(event: string, listener: undefined | ListenerCallback | AsyncListenerCallback = undefined): void {
    if (!this.#events[event]) {
      return;
    }

    if (listener != null) {
      const index = this.#events[event].indexOf(listener);

      if (index !== -1) {
        this.#events[event].splice(index, 1);
      }
    }
    else {
      if (event in this.#events) {
        delete this.#events[event];
      }
    }
  }

  public destroy(): void {
    this.#events = {};
  }
}

const emitter = new Emitter();

export default emitter;
