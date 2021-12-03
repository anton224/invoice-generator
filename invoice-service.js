var easyinvoice = require('easyinvoice');

var fs = require('fs');

var data = {

    "client": {
        "company": "Client Corp",
        "address": "Clientstreet 456",
        "zip": "4567 CD",
        "city": "Clientcity",
        "country": "Clientcountry"
    },

    "sender": {
        "company": "Sample Corp",
        "address": "Sample Street 123",
        "zip": "1234 AB",
        "city": "Sampletown",
        "country": "Samplecountry"
    },
    logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",

    "invoiceNumber": "2021.0001",
    "invoiceDate": "1.1.2021",
    "products": [
        {
            "quantity": "2",
            "description": "Test1",
            "tax": 6,
            "price": 33.87
        },
        {
            "quantity": "4",
            "description": "Test2",
            "tax": 21,
            "price": 10.45
        }
    ],

    "bottomNotice": "Kindly pay your invoice within 15 days.",
    "currency": "USD",
    "taxNotation": "vat",
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
};

easyinvoice.createInvoice(data, function (result) {
    var pdf = result.pdf;

    fs.writeFileSync("invoice.pdf", pdf, 'base64');
});