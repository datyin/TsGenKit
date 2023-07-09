type ListenerCallback = (data: any) => void;

class Emitter {
  #events: {[key: string]: ListenerCallback[]} = {};

  constructor() {
    this.#events = {};
  }

  public on(event: string, listener: ListenerCallback): void {
    if (!this.#events[event]) {
      this.#events[event] = [];
    }

    this.#events[event].push(listener);
  }

  public emit(event: string, data: any): void {
    if (!this.#events[event]) {
      return;
    }

    this.#events[event].forEach(listener => listener(data));
  }

  public off(event: string, listener: undefined | ListenerCallback = undefined): void {
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
