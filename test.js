var data = require('../config/qa.js')
var request = require('supertest');
var url = data.url;

describe("test", function(){
	it('asec', function(done){
		request(url)
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