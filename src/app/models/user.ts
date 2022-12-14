export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    dob: string;
    address: string;

    constructor(
        _id: number,
        _email: string,
        _password: string,
        _firstName: string,
        _lastName: string,
        _phone: string,
        _dob: string,
        _address: string
      ) {
        this.id = _id;
        this.email = _email;
        this.password = _password;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.phone = _phone;
        this.dob = _dob;
        this.address = _address;

    }
}
