
// 1)******************
// //a. Write a MongoDB query to find the restaurants that achieved a score is more
// than 80 but less than 100.
[
  {
    '$match': {
      'grades': {
        '$elemMatch': {
          'score': {
            '$gt': 2,
            '$lt': 10
          }
        }
      }
    }
  }
]


// 2)*****************************
// b. Write a MongoDB query to find the restaurants which do not prepare any
// cuisine of 'American ' and achieved a grade point 'A' not belongs to the
// borough Brooklyn.
// The document must be displayed according to the cuisine in descending
// order



[
    {
      '$match': {
        'cuisine': {
          '$ne': 'American'
        },
        'borough': {
          '$ne': 'Brooklyn'
        },
        'grades': {
          '$elemMatch': {
            'grade': 'A'
          }
        }
      }
    }, {
      '$sort': {
        'cuisine': -1
      }
    }
  ]
  
// 3)********************************
//   Write a MongoDB query to find the restaurant name, borough, longitude and
// attitude and cuisine for those restaurants which contain 'Mad' as first three letters
// of its name.

[
    {
      '$match': {
        'name': {
          '$regex': new RegExp('^M')
        }
      }
    }, {
      '$project': {
        'name': 1,
        'borough': 1,
        'address.coord': 1,
        'cuisine': 1
      }
    }
  ]