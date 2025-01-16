class Persona<T> {
  private name: string;
  private lastName: string;
  private email: string;
  private friend: T;

  constructor(name: string, lastName: string, email: string, friend: T) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.friend = friend;	
  }

  get getName() {
    return this.lastName;
  }

  private saludar(name: string, lastName: string, email: string) {
    console.log(`Hola ${this.name}`);
  }
}

const persona = new Persona<IPersona>("Jacobo", "Garces", "jacobo.garces@gmail.com", {
  name: "Jacobo",
  lastName: "Garces",
  email: "jacobo.garces@gmail.com",
  saludar(name: string, lastName: string, email: string) {
    console.log(`Hola ${name}`);
  },
});

console.log(persona.getName);

const personas: Persona[] = [];

personas.push(persona);

interface IPersona {
  name: string;
  lastName: string;
  email: string;
  saludar(name: string, lastName: string, email: string): void;
}

const personas2: IPersona[] = [
  {
    name: "Jacobo",
    lastName: "Garces",
    email: "jacobo.garces@gmail.com",
    saludar(name: string, lastName: string, email: string) {
      console.log(`Hola ${name}`);
    },
  }
];

type Args = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "Hola mundo";

const varrrr: any = 0;

function foo(callback: (...args: Args[]) => void) {
  callback(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Hola mundo");
}

interface IService {
  get<T>(id: number): Promise<T>;
}

const service: IService = {
  get<T>(id: number): Promise<T> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1 as T);
      }, 1000);
    });
  },
};

service.get<number>(72)