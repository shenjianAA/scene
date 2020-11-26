/**
 * 扩展easyui验证
 */

$.extend($.fn.validatebox.defaults.rules, {
        CHS: {//验证中文
          validator: function (value, param) {
            return /^[\u0391-\uFFE5]+$/.test(value);
          },
          message: '请输入中文汉字'
        },
    	abc : {// 验证只可输入数字和英文
        validator : function(value) {
             return /^[a-z_A-Z0-9]*$/.test(value);
         	},
         	message : '请输入数字或者英文字符!'
    	},
        isBlank:{//验证空格
        	validator: function (value, param){
        		return $.trim(value) !=''
        	},
        	message:'不能为空格'
        },
        english : {// 验证英文
              validator : function(value) {
                  return /^[A-Za-z]+$/i.test(value);
              },
              message : '请输入英文'
          },
          ip : {// 验证IP地址
              validator : function(value) {
                  return /^(25[0-5]|2[0-4]\d?|1\d{2}|[1-9]\d?)\.(25[0-5]|2[0-4]\d?|1\d{2}|[0-9]\d?|0)\.(25[0-5]|2[0-4]\d?|1\d{2}|[0-9]\d?|0)\.(25[0-5]|2[0-4]\d?|1\d{2}|[0-9]\d?)$/.test(value);
              },
              message : 'IP地址格式不正确'
          },
          thousand : {// 
              validator : function(value) {
                  return /^([1-9][0-9]{0,2}|1000}])$/.test(value);
              },
              message : '请输入1-1000之间的正整数'
          },
          thousandNew : {// 包含1000
              validator : function(value) {
            	  if(value < 1 || value > 1000){
            		  return false;
            	  }
            	  else if(parseInt(value) != value){
            		  return false;
            	  }
            	  return true;
              },
              message : '请输入1-1000之间的正整数'
          },
          thousands : {// 
              validator : function(value) {
                  return /^\d{1,3}$/.test(value);
              },
              message : '请输入0-999之间的正整数'
          },
        ZIP: {//验证邮政编码
          validator: function (value, param) {
            return /^[0-9]\d{5}$/.test(value);
          },
          message: '邮政编码不存在'
        },
        QQ: {//验证QQ号码
          validator: function (value, param) {
            return /^[1-9]\d{4,10}$/.test(value);
          },
          message: 'QQ号码不正确'
        },
        mobile: {//验证手机号
          validator: function (value, param) {
            return /^(?:13\d|15\d|18\d)-?\d{5}(\d{3}|\*{3})$/.test(value);
          },
          message: '手机号码不正确'
        },
        tel:{//验证固定电话
          validator:function(value,param){
            return /^(\d{3}-|\d{4}-)?(\d{8}|\d{7})?(-\d{1,6})?$/.test(value);
          },
          message:'电话号码不正确'
        },
        mobileAndTel: {//验证固定电话或手机号
          validator: function (value, param) {
            return /(^([0\+]\d{2,3})\d{3,4}\-\d{3,8}$)|(^([0\+]\d{2,3})\d{3,4}\d{3,8}$)|(^([0\+]\d{2,3}){0,1}13\d{9}$)|(^\d{3,4}\d{3,8}$)|(^\d{3,4}\-\d{3,8}$)/.test(value);
          },
          message: '请正确输入电话号码'
        },
        number: {//验证数字  100m就会有问题
          validator: function (value, param) {
            return /^[0-9]+.?[0-9]*$/.test(value);
          },
          message: '请输入数字'
        },
        sixNumber: {//验证数字
            validator: function (value, param) {
              return /^\d{6}$/.test(value);
            },
            message: '请输入6位数字'
        },
        numbers: {//验证数字 这个没有100m的问题
              validator: function (value, param) {
                return /^\d*$/.test(value);
              },
              message: '请输入数字'
        },
        numberOnly: {//验证数字 这个没有100m的问题
            validator: function (value, param) {
                return /^[0-9]*$/.test(value);
            },
            message: '请输入数字'
        },
        money:{//验证金额
          validator: function (value, param) {
           	return (/^(([1-9]\d*)|\d)(\.\d{1,2})?$/).test(value);
           },
           message:'请输入正确的金额'

        },
        mone:{
          validator: function (value, param) {
           	return (/^(([1-9]\d*)|\d)(\.\d{1,4})?$/).test(value);
           },
           message:'最多输入4位小数'

        },
        integer:{
          validator:function(value,param){
            return /^[+]?[1-9]\d*$/.test(value);
          },
          message: '请输入最小为1的整数'
        },
        noNegative:{
            validator:function(value,param){
              return /^(0|[1-9]\d*)$/.test(value);
            },
            message: '请输入非负整数'
        },
        integ:{
          validator:function(value,param){
            return /^[+]?[1-9]\d*$/.test(value);
          },
          message: '请输入正整数'
        },
        range:{
          validator:function(value,param){
            if(/^[0-9]\d*$/.test(value)){
              return value >= param[0] && value <= param[1]
            }else{
              return false;
            }
          },
          message:'请输入{0}到{1}之间整数'
        },
        minLength:{
          validator:function(value,param){
            return value.length >=param[0]
          },
          message:'至少输入{0}个字'
        },
        maxLength:{
          validator:function(value,param){
            return value.trim().length<=param[0]
          },
          message:'最多{0}个字'
        },
        //select即选择框的验证
        selectValid:{
          validator:function(value,param){
            if(value == param[0]){
              return false;
            }else{
              return true ;
            }
          },
          message:'请选择'
        },
        idCode:{
          validator:function(value,param){
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
          },
          message: '请输入正确的身份证号'
        },
        loginName: {
          validator: function (value, param) {
            return /^[\u0391-\uFFE5\w]+$/.test(value);
          },
          message: '登录名称只允许汉字、英文字母、数字及下划线。'
        },
        equalTo: {
          validator: function (value, param) {
            return value == $(param[0]).val();
          },
          message: '两次输入的字符不一至'
        },
        englishOrNum : {// 只能输入英文和数字
              validator : function(value) {
                  return /^[a-zA-Z0-9_ ]{1,}$/.test(value);
              },
              message : '请输入英文、数字、下划线或者空格'
          },
         xiaoshu:{ 
            validator : function(value){ 
            return (/^(([1-9]\d*)|\d)(\.\d{1,2})?$/).test(value);
//            return /^(([1-9]+)|([0-9]+\.[0-9]{1,2}))$/.test(value);
            }, 
            message : '最多保留两位小数！'    
        	},
        ddPrice:{
        validator:function(value,param){
          if(/^[1-9]\d*$/.test(value)){
            return value >= param[0] && value <= param[1];
          }else{
            return false;
          }
        },
        message:'请输入1到100之间正整数'
      },
      jretailUpperLimit:{
        validator:function(value,param){
          if(/^[0-9]+([.]{1}[0-9]{1,2})?$/.test(value)){
            return parseFloat(value) > parseFloat(param[0]) && parseFloat(value) <= parseFloat(param[1]);
          }else{
            return false;
          }
        },
        message:'请输入0到100之间的最多俩位小数的数字'
      },
      rateCheck:{
        validator:function(value,param){
          if(/^[0-9]+([.]{1}[0-9]{1,2})?$/.test(value)){
            return parseFloat(value) > parseFloat(param[0]) && parseFloat(value) <= parseFloat(param[1]);
          }else{
            return false;
          }
        },
        message:'请输入0到1000之间的最多俩位小数的数字'
      },
      ckcsCheck:{
    	  validator : function(value) {
              return /^(?!0)\d{1,6},[noeNOE],[1-8],[1-8]$/.test(value);
          },	
          message : '串口参数格式不正确！'
      },
      zhengOrfushu:{
    	  validator : function(value) {
              return /^(\-|\+?)\d+(\.\d+)?$/.test(value);
          },	
          message : '只能输入正负数字！'
      },
      verifyEmail:{
    	  validator : function(value,param) {
              return /^[a-zA-z0-9_-]+@([a-zA-Z0-9+\.])+(com|cn|net|org)$/.test(value);
          },	
          message : '请正确输入邮箱地址！'
      }
      ,
      fourXs:{ 
          validator : function(value){ 
        	  return (/^(([1-9]\d*)|\d)(\.\d{1,4})?$/).test(value);
          }, 
          message : '最多保留四位小数！'    
      },
      sixXs:{ 
          validator : function(value){ 
        	  return (/^(([1-9]\d*)|\d)(\.\d{1,6})?$/).test(value);
          }, 
          message : '请输入数字，且最多保留六位小数！'    
      },
});

