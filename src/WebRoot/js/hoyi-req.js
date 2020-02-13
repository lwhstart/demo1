
/**
 * HOYI 的Java请求封装.
 * 路径默认取当前路径.
 * 
 * @param data  数据
 * @param succfunc  成功执行的方法
 */
function HOYI_POSTFA(data, succfunc, conerror){
	 $.ajax({
		 cache: true,
		 async: false,
		 type: "POST",
		 data: data,
		 url: "?",
		 error: function (request) {
			if (conerror != null) {
				conerror(request);
			}
			alert("Connection error");
		 },
		 success: function (data, status) {
			if (status == "success") {
				 succfunc(data, status);
			}else{
				alert("execute error");
			}
		 }
	 });
}
/**
 * HOYI 的Java请求封装.
 * 路径默认取当前路径.
 * 编码百分号
 * 
 * @param data  数据
 * @param succfunc  成功执行的方法
 */
function  HOYI_POST(data, succfunc, conerror){
	delparsent(data);//编码百分号
	
	 $.ajax({
		 cache: true,
		 async: true,
		 type: "POST",
		 data: data,
		 url: "?",
		 error: function (request) {
			if (conerror != null) {
				conerror(request);
			}
			alert("Connection error");
		 },
		 success: function (data, status) {
			if (status == "success") {
				 succfunc(data, status);
			}else{
				alert("execute error");
			}
		 }
	 });
}
/**
 * 执行方法，无其他参数.
 * @param behavior
 * @param succfunc
 * @param conerror
 */
function HOYI_POST_BEhavior(behavior, succfunc, conerror){
	var data = {"behavior":behavior};
	 $.ajax({
		 cache: true,
		 async: true,
		 type: "POST",
		 data: data,
		 url: "?",
		 error: function (request) {
			if (conerror != null) {
				conerror(request);
			}
			alert("Connection error");
		 },
		 success: function (data, status) {
			if (status == "success") {
				 succfunc(data, status);
			}else{
				alert("execute error");
			}
		 }
	 });
}
/**
 * 执行方法，无其他参数.
 * @param behavior
 * @param succfunc
 * @param conerror
 */
function HOYI_POST_HEHAVI_DATA(behavior, data, succfunc, conerror){
	 $.ajax({
		 cache: true,
		 async: true,
		 type: "POST",
		 data: data,
		 url: "?behavior=" + behavior,
		 error: function (request) {
			if (conerror != null) {
				conerror(request);
			}
			alert("Connection error");
		 },
		 success: function (data, status) {
			if (status == "success") {
				 succfunc(data, status);
			}else{
				alert("execute error");
			}
		 }
	 });
}
/**
 * HOYI 的Java请求封装.
 * 
 * @param pgurl     请求路径
 * @param data       数据
 * @param succfunc   成功执行的方法
 */
function HOYI_POST_URL(pgurl, data, succfunc){
	delparsent(data);//编码百分号
	
	 $.ajax({
		 cache: true,
		 async: true,
		 type: "POST",
		 url: pgurl,
		 data: data,
		 error: function (request) {
			 alert("Connection error");
		 },
		 success: function (data, status) {
			 if (status == "success") {
				 succfunc(data, status);
			}else{
				alert("execute error");
			}
		 }
	 });
}
/**
 * HOYI 的Java请求封装.
 * 
 * @param pgurl 请求路径
 * @param data 数据
 * @param succfunc 成功执行的方法
 * @param errfunc 失败执行的方法.
 */
function HOYI_POST_FULL(pgurl, data, succfunc, errfunc){
	 $.ajax({
		 cache: true,
		 async: true,
		 type: "POST",
		 url: pgurl,
		 data: data,
		 error: function (request) {
			 alert("Connection error");
		 },
		 success: function (data, status) {
			 if (status == "success") {
				 succfunc(data, status);
			}else{
				if (errfunc != null) {
					errfunc(data, status);
				}
				alert("execute error");
			}
		 }
	 });
}

/**
 * 验证form
 * @param form 需要验证的form
 * @returns
 */
function HOYI_validateForm(form,  subfunc) { 
	//validate方法参数可选 return
	return $(formid).validate({
		  submitHandler: function(form) {
			  if(subfunc != null){
				  subfunc();
			  }
			  //alert('submitHandler');
		  }
	}).form(); 
}

/**
 * HOYI 的Java请求封装.
 * 路径默认取当前路径.
 * 不编码百分号
 * 
 * @param data  数据
 * @param succfunc  成功执行的方法
 */
function  HOYI_POST_HAVEPARSENT(data, succfunc, conerror){
	//delparsent(data);
	
	 $.ajax({
		 cache: true,
		 async: true,
		 type: "POST",
		 data: data,
		 url: "?",
		 error: function (request) {
			if (conerror != null) {
				conerror(request);
			}
			alert("Connection error");
		 },
		 success: function (data, status) {
			if (status == "success") {
				 succfunc(data, status);
			}else{
				alert("execute error");
			}
		 }
	 });
}
/**
 * 遍历Json中的数据，并替换百分号
 * @param data
 */
function delparsent(data) {
    for(var key in data){
        try{
       	 data[key] = data[key].replace(/%/g, '%25'); 
        }catch(e){}
    }
}

