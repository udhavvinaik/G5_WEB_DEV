const client = require('./client.js')

async function server() {
    const res1 = await client.set("bike:1", "Deimos");
    console.log(res1);  // OK

    const res2 = await client.get("bike:1");
    console.log(res2);  // Deimos


    const res5 = await client.mset(
        ["bike:1", "Deimos", "bike:2", "Ares", "bike:3", "Vanth"]
    );
    console.log(res5);  // OK


    const res6 = await client.mget("bike:1", "bike:2", "bike:3");
    console.log(res6);  // ['Deimos', 'Ares', 'Vanth']


    await client.set("total_crashes", 0);
    const res7 = await client.incr("total_crashes");
    console.log(res7); // 1
    const res8 = await client.incrby("total_crashes", 10);
    console.log(res8); // 11



    const user = {
    name: "Bob",
    // The value of a client key can not be a number.
    // We can write `age: 20` here but ioclient will convert it to a string anyway.
    age: "20",
    description: "I am a programmer",
    };

    await client.mset(user);

    const name = await client.get("name");
    console.log(name); // "Bob"

    const age = await client.get("age");
    console.log(age); // "20"

    const all = await client.mget("name", "age", "description");
    console.log(all); // [ 'Bob', '20', 'I am a programmer' ]

    // or `await client.del("name", "description")`;
    await client.del(["name", "description"]);

    const exists = await client.exists("name");
    console.log(exists); // 0 (means false, and if it's 1, it means true)

    await client.incrby("age", 1);
    const newAge = await client.get("age");
    console.log(newAge); // 21

    await client.set("key_with_ttl", "hey", "EX", 1000);
    const ttl = await client.ttl("key_with_ttl");
    console.log(ttl); // a number smaller or equal to 1000
}

server();