/**
 * 扩展datagrid动态设置title值
 */
$.extend($.fn.datagrid.methods,{
	setColumnTitle:function(jq,option){
		if(option.field){
			return jq.each(function(){
				var $panel = $(this).datagrid("getPanel");
				var $field = $('td[field='+option.field+']',$panel);
				if($field.length){
					var $span = $("span",$field.eq(0));
					$span.html(option.text);
				}
			});
		}
		return jq;
	}
});

/**
 * 数字格式转金钱千分位格式
 */
function Comma(num){
	if(num=='' || num==null || isNaN(num)){
		return num;
	}else{
		var source = String(num).split(".");
		source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)','ig'),"$1,");
		return source.join(".");
	}
}

/**
 * 格式化前置地区
 * @param str
 */
function formatArea(str){
	if(str.indexOf('江苏')>-1){
		return "省局"
	}else if(str.indexOf('市')>-1){
		return str.replace('市','');
	}
	return '';
}

/**
 * 取code值 设置请选择选项置灰为空
 * @param a_codeSortId a_codeSortId 例如:50215
 * @param a_comboId 控件id
 * @param isTrue 是否有请选择选项
 * load_success 数据加载完成后的回调函数
 * isWork 工单专用
 */
function loadComboByCodeId(a_codeSortId,a_comboId,isTrue,load_success,isWork){
	var l_data=[];
	if(isTrue){
		l_data = [{codeValue:'qxz',codeName:'请选择',content:'qxz'}];
	}
	$.ajax({
		type:'post',//请求方式
		url:Eas.webContextRoot +'task/queryCodeTask.action',
		data: {
			'm_code.codeSortId' : a_codeSortId
		},
		dataType:'json',
		success:function(data){
			if(data.length>0){
				for(var i=0;i<data.length;i++){
					if(a_codeSortId=='10008'&&(data[i].codeValue=='8'||(data[i].codeValue=='9'&&isWork!=null))){
						
					}else{
						l_data.push({
							codeValue:data[i].codeValue,
							codeName:HTMLDecode(data[i].codeName),
							content:data[i].content1,
						});
					}
					
				}
			}
			$('#'+a_comboId).combobox({
				data:l_data,
				valueField: 'codeValue',
				textField: 'codeName',
				onLoadSuccess: function () { 
					var l_newData = $(this).combobox('getData');
					if(l_newData.length>0){
						$(this).combobox("select", l_newData[0].codeValue);
					}
				},
				onChange:function(newValue){
					if(newValue=='qxz'){
						$('#'+a_comboId).combobox('setValue', '');
						 
					}
				}
			});
			//回调，加载完成数据之后调用的方法
			if(load_success!=null){
				load_success();
			}
		}
	});
} 

