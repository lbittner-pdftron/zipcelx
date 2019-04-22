/**
  Basic working multi-sheet config
*/

export default {
  filename: 'report',
  sheets: [
    {
      sheetname: 'testSheet',
      data: [
        [{
          value: 'Test',
          type: 'string'
        }, {
          value: 1000,
          type: 'number'
        }]
      ]
    }
  ]
};
