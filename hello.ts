/**
 * Created by LiYN on 2016/12/15.
 */
import * as _ from 'lodash';

function sayHello(name: string) {
    return 'Hello, ' + name;
}

let myName = 'Cheng Wang';

console.log(sayHello(myName));



console.log(_.camelCase('Hello World'));