/**
 * 获取当前ID的按钮,是否需要隐藏
 */
function findPowerButtonId(ButtonId){
	var isHiddenButton = false;//默认不隐藏
	for(var i =0;i<m_ButtonPowerDataList.length;i++){//循环隐藏当前用户对此菜单无权限的按钮，隐藏掉
		if(ButtonId == m_ButtonPowerDataList[i].busiCode){
			isHiddenButton = true; 
		}
	}
	return isHiddenButton;//返回的如果是true,隐藏按钮,如果false 不隐藏按钮
}

/**
 * datagrid单元格0并
 * @param a_gridId 表格ID
 * @param json 表格数据
 * @param a_field 需要0并的字段
 */
function mergeGridCells(a_gridId,json,a_field){
	var mergeStart = 0;
	var count=0;
	var field = json[0][a_field];
	for(var i=0; i<json.length; i++){//0并单元格
		//当前行的电压等级和上一行不同，0并掉上边未0并的数据单元格 (指标、台数、比例) 最后一条记录无需如上处理，上一个if中已经处理过
		//zblxCount==1表示上一个if已经强行0并了指标、台数、比例，无需0并或者判断
		if(field!=json[i][a_field])
		{
//			if(i==json.length-1){
//				voltCount++;
//			}
			$('#'+a_gridId).datagrid('mergeCells',{
				index: mergeStart,
				field: a_field,
				rowspan: count
			});
			mergeStart = i;
			field = json[i][a_field];
			count=0;
		}
		if(i == json.length-1){
			count++;
			$('#'+a_gridId).datagrid('mergeCells',{
				index: mergeStart,
				field: a_field,
				rowspan: count
			});
		}
		count++;
	}
}

