export class Authority {

  constructor(private _email: string, private _role: string) {
    this._email = _email;
    this._role = _role;
  }


  get email(): string {
    return this._email;
  }

  get role(): string {
    return this._role;
  }
}
