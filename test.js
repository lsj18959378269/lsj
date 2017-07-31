var data = require('../config/qa.js')
var request = require('supertest');
var url = data.url;

describe("test", function(){
	it('alliance/Ins22571', function(done){
		request(url[0])
			.get('/')
			.expect(200)
			.end(function(error, res){
				console.log(res['body']);
				if(error){
					throw error;
				}
				done();
			})
	})
	it('alliance/aon191000', function(done){
		request(url[1])
			.get('/')
			.expect(200)
			.end(function(error, res){
				console.log(res['body']);
				if(error){
					throw error;
				}
				done();
			})
	})


})