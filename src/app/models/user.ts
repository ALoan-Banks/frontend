export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    dateOfBirth: string;
    address: string;

    constructor(
        _id: number,
        _email: string,
        _password: string,
        _firstName: string,
        _lastName: string,
        _phoneNumber: string,
        _dateOfBirth: string,
        _address: string
      ) {
        this.id = _id;
        this.email = _email;
        this.password = _password;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.phoneNumber = _phoneNumber;
        this.dateOfBirth = _dateOfBirth;
        this.address = _address;

    }
}
