// 让后端的一些数据经过原始转换，提交给前端
var fs = require('fs');
exports.get_index_data = ()=>{
    var content = fs.readFileSync('./mock/home.json','utf-8');
    return content;
}

exports.get_test_data = ()=>{
    var content = fs.readFileSync('./mock/test.json','utf-8');
    return content;
};
exports.get_book_data = (id)=>{
    if (!id) {
        id='18218';
    }
    var content = fs.readFileSync('./mock/book/' + id +'.json','utf-8');
    return content;
};

exports.get_search_data = (start,end,keyword)=>{
    return new Promise((resolve,reject) => {
        var http = require('http');
        var qs = require('querystring');
        var data = {
            s:keyword,
            start:start,
            end:end
        }
        var content = qs.stringify(data);
        var http_request = {
            hostname:'dushu.xiaomi.com',
            port:80,
            path:'/store/v0/lib/query/onebox?' + content
        }
        var req_obj = http.request(http_request,function(_res){
            var content = '';
            _res.setEncoding('utf-8');
            _res.on('data',(chunk)=>{
                content+=chunk;
            });
            _res.on('end',(s)=>{
                resolve(content);
            })
        });
        req_obj.on('error',(err)=>{
            reject(err);
        });
        req_obj.end();
    });
        
}