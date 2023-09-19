// {Max: {age: 23, city: “London”}, Mike: {age: 20: city: “NY”}}

function findUser(initialObject) {
    
    const result = []

    for(const name in initialObject){
        const data = initialObject[name];

        if(data.age > 18  && data.city === 'London'){
            result.push(name)
        }
    }
    console.log(result)
}

findUser({Max: {age: 23, city:"London"}, Mike: {age: 20, city: "NY"}})