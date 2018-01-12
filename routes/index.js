var express = require('express');
var router = express.Router();

// index
router.get('/', (req, res, next) => {

  var data = {
      title: 'ログイン',
      content: 'メールアドレス',
      link_application: {href:'/application'},
  };    
           
  res.render('index', data);
});

module.exports = router;