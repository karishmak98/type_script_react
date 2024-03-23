//------------------TYPES-----------//


let userName:string;

userName='MAX';



let userAge=3

let isValid=true

//string,number,boolean



//********union*****//
type StringNumBoolean=string|number|boolean

let userID:StringNumBoolean='abc'
userID=123
userID=true


//******objects*****//

type User={                         //object types
    name:string,
    age:number,
    isAdmin:boolean,
    id:string
}

let user:User

user={
    name:'Max',
    age:34,
    isAdmin:true,
    id:'abc'
}


//******Array*****//

// let hobbies:Array<string>;
let hobbies:string[];   //number[]

//{name:string,age:number}[]

hobbies=['sports','movies','reading']


//********functions*********//
function add(a:number,b:number):number{
const result=a+b;
console.log(result);
return result
}


//********Custom types*********//
type AddFn=(a:number,b:number)=>number

//*****function called as param in another function****//
function calculate(a:number,b:number,calcFn:AddFn){
    const result=calcFn(a,b);
    console.log(result);
}

calculate(10,20,add);


//************Interfaces*********//
interface Credentials{
    password:string,
    email:string
}

let creds:Credentials

creds={
    password:'<PASSWORD>',
    email:'<EMAIL>'
}

class AuthCredentials implements Credentials{
    password: string;
    email: string;
    userName:string;
}

function login(credentials:Credentials){

}

// login(creds)  //can also be called
login(new AuthCredentials())  //it is also be called as instance of AuthCredentials


//***********Merging types***********//

type Admin={
    permission:string[]
}

type AppUser={
    userName:string;
}

type AppAdmin=Admin & AppUser

let admin:AppAdmin

admin={
    userName:'Max',
    permission:['admin']
}

//***********Merging in interface***********//

interface AdminInterface{
    permission:string[]
}

interface AppUserInterface{
    userName:string;
}

interface AppAdminInterface extends AdminInterface,AppUserInterface{}

let adminInterface:AppAdminInterface

adminInterface={
    userName:'Max',
    permission:['admin']
}

//***********Built in Generic types***********//
type Role='admin'|'employee'
let roles:Array<Role>;
roles=['admin','employee']

//**********Custom Generic type *******//

type DataStorage<T>={
    storage:T[];
    add:(data:T)=>void;
};

const textStorage:DataStorage<string>={
    storage:[],
    add:(data:string)=>{
        this.storage.push(data);
    }
}

const userStorage:DataStorage<User>={
    storage:[],
    add:(data:User)=>{
        this.storage.push(data);
    }
}