/**
 * 根据某个单元格0并另一个单元格
 * 重写：0并单元格方法
 * 2019-06-04 by 冯凯利 
 * */
function mergeGridCellsByDevId(a_gridId,json,a_field,b_field){
	var mergeStart = 0;
	var count=0;
	var field = json[0][a_field];
	for(var i=0; i<json.length; i++){//0并单元格
		if(field!=json[i][a_field])
		{
			$('#'+a_gridId).datagrid('mergeCells',{
				index: mergeStart,
				field: b_field,
				rowspan: count
			});
			mergeStart = i;
			field = json[i][a_field];
			count=0;
		}
		if(i == json.length-1){
			count++;
			$('#'+a_gridId).datagrid('mergeCells',{
				index: mergeStart,
				field: b_field,
				rowspan: count
			});
		}
		count++;
	}
}

/**
 * 解析 当天 近两天 近三天 近一周 等
 * timeType 时间类型 1:当天 2:近两天 3:近三天 4:近一周  
 * l_timeRange 返回的时间范围 第一个是 开始时间  第二个是结束时间
 */
function getTimeRange(timeType){
	l_timeRange=[];
	l_currentTime = new Date();//当前时间
	var m_startDate = '';
	var	m_endDate = '';
	if(timeType == '1'){
		 m_startDate =  DateUtil.dateToStr('yyyy-MM-dd',l_currentTime)+' 00:00:00';//开始日期
		 m_endDate = DateUtil.dateToStr('yyyy-MM-dd HH:mm:ss',l_currentTime);//结束日期
	}else if(timeType == '2'){
		m_endDate = DateUtil.dateToStr('yyyy-MM-dd HH:mm:ss',l_currentTime);//结束日期
		m_startDate =  DateUtil.dateToStr('yyyy-MM-dd HH:mm:ss',DateUtil.dateAdd('d',-2,DateUtil.strToDate(m_endDate)));//日减1;//开始日期
	}else if(timeType == '3'){
		m_endDate = DateUtil.dateToStr('yyyy-MM-dd HH:mm:ss',l_currentTime);//结束日期
		m_startDate =  DateUtil.dateToStr('yyyy-MM-dd HH:mm:ss',DateUtil.dateAdd('d',-3,DateUtil.strToDate(m_endDate)));//日减1;//开始日期
	}else if(timeType == '4'){
		m_endDate = DateUtil.dateToStr('yyyy-MM-dd HH:mm:ss',l_currentTime);//结束日期
		m_startDate =  DateUtil.dateToStr('yyyy-MM-dd HH:mm:ss',DateUtil.dateAdd('d',-7,DateUtil.strToDate(m_endDate)));//日减1;//开始日期
	} 
	l_timeRange.push(m_startDate);
	l_timeRange.push(m_endDate);
	return l_timeRange;
} 


/**
 * 获取路径参数
 * @param name
 * @since 2018-03-16
 * @author taoping 
 * @returns
 */
function GetUrlParam(name) {

	var strHref = document.location.href;
	var intPos = strHref.indexOf("?");
	var strRight = strHref.substr(intPos + 1);
	var arrTmp = strRight.split("&");
	for (var i = 0; i < arrTmp.length; i++) {
		var arrTemp = arrTmp[i].split("=");
		if (arrTemp[0].toUpperCase() == name.toUpperCase())
			// var area=unescape(arrTemp[1]);
			// var returnValue=$.parseJSON(area);
			return unescape(arrTemp[1]); // unescape decodeURI
	}
	return null;

}

/**
 * 获取菜单名
 * @since 2018-03-16
 * @author taoping
 * @returns 
 */
