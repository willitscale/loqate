### Restored version due to the original being deleted

# @willitscale/loqate

## Description

A collection of utility functions to interact with the web services offered by [Loqate](https://www.loqate.com) (please note that an active account with [Loqate](https://www.loqate.com) is required to use this module).

## Homepage

[Github](https://github.com/willitscale/loqate#readme)

[NPM](https://www.npmjs.com/package/@willitscale/loqate)

## Installation

`npm i @willitscale/loqate`

## Usage

### `find`

Search on just about anything you know about an address. The most useful example is the full postcode, which will return a single result with the _container_ `id` for the postcode on [Loqate](https://www.loqate.com).

```javascript
'use strict'

const key = process.env.LOQATE_KEY
const { capture } = require('@willitscale/loqate')(key)

;(async () => {
  const result = await capture.find('tf50ne')
  console.log(result)
})()

```

```json
[
  {
    "Id": "GB|RM|ENG|0NE-TF5",
    "Type": "Postcode",
    "Text": "TF5 0NE",
    "Highlight": "0-3,4-7",
    "Description": "Span Meadow, Telford - 29 Addresses"
  }
]
```

### `container`

Use a postcode _container_ `id` (as found in `find` above), to return basic information on all the addresses at that postcode. Each will have a distinct `id`, that can be used to retrieve individual address records.

```javascript
'use strict'

const key = process.env.LOQATE_KEY
const { capture } = require('@willitscale/loqate')(key)

;(async () => {
  const result = await capture.container('GB|RM|ENG|0NE-TF5')
  console.log(result)
})()
```

```json
[
  {
    "Id": "GB|RM|A|24522142",
    "Type": "Address",
    "Text": "29 Span Meadow",
    "Highlight": "",
    "Description": "Telford, TF5 0NE"
  },
  {
    "Id": "GB|RM|A|24522143",
    "Type": "Address",
    "Text": "30 Span Meadow",
    "Highlight": "",
    "Description": "Telford, TF5 0NE"
  }
]
```

> _output truncated_

### `address`

Use an _address_ `id` (as found in a call to `container` above) to return the full details of that address record from the [Loqate](https://www.loqate.com) database.

```javascript
'use strict'

const key = process.env.LOQATE_KEY
const { capture } = require('@willitscale/loqate')(key)

;(async () => {
  const result = await capture.address('GB|RM|A|24522142')
  console.log(result)
})()
```

```json
[
  {
    "Id": "GB|RM|A|24522142",
    "DomesticId": "24522142",
    "Language": "ENG",
    "LanguageAlternatives": "ENG",
    "Department": "",
    "Company": "",
    "SubBuilding": "",
    "BuildingNumber": "29",
    "BuildingName": "",
    "SecondaryStreet": "",
    "Street": "Span Meadow",
    "Block": "",
    "Neighbourhood": "",
    "District": "",
    "City": "Telford",
    "Line1": "29 Span Meadow",
    "Line2": "",
    "Line3": "",
    "Line4": "",
    "Line5": "",
    "AdminAreaName": "Telford and Wrekin",
    "AdminAreaCode": "",
    "Province": "Shropshire",
    "ProvinceName": "Shropshire",
    "ProvinceCode": "",
    "PostalCode": "TF5 0NE",
    "CountryName": "United Kingdom",
    "CountryIso2": "GB",
    "CountryIso3": "GBR",
    "CountryIsoNumber": 826,
    "SortingNumber1": "50163",
    "SortingNumber2": "",
    "Barcode": "(TF50NE1A8)",
    "POBoxNumber": "",
    "Label": "29 Span Meadow\nTELFORD\nTF5 0NE\nUNITED KINGDOM",
    "Type": "Residential",
    "DataLevel": "Premise",
    "Field1": "",
    "Field2": "",
    "Field3": "",
    "Field4": "",
    "Field5": "",
    "Field6": "",
    "Field7": "",
    "Field8": "",
    "Field9": "",
    "Field10": "",
    "Field11": "",
    "Field12": "",
    "Field13": "",
    "Field14": "",
    "Field15": "",
    "Field16": "",
    "Field17": "",
    "Field18": "",
    "Field19": "",
    "Field20": ""
  }
]
```
