/*
const ApiTreeService = require('../classes/ApiTreeService');

describe("Api connection test",() =>{


    const treeInstanceWhenTreeIsNull = {
        "value": 5,
        "left": null,
        "right": null
    };

    const initialTree = {
        "value": 3,
        "left": null,
        "right": null
    };
    const treeInstanceWhenTreeIsNotNullRight = {
        "value": 3,
        "right": {
            "value": 5,
            "left": null,
            "right": null
        },
        "left": null
    }

    const treeInstanceWhenTreeIsNotNullLeft = {
        "value": 3,
        "right": null,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        }
    }
    const baseUrl = "http://localhost:8080/api/operations/";

    test('Api connection is stablish', async () => {
        const response = await fetch(baseUrl+"/helloWorld", {
            method: "GET"
        });
        const data = await response.json();
        expect(data).toBe("Hello world");
        expect(response.status).toBe(200);
    });

    test('It should return a 400 status code with a message error when it sends an wrong field', async() => {
        const response = await fetch(baseUrl+"/insertValue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "value": "5",
                "stuff": "Nope"
            })
        });
        const message = await response.json();
        expect(response.status).toBe(400);
        expect(message).toBe("Your JSON payload is expected to at least contain two fields named `tree` and `value`");
    });

    test('It should return a 400 status code with a message error when it sends the field value with a different type from int ', async() => {
        const response = await fetch(baseUrl+"/insertValue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "value": "x",
                "stuff": "Nope"
            })
        });
        const message = await response.json();
        expect(response.status).toBe(400);
        expect(message).toBe("Your JSON payload is expected to at least contain two fields named `tree` and `value`");
    });

    test('It should return a 200 status code and the value should be the root of a new tree ', async() => {

        const response = await fetch(baseUrl+"/insertValue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "value": 5,
                "tree": null
            })
        });

        const message = await response.json();
        expect(response.status).toBe(200);
        expect(message).toEqual(treeInstanceWhenTreeIsNull);
    });

    test('It should return a 200 status code and the value should be added to the right ', async() => {

        const response = await fetch(baseUrl+"/insertValue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "value": 5,
                "tree": initialTree
            })
        });

        const message = await response.json();
        expect(response.status).toBe(200);
        expect(message).toEqual(treeInstanceWhenTreeIsNotNullRight);
    });

    test('It should return a 200 status code and the value should be added to the left ', async() => {

        const response = await fetch(baseUrl+"/insertValue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "value": 1,
                "tree": initialTree
            })
        });

        const message = await response.json();
        expect(response.status).toBe(200);
        expect(message).toEqual(treeInstanceWhenTreeIsNotNullLeft);
    });
    
});

*/