exports.seed = function (knex, Promise) {
  return knex('donors').del()
    .then(function () {
      return Promise.all([
        knex('donors').insert({id: 1, name: 'Edi', amount: '25'}),
        knex('donors').insert({id: 2, name: 'Maia', amount: '40'}),
        knex('donors').insert({id: 3, name: 'Jess', amount: '30'}),
        knex('donors').insert({id: 4, name: 'James', amount: '50'}),
        knex('donors').insert({id: 5, name: 'Nick', amount: '20'}),
        knex('donors').insert({id: 6, name: 'Phuong', amount: '40'}),
        knex('donors').insert({id: 7, name: 'Mel', amount: '40'}),
        knex('donors').insert({id: 8, name: 'Guy', amount: '25'}),
        knex('donors').insert({id: 9, name: 'Hayden', amount: '30'}),
        knex('donors').insert({id: 10, name: 'Brian', amount: '20'}),
        knex('donors').insert({id: 11, name: 'Harrison', amount: '40'}),
        knex('donors').insert({id: 12, name: 'Ross', amount: '100'}),
        knex('donors').insert({id: 13, name: 'Josh', amount: '30'}),
        knex('donors').insert({id: 14, name: 'Sarah', amount: '25'}),
        knex('donors').insert({id: 15, name: 'Matti', amount: '30'}),
        knex('donors').insert({id: 16, name: 'Kubo', amount: '20'}),
        knex('donors').insert({id: 17, name: 'Louis', amount: '40'}),
        knex('donors').insert({id: 18, name: 'Russ', amount: '30'}),
        knex('donors').insert({id: 19, name: 'Lis', amount: '35'}),
        knex('donors').insert({id: 20, name: 'Jeremy', amount: '40'}),
        knex('donors').insert({id: 21, name: 'Hugo', amount: '60'}),
        knex('donors').insert({id: 22, name: 'Lisa', amount: '30'}),
        knex('donors').insert({id: 23, name: 'Bart', amount: '35'}),
        knex('donors').insert({id: 24, name: 'Marge', amount: '25'}),
        knex('donors').insert({id: 25, name: 'Homer', amount: '20'})
      ])
    })
}
