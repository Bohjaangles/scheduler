[
  {
    "data": [
      {
        "id": 1,
        "name": "Monday",
        "appointments": [
          1,
          2,
          3,
          4,
          5
        ],
        "interviewers": [
          1,
          4,
          5,
          6,
          8
        ],
        "spots": 3
      },
      {
        "id": 2,
        "name": "Tuesday",
        "appointments": [
          6,
          7,
          8,
          9,
          10
        ],
        "interviewers": [
          4,
          6,
          8,
          9,
          10
        ],
        "spots": 3
      },
      {
        "id": 3,
        "name": "Wednesday",
        "appointments": [
          11,
          12,
          13,
          14,
          15
        ],
        "interviewers": [
          1,
          3,
          5,
          6,
          7
        ],
        "spots": 2
      },
      {
        "id": 4,
        "name": "Thursday",
        "appointments": [
          16,
          17,
          18,
          19,
          20
        ],
        "interviewers": [
          1,
          2,
          4,
          8,
          9
        ],
        "spots": 4
      },
      {
        "id": 5,
        "name": "Friday",
        "appointments": [
          21,
          22,
          23,
          24,
          25
        ],
        "interviewers": [
          1,
          3,
          5,
          6,
          10
        ],
        "spots": 3
      }
    ],
    "status": 200,
    "statusText": "OK",
    "headers": {
      "access-control-allow-origin": "*",
      "content-length": "470",
      "content-type": "application/json; charset=utf-8",
      "date": "Fri, 02 Dec 2022 05:56:23 GMT",
      "etag": "W/\"1d6-jopU0Q35pijsxMnyaPmdvy8AQo4\"",
      "strict-transport-security": "max-age=15552000; includeSubDomains",
      "vary": "Accept-Encoding",
      "x-content-type-options": "nosniff",
      "x-dns-prefetch-control": "off",
      "x-download-options": "noopen",
      "x-frame-options": "SAMEORIGIN",
      "x-powered-by": "Express",
      "x-xss-protection": "1; mode=block"
    },
    "config": {
      "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
      },
      "adapter": [
        "xhr",
        "http"
      ],
      "transformRequest": [
        null
      ],
      "transformResponse": [
        null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {},
      "headers": {
        "Accept": "application/json, text/plain, */*"
      },
      "method": "get",
      "url": "/api/days"
    },
    "request": {}
  },
  {
    "data": {
      "1": {
        "id": 1,
        "time": "12pm",
        "interview": null
      },
      "2": {
        "id": 2,
        "time": "1pm",
        "interview": {
          "student": "Archie Cohen",
          "interviewer": 8
        }
      },
      "3": {
        "id": 3,
        "time": "2pm",
        "interview": null
      },
      "4": {
        "id": 4,
        "time": "3pm",
        "interview": null
      },
      "5": {
        "id": 5,
        "time": "4pm",
        "interview": {
          "student": "Chad Takahashi",
          "interviewer": 8
        }
      },
      "6": {
        "id": 6,
        "time": "12pm",
        "interview": null
      },
      "7": {
        "id": 7,
        "time": "1pm",
        "interview": {
          "student": "Jamal Jordan",
          "interviewer": 8
        }
      },
      "8": {
        "id": 8,
        "time": "2pm",
        "interview": {
          "student": "Leopold Silvers",
          "interviewer": 8
        }
      },
      "9": {
        "id": 9,
        "time": "3pm",
        "interview": null
      },
      "10": {
        "id": 10,
        "time": "4pm",
        "interview": null
      },
      "11": {
        "id": 11,
        "time": "12pm",
        "interview": {
          "student": "Liam Martinez",
          "interviewer": 6
        }
      },
      "12": {
        "id": 12,
        "time": "1pm",
        "interview": {
          "student": "Lydia Miller-Jones",
          "interviewer": 6
        }
      },
      "13": {
        "id": 13,
        "time": "2pm",
        "interview": null
      },
      "14": {
        "id": 14,
        "time": "3pm",
        "interview": null
      },
      "15": {
        "id": 15,
        "time": "4pm",
        "interview": {
          "student": "Maria Boucher",
          "interviewer": 5
        }
      },
      "16": {
        "id": 16,
        "time": "12pm",
        "interview": {
          "student": "Michael Chan-Montoya",
          "interviewer": 8
        }
      },
      "17": {
        "id": 17,
        "time": "1pm",
        "interview": null
      },
      "18": {
        "id": 18,
        "time": "2pm",
        "interview": null
      },
      "19": {
        "id": 19,
        "time": "3pm",
        "interview": null
      },
      "20": {
        "id": 20,
        "time": "4pm",
        "interview": null
      },
      "21": {
        "id": 21,
        "time": "12pm",
        "interview": {
          "student": "Richard Wong",
          "interviewer": 6
        }
      },
      "22": {
        "id": 22,
        "time": "1pm",
        "interview": null
      },
      "23": {
        "id": 23,
        "time": "2pm",
        "interview": null
      },
      "24": {
        "id": 24,
        "time": "3pm",
        "interview": null
      },
      "25": {
        "id": 25,
        "time": "4pm",
        "interview": {
          "student": "Yuko Smith",
          "interviewer": 3
        }
      }
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
      "access-control-allow-origin": "*",
      "content-encoding": "gzip",
      "content-type": "application/json; charset=utf-8",
      "date": "Fri, 02 Dec 2022 05:56:23 GMT",
      "etag": "W/\"5e8-Qy65I1ztWEBUkJBCFTjXYhZG4PE\"",
      "strict-transport-security": "max-age=15552000; includeSubDomains",
      "vary": "Accept-Encoding",
      "x-content-type-options": "nosniff",
      "x-dns-prefetch-control": "off",
      "x-download-options": "noopen",
      "x-frame-options": "SAMEORIGIN",
      "x-powered-by": "Express",
      "x-xss-protection": "1; mode=block"
    },
    "config": {
      "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
      },
      "adapter": [
        "xhr",
        "http"
      ],
      "transformRequest": [
        null
      ],
      "transformResponse": [
        null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {},
      "headers": {
        "Accept": "application/json, text/plain, */*"
      },
      "method": "get",
      "url": "/api/appointments"
    },
    "request": {}
  },
  {
    "data": {
      "1": {
        "id": 1,
        "name": "Sylvia Palmer",
        "avatar": "https://i.imgur.com/LpaY82x.png"
      },
      "2": {
        "id": 2,
        "name": "Tori Malcolm",
        "avatar": "https://i.imgur.com/Nmx0Qxo.png"
      },
      "3": {
        "id": 3,
        "name": "Mildred Nazir",
        "avatar": "https://i.imgur.com/T2WwVfS.png"
      },
      "4": {
        "id": 4,
        "name": "Cohana Roy",
        "avatar": "https://i.imgur.com/FK8V841.jpg"
      },
      "5": {
        "id": 5,
        "name": "Sven Jones",
        "avatar": "https://i.imgur.com/twYrpay.jpg"
      },
      "6": {
        "id": 6,
        "name": "Susan Reynolds",
        "avatar": "https://i.imgur.com/TdOAdde.jpg"
      },
      "7": {
        "id": 7,
        "name": "Alec Quon",
        "avatar": "https://i.imgur.com/3tVgsra.jpg"
      },
      "8": {
        "id": 8,
        "name": "Viktor Jain",
        "avatar": "https://i.imgur.com/iHq8K8Z.jpg"
      },
      "9": {
        "id": 9,
        "name": "Lindsay Chu",
        "avatar": "https://i.imgur.com/nPywAp1.jpg"
      },
      "10": {
        "id": 10,
        "name": "Samantha Stanic",
        "avatar": "https://i.imgur.com/okB9WKC.jpg"
      }
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
      "access-control-allow-origin": "*",
      "content-length": "781",
      "content-type": "application/json; charset=utf-8",
      "date": "Fri, 02 Dec 2022 05:56:23 GMT",
      "etag": "W/\"30d-3H0+hNLeoDR8/s+XemQgOCUbXbg\"",
      "strict-transport-security": "max-age=15552000; includeSubDomains",
      "vary": "Accept-Encoding",
      "x-content-type-options": "nosniff",
      "x-dns-prefetch-control": "off",
      "x-download-options": "noopen",
      "x-frame-options": "SAMEORIGIN",
      "x-powered-by": "Express",
      "x-xss-protection": "1; mode=block"
    },
    "config": {
      "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
      },
      "adapter": [
        "xhr",
        "http"
      ],
      "transformRequest": [
        null
      ],
      "transformResponse": [
        null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {},
      "headers": {
        "Accept": "application/json, text/plain, */*"
      },
      "method": "get",
      "url": "/api/interviewers"
    },
    "request": {}
  }
]