function GetMenuName()
{
	return GetUrlParam("text").replace(/#/g, "");
}


/**
 * 导出的提示信息 方法编号1
 */
function exportInfo(){
	$.messager.alert('提示', "无可导出数据！", 'info');
}

/**
 * 提示选择一条表格记录 方法编号2
 */
function selectOneRow(){
	$.messager.alert('提示', "请选择一条记录！", 'info');
}

/**
 * 保存的时候，录入数据不完成的提示信息 方法编号3
 * warningMes 提示信息 要求传过来的标点符号必须全中文格式中文的感叹号
 */
function saveWarning(warningMes){
   $.messager.alert('确认',  warningMes,  'warning');
}

/**
 * 保存失败信息 方法编号4
 */
function saveError(){
	$.messager.alert('错误', "保存失败，请联系管理员！", 'error');
}

/**
 * 保存失败信息 方法编号5
 */
function updateError(){
	$.messager.alert('错误', "修改失败，请联系管理员！", 'error');
}

/**
 * 删除失败信息 方法编号6
 */
function deleteError(){
	$.messager.alert('错误', "删除失败，请联系管理员！", 'error');
}

/**
 * 数据查询失败 方法编号7
 */
function selectError(){
	$.messager.alert('错误', "数据查询失败，请联系管理员！", 'error');
}
 
/**
 * 保存成功信息 方法编号8
 */
function saveSuccess(){
	timeOutClose('保存成功！');
}

/**
 * 修改成功  方法编号9
 */
function updateSuccess(){
	timeOutClose('修改成功！');
}

/**
 * 删除成功 方法编号10
 */
function deleteSuccess(){
	timeOutClose('删除成功！');
}

/**
 * 表格数据加载 方法编号11
 */
function gridLoadMsg(){
	return "正在努力地读取数据中...";
}

/**
 * 退役 方法编号12
 */
function outSuccess(){
	timeOutClose('退役成功！');
}

/**
 * 告警查询  确认按钮后提示
 */
function comfirmedSuccess(){
	timeOutClose('确认成功！');
}

/**
 * 告警查询  确认按钮后提示
 */
function comfirmedError(){
	$.messager.alert('错误', "确认失败，请联系管理员！", 'error');
}

/**
 * 提示信息 某项数据不可操作的提示，提示信息自己填写 方法编号12
 * infoMes 提示信息 要求传过来的标点符号必须全中文格式中文的感叹号 
 */
function validatorinfo(infoMes){
   $.messager.alert('提示',  infoMes,  'info');
}

/**
 * 两秒钟关闭的提示框
 */
function timeOutClose(a_msg){
	$.messager.show({
        cls: 'popMessage',
        title: '消息', 
        msg: a_msg,
        timeout: 2000,
        showType: 'show',
	    style: {
            right: '',
            bottom: ''
        }
   });
}

/**
 * 返回echarts-x轴 年
 * a_beginTime:开始年 格式：yyyy 必填
 * a_endTime:结束年 格式：yyyy 必填
 * a_timeType:返回年的12个月 必填
 */
function getTimeYear(a_beginTime,a_endTime,a_timeType){
	var l_data = [];//返回json
	var l_valueList = [];//组0json
	if(a_timeType == '1'){
		var l_staYear = parseInt(a_beginTime);
		var l_endYear = parseInt(a_endTime);
		var l_monthCount = 12;//循环月数
		
		if(l_staYear <= l_endYear){
			var l_vCount = l_endYear - l_staYear;//间隔年数
			for(var i = 0;i <= l_vCount; i++){
				for(var jj = 1;jj <= l_monthCount; jj++){
					var l_month = jj>9?jj:'0'+jj;
					l_valueList.push(l_staYear+"-"+l_month);//[2018-01,2018-02]
				}
				l_staYear++;
			}
			l_data.push({"year":l_valueList});
		}
	}
	//[{"year":[2016-01,2016-02] }]
	return l_data;
}

/**
 * 返回echarts-x轴 月
 * a_time:日期 格式：yyyy-MM 必填
 * a_timeType:返回当前选择月的所有yyyy-MM-dd,例如从5.1~5.31号 必填
 */
function getTimeMonth(a_time,a_timeType){
	var l_data = [];//返回json
	var l_valueList = [];//组0json
	
	if(a_timeType == '1'){
		var l_month = a_time.split("-");
		var l_d = new Date(l_month[0],l_month[1],0);
		var l_dCount = l_d.getDate();//获取当前月的总天数
		
		//循环天数
		for(var i = 1;i <= l_dCount; i++){
			//组0json
			var l_date = i>9?i:'0'+i;
			l_valueList.push(l_month[0]+"-"+l_month[1]+"-"+l_date);
		}
		l_data.push({"month":l_valueList});
	}
	//[{"year":[2016-08-01,2016-08-31] }]
	return l_data;
}

/**
 * 返回echarts-x轴 日
 * a_time:日期 格式：yyyy-MM-dd 必填
 * a_timeType:返回当前选择日的所有24点，96点 必填
 */
function getTimeDay(a_time,a_timeType){
	var l_data = [];//返回json

	//24点
	if(a_timeType == '1'){
		l_data.push({"day":[
		                 	'00:00','01:00','02:00','03:00','04:00','05:00',
		                 	'06:00','07:00','08:00','09:00','10:00','11:00',
		                 	'12:00','13:00','14:00','15:00','16:00','17:00',
		                	'18:00','19:00','20:00','21:00','22:00','23:00'
		                ] 
		           });
	}else if(a_timeType == "2"){//48点
		l_data.push({"day":[
		                 	'00:00','00:30',
		                 	'01:00','01:30',
		                 	'02:00','02:30',
		                 	'03:00','03:30',
		                 	'04:00','04:30',
		                 	'05:00','05:30',
		                 	'06:00','06:30',
		                 	'07:00','07:30',
		                 	'08:00','08:30',
		                 	'09:00','09:30',
		                 	'10:00','10:30',
		                 	'11:00','11:30',
		                 	'12:00','12:30',
		                 	'13:00','13:30',
		                 	'14:00','14:30',
		                 	'15:00','15:30',
		                 	'16:00','16:30',
		                 	'17:00','17:30',
		                 	'18:00','18:30',
		                 	'19:00','19:30',
		                 	'20:00','20:30',
		                 	'21:00','21:30',
		                 	'22:00','22:30',
		                 	'23:00','23:30'
		                ] 
		           });
	}else if(a_timeType == "3"){//96点
		l_data.push({"day":[
		                 	'00:00','00:15','00:30','00:45',
		                 	'01:00','01:15','01:30','01:45',
		                 	'02:00','02:15','02:30','02:45',
		                 	'03:00','03:15','03:30','03:45',
		                 	'04:00','04:15','04:30','04:45',
		                 	'05:00','05:15','05:30','05:45',
		                 	'06:00','06:15','06:30','06:45',
		                 	'07:00','07:15','07:30','07:45',
		                 	'08:00','08:15','08:30','08:45',
		                 	'09:00','09:15','09:30','09:45',
		                 	'10:00','10:15','10:30','10:45',
		                 	'11:00','11:15','11:30','11:45',
		                 	'12:00','12:15','12:30','12:45',
		                 	'13:00','13:15','13:30','13:45',
		                 	'14:00','14:15','14:30','14:45',
		                 	'15:00','15:15','15:30','15:45',
		                 	'16:00','16:15','16:30','16:45',
		                 	'17:00','17:15','17:30','17:45',
		                 	'18:00','18:15','18:30','18:45',
		                 	'19:00','19:15','19:30','19:45',
		                 	'20:00','20:15','20:30','20:45',
		                 	'21:00','21:15','21:30','21:45',
		                 	'22:00','22:15','22:30','22:45',
		                 	'23:00','23:15','23:30','23:45'
		                ] 
		           });
	}
	return l_data;
}

/**
 * 返回echarts-x轴 地市
 */
function getCitys(){
	var l_data = ['江苏直属','南京','无锡','徐州','常州','苏州','南通','连云港','淮安','盐城','扬州','镇江','泰州','宿迁'];
	return l_data;
}

/**
 * 返回echarts-x轴 跨月
 * a_beginTime:日期 格式：yyyy-MM-dd 必填
 * a_endTime:日期 格式：yyyy-MM-dd 必填
 * a_timeType:返回选择月的所有yyyy-MM-dd,例如从5.1~6.31号 必填
 */
function getTimeMonthDays(a_beginTime,a_endTime,a_timeType){
	var l_data = [];//返回json
	var l_valueList = [];//组0json
	
	//获取日期
	var getDate = function(str){
		var l_tempDate = new Date();
		var l_list = str.split("-");
		l_tempDate.setFullYear(l_list[0]);
		l_tempDate.setMonth(l_list[1]-1);
		l_tempDate.setDate(l_list[2]);
		
		return l_tempDate;
	};
	
	var l_date1 = getDate(a_beginTime);
	var l_date2 = getDate(a_endTime);
	
	if(l_date1 > l_date2){
		var l_tempDate = l_date1;
		l_date1 = l_date2;
		l_date2 = l_tempDate;
	}
	l_date2.setDate(l_date2.getDate()+1);
	
	while(!(l_date1.getFullYear() == l_date2.getFullYear() && l_date1.getMonth() == l_date2.getMonth() && l_date1.getDate() == l_date2.getDate())){
		var l_year = l_date1.getFullYear();
		var l_month = (l_date1.getMonth() + 1) >9?(l_date1.getMonth() + 1):('0'+(l_date1.getMonth() +1));
		var l_date = l_date1.getDate()>9?l_date1.getDate():('0'+l_date1.getDate());
		//组0json
		if(a_timeType == '1'){
			l_valueList.push(l_year+"-"+l_month+"-"+l_date);
		}else if(a_timeType == '2'){
			//只返回日
			l_valueList.push(l_date);
		}
		l_date1.setDate(l_date1.getDate()+1);
		l_data.push({"days":l_valueList});
	}
	//[{"days":[2016-06-01,2016-08-31] }]
	return l_data;
}


/**
 * 验证数组中是否有重复元素
 * @param arr
 * @returns
 */
function mm(arr){
	
	return /(\x0f[^\x0f]+)\x0f[\s\S]*\1/.test("\x0f"+arr.join("\x0f\x0f")+"\x0f");
}
/**
 *  实时验证输入框日期格式
 *  @param id 输入框id
 *  @param val 输入框值
 *  @param dateFmt 日期格式
 *  2019.5.8 ZHX
 */
function validatorDate(id,val,dateFmt){
	var reg = /^([1-2]{1})([0,9]{1})([0-9]{2})(-)(0?[1-9]|1[0-2])(-)((0?[1-9])|((1|2)[0-9])|30|31)$/;//正则表达式,年月日,'yyyy-MM-dd'
	if(dateFmt == 'yyyy-MM-dd HH'){
		reg = /^([1-2]{1})([0,9]{1})([0-9]{2})(-)(0?[1-9]|1[0-2])(-)((0?[1-9])|((1|2)[0-9])|30|31)( )([0-2]{1})(\d{1})$/;//正则表达式,年月日时
	}else if(dateFmt == 'yyyy-MM-dd HH:mm'){
		reg = /^([1-2]{1})([0,9]{1})([0-9]{2})(-)(0?[1-9]|1[0-2])(-)((0?[1-9])|((1|2)[0-9])|30|31)( )([0-2]{1})(\d{1})(:)([0-5]{1})(\d{1})$/;//正则表达式,年月日时分
	}else if(dateFmt == 'yyyy-MM-dd HH:mm:ss'){
		reg = /^([1-2]{1})([0,9]{1})([0-9]{2})(-)(0?[1-9]|1[0-2])(-)((0?[1-9])|((1|2)[0-9])|30|31)( )([0-2]{1})(\d{1})(:)([0-5]{1})(\d{1})(:)([0-5]{1})(\d{1})$/;//正则表达式,年月日时分秒
	}
	var minDate = new Date("1900-01-01 00:00:00".replace(/-/g, '/'));//最小时间
	var maxDate = new Date("2099-12-31 23:59:59".replace(/-/g, '/'));//最大时间
	var currDate = '';//当前时间
	if(val != '' || val.trim() != ''){
		currDate = new Date(val.replace(/-/g, '/'));
	}
	if(val == '' || val.trim() == ''){
		$('#'+id).css({
			color:"#000",
			borderColor:"#ffa8a8",
			backgroundColor:"#fff3f3"          
		});    
		$('#'+id).tooltip({
			track: false,
			position: 'right',    
			content: '<span>'+ '日期不能为空！' +'</span>',    
			onShow: function(){
				$(this).tooltip('tip').css({
					color:"#000",
					borderColor:"#CC9933",
					backgroundColor:"#FFFFCC"          
				});    
			}
		});
	}else if(!val.match(reg) || currDate.getTime() > maxDate.getTime() || currDate.getTime() < minDate.getTime()){
		$('#'+id).css({
			color:"#000",
			borderColor:"#ffa8a8",
			backgroundColor:"#fff3f3"          
		}); 
		$('#'+id).tooltip({
			track: false,
			position: 'right',  
			content: '<span>'+ '不0法的日期格式！' +'</span>',
			onShow: function(){
				$(this).tooltip('tip').css({
					color:"#000",
					borderColor:"#CC9933",
					backgroundColor:"#FFFFCC"
				});    
			}
		});
	}else{
		$('#'+id).css({
			color:"",
			borderColor:"",
			backgroundColor:""          
		});
		$('#'+id).tooltip({
			position: 'right',  
			content: $('#'+id).val(),    
			onShow: function(){
				$(this).tooltip('tip').css({
					color:"#000",
					borderColor:"#CC9933",
					backgroundColor:"#FFFFCC"
				});    
			}
		});
	}
};
/***
 * 平衡数据质量
 */
var dataQulity=[{codeValue:'qxz',codeName:'请选择',content:'qxz'},{codeValue:Math.pow(2,31),codeName:'正常计算'},{codeValue:1 << 19,codeName:'无母线'},
                {codeValue:1<< 5,codeName:'缺主表'},{codeValue:1 << 7,codeName:'缺Ct、Pt'},{codeValue:1<< 3,codeName:'缺计量点设备关系'},
                {codeValue:1 << 6,codeName:'表计无数据(平衡判断)'},{codeValue:Math.pow(2,18),codeName:'底码为负数的计量点(平衡判断)'},{codeValue:1 << 17,codeName:'底码相减为负'},
                {codeValue:1 << 13,codeName:'无计量点'},{codeValue:1 << 32,codeName:'全部设置不计算'},{codeValue:1<< 2,codeName:'全部不计算'},
                {codeValue:1 << 16,codeName:'轻载'},{codeValue:1 << 12,codeName:'输入电量为0'},{codeValue:1<< 4,codeName:'含有设备类型不参与平衡计算的计量点'},
                {codeValue:1 << 22,codeName:'含有未投运计量点'},{codeValue:1 << 21,codeName:'含有新投运计量点'},{codeValue:1 << 15,codeName:'含有非投运计量点'},
                {codeValue:1 << 8,codeName:'母线不计算'},{codeValue:Math.pow(2,40),codeName:'非投运状态,关联不到设备的计量点'},{codeValue:Math.pow(2,33),codeName:'非投运状态关联不到主表'},
                {codeValue:Math.pow(2,41),codeName:'非投运状态,关联不到CT/PT的计量点'},{codeValue:1 << 29,codeName:'正向有功底码翻转'},{codeValue:1 << 29,codeName:'反向有功底码翻转'},
                {codeValue:1 << 9,codeName:'更换主表的计量点'},{codeValue:1 << 10,codeName:'更换ctpt的计量点'},{codeValue:1<<23,codeName:'表计无数据'},
                {codeValue:1 << 24,codeName:'表计数据异常'},{codeValue:Math.pow(2,34),codeName:'积分周期异常结束'},{codeValue:Math.pow(2,35),codeName:'(表计)时钟异常'},
                {codeValue:Math.pow(2,36),codeName:'(终端)时钟异常'},{codeValue:Math.pow(2,37),codeName:'(表计)CT回路故障(失流)'},{codeValue:Math.pow(2,38),codeName:'(表计)PT回路故障(失压/断电)'},
                {codeValue:1 << 25,codeName:'表计内部异常'},{codeValue:1 << 26,codeName:'表计数据异常(计算判断)'},{codeValue:1 << 27,codeName:'数据不可信'},
                {codeValue:1 << 28,codeName:'底码缺失'},{codeValue:Math.pow(2,39),codeName:'底码异常'},{codeValue:1 << 11,codeName:'母线计算模型替代'}];