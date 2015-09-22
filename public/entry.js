import {Person} from './model/Person';

let logMe = () => console.log(new Person('Anthony', 'Giniers').fullName);

logMe();