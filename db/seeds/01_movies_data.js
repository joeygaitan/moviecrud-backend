
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'matrix', director: 'Lana Wachowski', years: 2003, rating: 4,picture_url: 'blah'},
        {id: 2, title: 'irobot', director: 'Alex Proyas', years: 2004, rating: 3,picture_url: 'blah'},
        {id: 3, title: 'titanic', director: 'James Cameron', years: 1997, rating: 4,picture_url: 'blah'}
      ])
    })
    .then(()=>{
      return knex.raw(`SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));`)
    })
};
