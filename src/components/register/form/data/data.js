const schema = {
    "title": "Register It-Beaum",
    "type": "object",
    "required": [
        "firstName",
        "lastName"
    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "First Name"
        },
        "lastName": {
            "type": "string",
            "title": "Last Name"
        },
        "age": {
            "type": "integer",
            "title": "Age"
        },
        "job": {
            "type": "string",
            "title": "Job"
        },
        "telephone": {
            "type": "string",
            "title": "Telephone",
            "minLength": 10
        }
    }
}


const UISchema = {
    "firstName": {
        "ui:autofocus": true,
        "ui:emptyValue": ""
    },
    "age": {
        "ui:widget": "updown",
        "ui:description": "(earthian year)"
    },

    "date": {
        "ui:widget": "alt-datetime"
    },
    "telephone": {
        "ui:options": {
            "inputType": "tel"
        }
    }
}


export { schema, UISchema };
