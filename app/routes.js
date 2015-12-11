var express = require('express');
var router = express.Router();

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

router.get('/', function (req, res) {
	res.render('index');
});

router.get('/moj/about-membership', function (req, res) {
	res.render('moj/about-membership');
});
 
router.post('/about-membership', function(req, res) {

  if (req.body.campaign) {
    req.session.campaign = req.body.campaign;
  } else {
    req.session.campaign = 'Default membership';
  }
  if (req.body.DRN) {
    req.session.DRN = req.body.DRN;
  } else {
    req.session.DRN = '1234567890';
  }
  
  res.redirect(301, '/moj/about-you');
});

router.get('/moj/about-you', function (req, res) {
	res.render('moj/about-you');
});
 
router.post('/about-you', function(req, res) {
  if (req.body.fullname) {
    req.session.fullname = req.body.fullname;
  } else {
    req.session.fullname = 'Mr Default Name';
  }
  if (req.body.address1) {
    req.session.address1 = req.body.address1;
  } else {
    req.session.address1 = '1 Default St';
  }
  if (req.body.address2) {
    req.session.address2 = req.body.address2;
  } else {
    req.session.address2 = 'Default Area';
  }
  if (req.body.address3) {
    req.session.address3 = req.body.address3;
  } else {
    req.session.address3 = 'Default Town';
  }
  if (req.body.address4) {
    req.session.address4 = req.body.address4;
  } else {
    req.session.address4 = 'Default County';
  }
  if (req.body.postcode) {
    req.session.postcode = req.body.postcode;
  } else {
    req.session.postcode = 'DF1 2PC';
  }

  res.redirect(301, 'moj/about-you-continue');
});

router.get('/moj/about-you-continue', function (req, res) {
	res.render('moj/about-you-continue');
});
 
router.post('/about-you-continue', function(req, res) {
  if (req.body.phone) {
    req.session.phone = req.body.phone;
  } else {
    req.session.phone = '01234 56789';
  }
  if (req.body.dobDay) {
    req.session.dobDay = req.body.dobDay;
  } else {
    req.session.dobDay = '1';
  }
  if (req.body.dobMonth) {
    req.session.dobMonth = req.body.dobMonth;
  } else {
    req.session.dobMonth = '1';
  }
  if (req.body.dobYear) {
    req.session.dobYear = req.body.dobYear;
  } else {
    req.session.dobYear = '1970';
  }
  if (req.body.nino) {
    req.session.nino = req.body.nino;
  } else {
    req.session.nino = 'ZZ654321A';
  }

  res.redirect(301, '/moj/commitment');
});

router.get('/moj/commitment', function (req, res) {
	res.render('moj/commitment');
});
 
router.post('/commitment', function(req, res) {
  if (req.body.commitment) {
    req.session.commitment = req.body.commitment;
  } else {
    req.session.commitment = true;
  }

  if (req.session.commitment) {
  	res.redirect(301, '/moj/item-detail');
  } else {
  	res.redirect(301, '/moj/commitment');
  }

});


router.get('/moj/item-detail', function (req, res) {
	res.render('moj/item-detail');
});
 
router.post('/item-detail', function(req, res) {
  
  req.session.item1TotalDue = 900;
  req.session.item2TotalDue = 1000;

  res.redirect(301, 'moj/cart-summary');
});

router.get('/moj/cart-summary', function (req, res) {
	res.render('moj/cart-summary');
});
 
router.post('/cart-summary', function(req, res) {
  
  res.redirect(301, 'moj/overall-summary');  
});

router.get('/moj/overall-summary', function (req, res) {
   
  p_grandTotalDue = 1900; //TODO - calculate it!

  res.render('moj/overall-summary',{
    campaign : req.session.campaign,
    DRN : req.session.DRN,
    indOrComp : req.session.indOrComp,
    fullname : req.session.fullname,
    address1 : req.session.address1,
    address2 : req.session.address2,
    address3 : req.session.address3,
    address4 : req.session.address4,
    postcode : req.session.postcode,
    phone : req.session.phone,
    dobDay : req.session.dobDay,
    dobMonth : months[req.session.dobMonth - 1],
    dobYear : req.session.dobYear,
    nino : req.session.nino,
    commitment : req.session.commitment,
    item1TotalDue : req.session.item1TotalDue,
    item2TotalDue : req.session.item2TotalDue,
    grandTotalDue : p_grandTotalDue,
    
  });
});
 
router.post('/overall-summary', function(req, res) {
  res.redirect(301, 'moj/overall-summary'); // TBC
});


module.exports = router;
