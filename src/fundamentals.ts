// import "./scss/styles.scss";
/**
 * Variable and Data type
 */

// tslint:disable

/**
 * var vs let/const
 */
/*
function main() {
  console.log("START");
  if (true) {
    var lang = "vi";
    let target = "en-us";
    console.log("inside block");
    console.log(target);
  }
  console.log(lang);
  console.log(target);
}
 */
/*
function main() {
  var x = 5;
  console.log(x);
  var x = 10;
  console.log(x);

  let y = 55;
  console.log(y);
  let y = 100;
  console.log(y);
}
*/

/*
function main() {
  console.log(x);
  var x = 5;

  console.log(y);
  let y = 10;
}
 */

/**
 * Data types
 */

/*
function main() {
  let message: string;
  let total: number = 100;
  let isProduction = true;
  let prices: Array<number> = [120, 88, 60];
  let languages: string[] = ['vi', 'en-us'];
  let now = new Date();
  let unknown: any;

  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
  };

  function log(msg: string): void {
    console.log(msg)
  }

  interface IPost {
    id: string;
    title: string;
    body?: string;
  }

  isProduction = false;
  unknown = Direction.UP;
  unknown = 'changed';

  const post: IPost = {

  };
  message = 50;

  function getPost(postId: string): IPost {
    // do something to retrieve post
    return {
      id: postId,
      title: 'Post Title',
      body: 'Post Body',
      extra: 'data'
    } as IPost;
  }
}
 */

function main() {
    // const list: number[] = [1,2,3,3.127];
    //
    // const listSquare = list.map(b => 6);
    // console.log(listSquare);
    //
    //
    // const categories: Array<string> = ['Sport', 'IT', 'Car'];
    // categories.forEach((str) => console.log(str.includes('r')) );
    //
    // const result = categories.filter(str => str == "IT");
    // console.log(result);
    //
    // let x: [string, number, boolean];
    // x = ["Chinh",10,true];
    // console.log(x[0].substr(3)); // OK
    // console.log(x[2].toString().substr(1));

    //
    // function add(a: number): Function {
    //     return function (b: number): number {
    //         return a + b;
    //     }
    // }
    //
    // const addWith5 = add(5);
    //  console.log(addWith5);
    // // console.log(add(5)(3));
    // // console.log(addWith5(15));
    interface IUser {
        name: string;
        age: number
    }

    let customer: IUser = { name: 'Bob',
        age: 50 };
    let customer2: IUser = { name: 'Chinh',
        age: 40 };


}

// tslint:enable
main();
