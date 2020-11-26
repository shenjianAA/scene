var vm = new Vue({
	el: "#container",
	data: {
		showBox1: false,
		showBoxBr: false,
		showBox2: false,
		showBox3: false,
		showBox4: false,
		showBox5: false,
		dataInfo: [],//设备数据列表
		userArr: [],//用户归属列表
		selectIndex:1,
		meterList1: {},//表箱设备/开关数据
		meterList2: {
			switchItem:{eqId:'',openStatus:'',eqName:''},
			list:[],
			terminal:{},
			detail:{
				dataTime:'',
				event: ''
			}
		},
		meterList3: {
			switchItem:{eqId:'',openStatus:'',eqName:''},
			list:[],
			terminal:{},
			detail:{
				dataTime:'',
				event: ''
			}
		},
		meterList4: {
			switchItem:{eqId:'',openStatus:'',eqName:''},
			list:[],
			terminal:{},
			detail:{
				dataTime:'',
				event: ''
			}
		},
		meterList5: {
			switchItem:{eqId:'',openStatus:'',eqName:''},
			list:[],
			terminal:{},
			detail:{
				dataTime:'',
				event: ''
			}
		},
		meterList6: {
			switchItem:{eqId:'',openStatus:'',eqName:''},
			list:[],
			terminal:{},
			detail:{
				dataTime:'',
				event: ''
			}
		},
		meterList7: {
			switchItem:{eqId:'',openStatus:'',eqName:''},
			list:[],
			terminal:{},
			detail:{
				dataTime:'',
				event: ''
			}
		},
		meterList8: {
			switchItem:{eqId:'',openStatus:'',eqName:''},
			list:[],
			terminal:{},
			detail:{
				dataTime:'',
				event: ''
			}
		},
		meterList9: {
			switchItem:{eqId:'',openStatus:'',eqName:''},
			list:[],
			terminal:{},
			detail:{
				dataTime:'',
				event: ''
			}
		},
		meterList10: {
			switchItem:{eqId:'',openStatus:'',eqName:''},
			list:[],
			terminal:{},
			detail:{
				dataTime:'',
				event: ''
			}
		},
		meterList11: {
			switchItem:{eqId:'',openStatus:'',eqName:''},
			list:[],
			terminal:{},
			detail:{
				dataTime:'',
				event: ''
			}
		},
		meterList12: {
			switchItem:{eqId:'',openStatus:'',eqName:''},
			list:[],
			terminal:{},
			detail:{
				dataTime:'',
				event: ''
			}
		},
		meterDetail: {//电表详情数据
			title1: "",
			title2: "",
			chartData:[],
			elec: "",
			num: "",
			voltageA:"",
			voltageB: "",
			voltageC: "",
			currentA: "",
			currentB: "",
			currentC: "",
			geyser:{},
			fridge: {},
			conditioner: {}
		},
		switchDetail: {
			name: "",
			dataTime: "",
			event: ""
		},
		switchBox1: false,
		switchBox2: false,
		switchBox3: false,
		switchBox4: false,
		switchBox5: false,
		switchBox6: false,
		switchBox7: false,
		switchBox8: false,
		switchBox9: false,
		switchBox10: false,
		switchBox11: false,
		switchBox12: false,
		timer: null
		
	},
	created(){
		let that = this;
		let ws = new WebSocket("ws://192.168.43.246:18000/webSocket");
		ws.onopen = function (e) {
		    console.log('Connection to server opened');
		}

		ws.onerror = function(error){
			console.log("创建连接失败.....");
		}
		
		ws.onmessage = function(event){
			console.log("data from server: ",event.data);
			//that.dataInfo = event.data.eqDataInfo;
			//that.initList(event.data.pubEquipmentPackList);
			
		}
		let res = {
			"pubEquipmentPackList": [
				{//变压器
					"eqId": "100000000001",
					"parentEqId": "",
					"eqFrom": "能量设备",
					"eqType": "变压器",
					"eqName": "变压器",
					"eqModel": "",
					"isCollect": "0",
					"eachOther": "三相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": ""
				},
				{//低压配电总开关
					"eqId": "200000000001",
					"parentEqId": "100000000001",
					"eqFrom": "能量设备",
					"eqName": "K401",
					"eqType": "开关",
					"eqModel": "",
					"isCollect": "0",
					"eachOther": "三相",
					"openStatus": "0",
					"electrificationStatus": "1",
					"attachedEquipment": ""
				},
				{//低压分支开关1
					"eqId": "300000000001",
					"parentEqId": "200000000001",
					"eqFrom": "能量设备",
					"eqName": "K401",
					"eqType": "开关",
					"eqModel": "",
					"isCollect": "0",
					"eachOther": "三相",
					"openStatus": "0",
					"electrificationStatus": "1",
					"attachedEquipment": "配电柜1"
				},
				{//低压分支开关2
					"eqId": "300000000002",
					"parentEqId": "200000000001",
					"eqFrom": "能量设备",
					"eqType": "开关",
					"eqName": "K421",
					"eqModel": "",
					"isCollect": "0",
					"eachOther": "三相",
					"openStatus": "0",
					"electrificationStatus": "1",
					"attachedEquipment": "配电柜1"
				},
				{//低压分支开关3
					"eqId": "300000000003",
					"parentEqId": "200000000001",
					"eqFrom": "能量设备",
					"eqName": "K422",
					"eqType": "开关",
					"eqModel": "",
					"isCollect": "0",
					"eachOther": "三相",
					"openStatus": "0",
					"electrificationStatus": "1",
					"attachedEquipment": "配电柜1"
				},
				{//低压分支开关4
					"eqId": "300000000004",
					"parentEqId": "200000000001",
					"eqFrom": "能量设备",
					"eqName": "K423",
					"eqType": "开关",
					"eqModel": "",
					"isCollect": "0",
					"eachOther": "三相",
					"openStatus": "0",
					"electrificationStatus": "1",
					"attachedEquipment": "配电柜1"
				},
				{//低压分支开关5
					"eqId": "300000000005",
					"parentEqId": "200000000001",
					"eqFrom": "能量设备",
					"eqType": "开关",
					"eqModel": "",
					"isCollect": "0",
					"eachOther": "三相",
					"openStatus": "0",
					"electrificationStatus": "1",
					"attachedEquipment": "配电柜1"
				},
				{//表箱开关1
					"eqId": "400000000001",
					"parentEqId": "300000000002",
					"eqFrom": "能量设备",
					"eqType": "开关",
					"eqName": "K431",
					"eqModel": "",
					"isCollect": "0",
					"eachOther": "三相",
					"openStatus": "0",
					"electrificationStatus": "1",
					"attachedEquipment": "表箱1"
				},
				{//表箱开关2
					"eqId": "400000000002",
					"parentEqId": "300000000002",
					"eqFrom": "能量设备",
					"eqType": "开关",
					"eqName": "K432",
					"eqModel": "",
					"isCollect": "0",
					"eachOther": "三相",
					"openStatus": "0",
					"electrificationStatus": "1",
					"attachedEquipment": "表箱2"
				},
				{//表箱开关3
					"eqId": "400000000003",
					"parentEqId": "300000000002",
					"eqFrom": "能量设备",
					"eqType": "开关",
					"eqName": "K433",
					"eqModel": "",
					"isCollect": "0",
					"eachOther": "三相",
					"openStatus": "0",
					"electrificationStatus": "1",
					"attachedEquipment": "表箱3"
				},
				{//负荷辨识电表1
					"eqId": "500000000001",
					"parentEqId": "400000000001",
					"eqFrom": "计量设备",
					"eqType": "负荷辨识电表",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "A相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "表箱1"
				},
				{"eqId": "500000000002","parentEqId": "400000000001","eqFrom": "计量设备","eqType": "负荷辨识电表","eqModel": "","isCollect": "是","eachOther": "A相","openStatus": "","electrificationStatus": "1","attachedEquipment": "表箱1"},
				{"eqId": "500000000003","parentEqId": "400000000001","eqFrom": "计量设备","eqType": "负荷辨识电表","eqModel": "","isCollect": "是","eachOther": "A相","openStatus": "","electrificationStatus": "1","attachedEquipment": "表箱1"},
				{"eqId": "500000000004","parentEqId": "400000000001","eqFrom": "计量设备","eqType": "负荷辨识电表","eqModel": "","isCollect": "是","eachOther": "A相","openStatus": "","electrificationStatus": "1","attachedEquipment": "表箱1"},
				{"eqId": "500000000005","parentEqId": "400000000001","eqFrom": "计量设备","eqType": "负荷辨识电表","eqModel": "","isCollect": "是","eachOther": "A相","openStatus": "","electrificationStatus": "1","attachedEquipment": "表箱1"},
				{"eqId": "500000000006","parentEqId": "400000000001","eqFrom": "计量设备","eqType": "负荷辨识电表","eqModel": "","isCollect": "是","eachOther": "A相","openStatus": "","electrificationStatus": "1","attachedEquipment": "表箱1"},
				{"eqId": "500000000007","parentEqId": "400000000001","eqFrom": "计量设备","eqType": "负荷辨识电表","eqModel": "","isCollect": "是","eachOther": "A相","openStatus": "","electrificationStatus": "1","attachedEquipment": "表箱1"},
				{"eqId": "500000000008","parentEqId": "400000000001","eqFrom": "计量设备","eqType": "负荷辨识电表","eqModel": "","isCollect": "是","eachOther": "A相","openStatus": "","electrificationStatus": "1","attachedEquipment": "表箱1"},
				{//负荷辨识电表96
					"eqId": "500000000096",
					"parentEqId": "400000000012",
					"eqFrom": "计量设备",
					"eqType": "负荷辨识电表",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "A相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "表箱12"
				},
				{//空调1
					"eqId": "600000000001",
					"parentEqId": "500000000001",
					"eqFrom": "能量设备",
					"eqType": "空调",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "A相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "用户1"
				},
				{//空调96
					"eqId": "600000000096",
					"parentEqId": "500000000096",
					"eqFrom": "能量设备",
					"eqType": "空调",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "C相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "用户96"
				},
				{//洗衣机1
					"eqId": "610000000001",
					"parentEqId": "500000000001",
					"eqFrom": "能量设备",
					"eqType": "洗衣机",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "A相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "用户1"
				},
				{//洗衣机96
					"eqId": "610000000096",
					"parentEqId": "500000000096",
					"eqFrom": "能量设备",
					"eqType": "洗衣机",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "C相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "用户96"
				},
				{//热水器1
					"eqId": "620000000001",
					"parentEqId": "500000000001",
					"eqFrom": "能量设备",
					"eqType": "热水器",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "A相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "用户1"
				},
				{//热水器96
					"eqId": "620000000096",
					"parentEqId": "500000000096",
					"eqFrom": "能量设备",
					"eqType": "热水器",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "C相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "用户96"
				},

				{//分支监测终端1
					"eqId": "910000000001",
					"parentEqId": "300000000002",
					"eqFrom": "采集设备",
					"eqType": "分支监测终端",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "三相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "配电柜1"
				},
				{//分支监测终端4
					"eqId": "910000000004",
					"parentEqId": "300000000005",
					"eqFrom": "采集设备",
					"eqType": "分支监测终端",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "三相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "配电柜1"
				},
				{//分支监测终端1
					"eqId": "910000000005",
					"parentEqId": "400000000001",
					"eqFrom": "采集设备",
					"eqType": "分支监测终端",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "三相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "表箱1"
				},
				{//分支监测终端16
					"eqId": "910000000016",
					"parentEqId": "400000000012",
					"eqFrom": "采集设备",
					"eqType": "分支监测终端",
					"eqModel": "",
					"isCollect": "是",
					"eachOther": "三相",
					"openStatus": "",
					"electrificationStatus": "1",
					"attachedEquipment": "表箱12"
				},
			],
			"eqDataInfo":[
				{
					"eqId": "400000000001","times": "1575772540000",
					"instantaneousEata": [{
						"electricCurrent": { "proA": "1A", "proB": "2A","proC": "3A"},
						"voltage": { "proA": "220V","proB": "221V", "proC": "222V" }
					}],
					"indicationData": [{
						"forwardDirection": {"eeiF": "1345.57kwt","eeiG": "1345.57kwt","eeiJ": "1345.57kwt","eeiP": "1345.57kwt", "eeiZ": "1345.57kwt" },
						"reverse": {"eeiF": "1345.57kwt","eeiG": "1345.57kwt", "eeiJ": "1345.57kwt","eeiP": "1345.57kwt","eeiZ": "1345.57kwt"}
					}],
					"电量数据": {"正向有功电能示值": "120","反向有功电能示值":  ""},
					"设备信息": {"容量": "","互感器变化": ""},
					"eventsData": [
						{"msg": "停复电","dataA": "停电时间&&2020-01-13 14:22:34","dataB": "复电时间&&2020-01-13 15:30:21"}
					]
				},
				{
					"eqId": "500000000001","times": "1574475640000",
					"instantaneousEata": [{
						"electricCurrent": { "proA": "21A", "proB": "22A","proC": "23A"},
						"voltage": { "proA": "220V","proB": "221V", "proC": "222V" }
					}],
					"indicationData": [{
						"forwardDirection": {"eeiF": "1345.57kwt","eeiG": "1345.57kwt","eeiJ": "1345.57kwt","eeiP": "1345.57kwt", "eeiZ": "1345.57kwt" },
						"reverse": {"eeiF": "1345.57kwt","eeiG": "1345.57kwt", "eeiJ": "1345.57kwt","eeiP": "1345.57kwt","eeiZ": "1345.57kwt"}
					}],
					"电量数据": {"正向有功电能示值": "120","反向有功电能示值":  ""},
					"设备信息": {"容量": "","互感器变化": ""},
					"eventsData": [
						{"msg": "停复电","dataA": "停电时间&&2020-01-13 14:22:34","dataB": "复电时间&&2020-01-13 15:30:21"}
					]
				},
				{
					"eqId": "500000000002","times": "1574476540000",
					"instantaneousEata": [{
						"electricCurrent": { "proA": "31A", "proB": "32A","proC": "33A"},
						"voltage": { "proA": "220V","proB": "221V", "proC": "222V" }
					}],
					"indicationData": [{
						"forwardDirection": {"eeiF": "1345.57kwt","eeiG": "1345.57kwt","eeiJ": "1345.57kwt","eeiP": "1345.57kwt", "eeiZ": "1345.57kwt" },
						"reverse": {"eeiF": "1345.57kwt","eeiG": "1345.57kwt", "eeiJ": "1345.57kwt","eeiP": "1345.57kwt","eeiZ": "1345.57kwt"}
					}],
					"电量数据": {"正向有功电能示值": "220","反向有功电能示值":  ""},
					"设备信息": {"容量": "","互感器变化": ""},
					"eventsData": [
						{"msg": "停复电","dataA": "停电时间&&2020-01-13 14:22:34","dataB": "复电时间&&2020-01-13 15:30:21"}
					]
				},
				{
					"eqId": "500000000003","时标": "1575686140000",
					"instantaneousEata": [{
						"electricCurrent": { "proA": "41A", "proB": "42A","proC": "43A"},
						"voltage": { "proA": "220V","proB": "221V", "proC": "222V" }
					}],
					"indicationData": [{
						"forwardDirection": {"eeiF": "1345.57kwt","eeiG": "1345.57kwt","eeiJ": "1345.57kwt","eeiP": "1345.57kwt", "eeiZ": "1345.57kwt" },
						"reverse": {"eeiF": "1345.57kwt","eeiG": "1345.57kwt", "eeiJ": "1345.57kwt","eeiP": "1345.57kwt","eeiZ": "1345.57kwt"}
					}],
					"电量数据": {"正向有功电能示值": "320","反向有功电能示值":  ""},
					"设备信息": {"容量": "","互感器变化": ""},
					"eventsData": [
						{"msg": "停复电","dataA": "停电时间&&2020-01-13 14:22:34","dataB": "复电时间&&2020-01-13 15:30:21"}
					]
				}
			]
		};

		let arr = res["pubEquipmentPackList"];
		this.initList(arr);
		this.dataInfo = res["eqDataInfo"];
		
		$.ajax({
			type: 'post',
			url: "http://192.168.43.246:18000/sreenShowData/searchAllData",
			data: "",
			dataType: "json",
			success: function(res){
				console.log("全部数据 res:==",res);
				that.dataInfo = res.eqDataInfo;
				that.initList(res.pubEquipmentPackList);
				console.log("======",that.meterList1);
				let extra = {box:"表箱1",id: this.meterList1.list[0]["eqId"]};
				this.meterClick(null,1, extra);
			},
			error: function(err){
				console.log("search all data error: ",err);
			}
		})
		// that.timer = setInterval(function(){
		// 	if(that.selectIndex == 96){
		// 		that.selectIndex = 0;
		// 	}
		// 	that.selectIndex ++;
		// 	let rate = Math.ceil(that.selectIndex/8);
		// 	let num = that.selectIndex%8;
		// 	if( num == 0 ){
		// 		num = rate * 8;
		// 	}

		// 	if(rate == 1){
		// 		let extra = {
		// 			box : "表箱" + rate,
		// 			id : that["meterList" +rate].list[num-1]["eqId"]
		// 		}
		// 		console.log(num,extra);
		// 		that.meterClick(null, num, extra);
		// 	}
		// 	console.log("selectIndex: ",that.selectIndex);
		// }, 5000);
	},
	mounted(){

	},
	filters: {
		emptyFilter(value){
			if(value){
				return value;
			}else {
				return "- -";
			}
		}
	},
	methods: {
		initList(arr){//初始化表箱数据
			let meterData = {};
			let  that = this;
			arr.forEach(function(item){
				let type =item["attachedEquipment"];
				let category = item["eqType"];
				that.getMeterList(type, category,item, meterData);
			})
			for(let key in meterData){
				that[key] = meterData[key];
			}
			console.log("++++++++++++++",meterData);
		},
		getMeterList(from, type, item, meterData){
			//获取表箱数据
			if("" == from){
				if(!meterData.pdsArr){
					meterData.pdsArr =[];
				}
				meterData.pdsArr.push(item);
			}else if("配电柜1" == from){
				if(!meterData.switchArr){
					meterData.switchArr = [];
				}
				meterData.switchArr.push(item);
			}else if(from.indexOf("表箱")>-1){
				let index = from.slice(2);
				if(!meterData["meterList"+index]){
					meterData["meterList"+index] ={switchItem:{},list:[],terminal:{},detail:{dataTime:'',event: ''}};
				}
				if(type === "开关"){
					meterData["meterList"+index].switchItem = item;
				}else if(this.searchMeter(type)){
					meterData["meterList"+index].list.push(item);
				}else if(type == "分支监测终端"){
					meterData["meterList"+index].terminal = item;
				}
			}
		},
		searchMeter(str){
			return str.indexOf("电表")>-1 || str.indexOf("电能表")>-1 ;
		},
		meterClick(e,index, extra){//电表点击事件
			let that = this;
			let dataset = e ? e.target.dataset : extra;
			let boxName = dataset.box;
			//定时切换电表
			let rate = boxName.slice(2);
			that.selectIndex = (rate-1)*8 + index;
			console.log("selectIndex has changed: ",that.selectIndex);
			clearInterval(that.timer);
			// that.timer = setInterval(function(){
			// 	if(that.selectIndex == 96){
			// 		that.selectIndex = 0;
			// 	}
			// 	that.selectIndex ++;
			// 	let rate = Math.ceil(that.selectIndex/8);
			// 	let num = that.selectIndex%8;
			// 	if( num == 0 ){
			// 		num = rate * 8;
			// 	}

			// 	if(rate == 1){
			// 		let extra = {
			// 			box : "表箱" + rate,
			// 			id : that["meterList" +rate].list[num-1]["eqId"]
			// 		}
			// 		console.log(num,extra);
			// 		that.meterClick(null, num, extra);
			// 	}
			// 	console.log("selectIndex: ",that.selectIndex);
			// }, 5000);
			let id = dataset.id;
			//清空原始数据
			this.meterDetail = {//电表详情数据
				title1: "",
				title2: "",
				chartData:[],
				elec: "",
				num: "",
				voltageA:"",
				voltageB: "",
				voltageC: "",
				currentA: "",
				currentB: "",
				currentC: "",
				geyser:{},
				fridge: {},
				conditioner: {}
			},
			this.meterDetail.title1 = boxName;
			this.meterDetail.title2 = index + "号表用电信息";
			//查找热水器/冰箱/空调设备
			let arr = this.userArr.filter(function(item){
				return item["parentEqId"] == id;
			});
			if(arr && arr.length>0){
				arr.forEach(function(item){
					if(item["eqType"] =="空调"){
						that.meterDetail.conditioner = item;
					}
					if(item["eqType"] =="冰箱"){
						that.meterDetail.fridge = item;
					}
					if(item["eqType"] =="热水器"){
						that.meterDetail.geyser = item;
					}
				})
			}

			let elecData = that.dataInfo.filter(function(item){
				return item["eqId"] == id;
			});

			if(elecData && elecData.length>0){
				this.meterDetail.elec= elecData[0].indicationData[0].forwardDirection.eeiZ.slice(0,-3);
				this.meterDetail.num= elecData[0].indicationData[0].forwardDirection.eeiZ.slice(0,-3);
				this.meterDetail.voltageA= elecData[0].instantaneousEata[0].voltage.proA.slice(0,-1);
				this.meterDetail.voltageB= elecData[0].instantaneousEata[0].voltage.proB.slice(0,-1);
				this.meterDetail.voltageC= elecData[0].instantaneousEata[0].voltage.proC.slice(0,-1);
				this.meterDetail.currentA= elecData[0].instantaneousEata[0].electricCurrent.proA.slice(0,-1);
				this.meterDetail.currentB= elecData[0].instantaneousEata[0].electricCurrent.proB.slice(0,-1);
				this.meterDetail.currentC= elecData[0].instantaneousEata[0].electricCurrent.proC.slice(0,-1);
			}

			setTimeout(function(){
				that.createDetailLine();
				that.drawElecChart();
				jsPlumb.setSuspendDrawing(false, true);
			},300)
			console.log(that.meterDetail);
		},
		switchEnter(e,index,id){//鼠标移入开关
			let that = this;
			this["switchBox"+index] = 'show';
			let elecData = this.dataInfo.filter(function(item){
				return  item["eqId"] == id;
			})
			console.log(elecData);
			if(elecData && elecData.length>0){
				let eventArr = elecData[0].eventsData;
				let eventStr = "";
				eventArr.forEach(function(item){
					//eventStr = "事件类型: "+ item.msg + "  " + item.dataA + item.dataB; 
					eventStr = "事件类型: 停电事件  停电时间: 2020-01-12 12:14:32  复电时间: 2020-01-12 22:23:45";
				})
				// for(let key in eventObj){
				// 	eventStr += key + " : " + eventObj[key];
				// }
				this["meterList" + index].detail.dataTime = this.getTime(parseInt(elecData[0].times));
				this["meterList" + index].detail.event = eventStr;
			}
			console.log(elecData);
		},
		switchLevel(e, index, id){//鼠标离开开关
			this["switchBox"+index] = 'false';
		},
		creawteLine(source, target, other) {
			let basicCommon = {
			    anchor: ['Bottom', 'Top'],
			    paintStyle: {stroke: 'lightgray', strokeWidth: 4},
			    connector: ['Flowchart',{cornerRadius:5}],
			    endpoint: ["Rectangle", {width: 1, height: 1}]
			};
		    let tempCommon = basicCommon;
		    if(other){
		        tempCommon = Object.assign({},basicCommon,other)
		    }
		    jsPlumb.connect({
		    	...tempCommon,
		        source: source,
		        target: target
		    });
		},
		createDetailLine(){
			this.creawteLine("meter-lg","airCondition",{paintStyle:{stroke: '#2C66EE', strokeWidth: 5},anchor:[[0.49,1,0,1,0,10],'Top']});
			this.creawteLine("meter-lg","geyser",{paintStyle:{stroke: '#2C66EE', strokeWidth: 5},anchor:[[0.49,1,0,1,0,10],'Top']});
			this.creawteLine("meter-lg","iceBox",{paintStyle:{stroke: '#2C66EE', strokeWidth: 5},anchor:[[0.49,1,0,1,0,10],'Top']});
		},
		drawElecChart(res){
			let that = this;
			let myChart = echarts.init(document.getElementById("electric-chart"));
			let option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            splitLine: false,
			             axisLabel : {
			             	textStyle:{
				            	color:'#fff'
				            }
			             },
			            data : ['00:00','06:00','12:00','18:00','24:00']
			        }
			    ],
			    yAxis : [
			        {
			            name :"万千瓦",
			            type : 'value',
			            nameTextStyle:{
			            	color: "#fff"
			            },
			            splitLine:{
			            	show: true,
			            	color:'#212B4D'
			            },
			            axisLine:{
			            	color:'#0A1338'
			            },
			            axisLabel : {
			             	textStyle:{
				            	color:'#fff'
				            }
			             },
			        }
			    ],
			    series : [
			        {
			            name:'电量',
			            type:'line',
			            smooth:true,
			            itemStyle: {
			              	normal: {
			                  lineStyle: {
			                  	color:'#07FFF3'
			                  }
			                }
			            },
			            areaStyle:{
			 				normal: {
			                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                        offset: 0,
			                        color: '#00FFF2'
			                    }, {
			                        offset: 1,
			                        color: 'transparent'
			                    }])
			                }
						 },
			            //data:[8, 10, 12, 17, 13]
						data: that.createRandom()
			        }
			    ]
			};
			myChart.setOption(option);
		},
		createRandom(){
			let arr = [];
			for(let i =0;i<5;i++){
				let num = Math.floor(Math.random()*100+10);
				arr.push(num);
			}
			return arr;
		},
		getTime(time){
			if(!time){
				time = new Date().getTime();
			}
			let date = new Date(time);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			let Y = date.getFullYear() + '-';
			let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			let D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
			let h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
			let m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
			let s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
			
			let strDate = Y+M+D+h+m+s;
			return strDate;
		}
	}
})