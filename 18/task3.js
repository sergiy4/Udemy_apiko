// 1 варіант
// Дано: код в якому необхідно знайти помилку і виправити її
// Результат: вивести в консоль “meow”
const cat = {
    sound: 'meow',
    greet: function() {

        let context = this

      setTimeout(function() {
          console.log(context.sound)
      }, // write fix in this line of code
      0)

    }
};

cat.greet();

// 2 варіант
const cat2 = {
    sound: 'meow',
    greet: function() {


    setTimeout(()=>{
        console.log(this.sound)
    },0)

    }
};

cat2.greet();