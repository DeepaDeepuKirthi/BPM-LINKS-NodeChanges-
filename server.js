var express = require('express');
var app = express();
var mysql = require('mysql');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//app.set('views', './src/views');
var path = require('path');
app.use(express.static(path.resolve('./public')));
var routes=require('./routes');

app.get('/',routes.home);
app.get('/about', function(req, res) {
    res.render('about');
});

//var db = require('./db');


var msg = require('./model/db2.js');
app.get('/myaction', function(req, res) {
	 msg.query("SELECT * FROM productList", function (err, result, fields) {
		    if (err) throw err;
		    var data=result;
		    console.log(data);
		    res.render('index.ejs',{data:data});
		  });
});
app.get('/action1', function(req, res) {
				var productName=req.query.productName;
			var barCode=req.query.barCode;
			var productPrice=req.query.productPrice;
			var productType=req.query.productType;
			//console.log(productType);
			var productTax=req.query.priceTax;
		var user=[[productName,barCode,productPrice,productType,productTax]];
		msg.query("insert into product (productName,barCode,productPrice,productType,productTax) values ?",[user],function(err, result)      
		{                                                      
		  if (err)
		    console.log("data not inserted");
		  else
			  console.log([user]);
		 res.write("sucessfully Inserted....!!!"); 
		  res.end();
		});
	
		
});

app.listen(8008,function(){
	console.log("server runnig successfully");
});


