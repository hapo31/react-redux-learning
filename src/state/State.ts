export type NonNullable = number | string | any;
export type KeyIndexable<T> = { [key: string]: T };

export class State<T extends KeyIndexable<NonNullable>> {
  [key: string]: NonNullable;

  equals(state: KeyIndexable<T>) {
    return Object.keys(this).every(key => {
      return this[key] === state[key];
    });
  }

  update(state: any) {
    return Object.assign(this, state);
  }
}
