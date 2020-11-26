Vue.component("powerWarn", {
  template:
    '<div v-if="ispower" class="powerCut"><img src="images/zngzScene/warn.png" ></div>',
  props: {
    ispower: Number,
  },
});
// const baseURL = "http://zjyum.cn:9235";
const baseURL = "http://192.168.43.160:9235";
var vm = new Vue({
  el: "#container",
  data: {
    isLoading: true,
    pds_showBox: false, //配电室开关详情显示
    fzx_showBox: false, //低压配电室总开关详情是否显示
    fzx_showBox1: false, //低压配电室开关1详情是否显示
    fzx_showBox2: false, //低压配电室开关2详情是否显示
    fzx_showBox3: false, //低压配电室开关3详情是否显示
    fzx_showBox4: false, //低压配电室开关4详情是否显示
    dataInfo: [], //设备数据列表
    userArr: [], //用户归属列表
    selectIndex: 1, //当前选中的电表
    pdsSwitch: {
      eqId: "",
      openStatus: "",
      eqName: "",
      detail: { dataTime: "", event: "" },
    },
    switchBr: {
      //低压分支箱总开关
      eqId: "",
      openStatus: "",
      eqName: "",
      detail: { dataTime: "", event: "" },
    },
    switchBr1: {
      eqId: "",
      openStatus: "",
      eqName: "",
      zhYoZo: "",
      detail: { dataTime: "", event: "" },
    },
    switchBr2: {
      eqId: "",
      openStatus: "",
      eqName: "",
      zhYoZo: "",
      detail: { dataTime: "", event: "" },
    },
    switchBr3: {
      eqId: "",
      openStatus: "",
      eqName: "",
      zhYoZo: "",
      detail: { dataTime: "", event: "" },
    },
    switchBr4: {
      eqId: "",
      openStatus: "",
      eqName: "",
      zhYoZo: "",
      detail: { dataTime: "", event: "" },
    },
    meterList1: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    }, //表箱设备/开关数据
    meterList2: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    },
    meterList3: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    },
    meterList4: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    },
    meterList5: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    },
    meterList6: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    },
    meterList7: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    },
    meterList8: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    },
    meterList9: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    },
    meterList10: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    },
    meterList11: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    },
    meterList12: {
      switchItem: { eqId: "", openStatus: "", eqName: "", zhYoZo: "" },
      list: [],
      terminal: {},
      detail: { dataTime: "", event: "" },
    },
    meterDetail: {
      //电表详情数据
      title1: "表箱1",
      title2: "1号表用电信息",
      chartData: [],
      elec: "",
      num: "",
      voltageA: "",
      voltageB: "",
      voltageC: "",
      currentA: "",
      currentB: "",
      currentC: "",
      geyser: {},
      fridge: {},
      conditioner: {},
    },
    switchBox1: false, //电表箱1开关详情显示标志
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
    switchBox12: false, //电表箱12开关详情显示标志
    timer: null,
    allList: [],
    powerList: [], //停电列表
    perNum: 4,
    totalMeter: 36,
  },
  async created() {
    let that = this;
    this.getAllData();
    // let ws = new WebSocket("ws://192.168.43.246:18000/webSocket");
    // let ws = new WebSocket("ws://192.168.142.1:18000/webSocket");
    // ws.onopen = function (e) {
    //     console.log('Connection to server opened');
    // }

    // ws.onerror = function(error){
    // 	console.log("创建连接失败.....");
    // }

    // ws.onmessage = function(event){
    // 	console.log("data from server: ",event.data);
    // 	//that.dataInfo = event.data.eqDataInfo;
    // 	//that.initList(event.data.pubEquipmentPackList);

    // }
    // this.initList(arr);
    //this.dataInfo = res["eqDataInfo"];

    //await that.getAllData(); //获取档案信息

    // setTimeout(function () {
    //   that.startTimer(); //开启电表定时切换功能
    // }, 1000 * 15);

    //每分钟重新获取档案数据
    // setInterval(function () {
    //   that.getAllData();
    // }, 1000 * 60);

    //定时断开开关
    // setTimeout(function () {
    //   that.meterList11.switchItem.openStatus = "1";
    //   var arr = that.meterList11.list;
    //   arr.forEach((item) => {
    //     item.isPowerOff = 1;
    //   });
    //   that.meterList11.list = arr;
    //   console.log("开关断开");
    // }, 1000 * 70);

    //定时合上开关
    // setTimeout(function () {
    //   that.meterList11.switchItem.openStatus = "0";
    //   var arr = that.meterList11.list;
    //   arr.forEach((item) => {
    //     item.isPowerOff = 0;
    //   });
    //   that.meterList11.list = arr;
    //   console.log("开关合上");
    // }, 1000 * 90);

    //定时查询配电室开关数据,开关功率数据
    // setInterval(function () {
    //   if (that.pdsSwitch.eqId) {
    //     that.getSwitchDetail(that.pdsSwitch.eqId, "pdsSwitch");
    //   }
    //   that.getAllSwitchPower();
    // }, 1000 * 65);

    // setInterval(function () {
    //   let count = Math.ceil(Math.random() * 4);

    //   for (var i = 0; i < count; i++) {
    //     let num = Math.floor(Math.random() * 96);
    //     let eqId = that.allList[num];
    //     console.log("断电数：", eqId);
    //     if (that.powerList.indexOf(eqId) == -1) {
    //       that.powerList.push(eqId);
    //       that.powerOff(eqId);
    //     }
    //   }
    // }, 1000 * 25);

    // setInterval(function () {
    //   let count = Math.ceil(Math.random() * that.powerList.length);
    //   console.log("复电数：", count);
    //   for (var i = 0; i < count; i++) {
    //     let num = Math.floor(Math.random() * that.powerList.length);
    //     let eqId = that.powerList[num];
    //     that.powerOn(eqId);
    //     that.powerList.splice(num, 1);
    //   }
    // }, 1000 * 33);
  },
  mounted() {},
  filters: {
    emptyFilter(value) {
      //空值转换
      if (value) {
        return value;
      } else {
        return "- -";
      }
    },
  },
  methods: {
    async getAllData() {
      //获取档案信息
      var that = this;
      $.ajax({
        type: "get",
        // url: "http://192.168.43.246:18000/sreenShowData/searchAllData",
        // url: "http://192.168.43.215:18000/sreenShowData/searchAllData",
        // url: "http://192.168.43.63:9235/pub/sceneData/场景2",
        url: "http://localhost:18000/data/scene2.json",
        // url: baseURL + "/pub/sceneData/场景2",
        data: "",
        dataType: "json",
        success: function (res) {
          that.isLoading = false;
          console.log("全部数据 res:==", res);
          let list = that.resetInfoData(res);
          that.initList(list.pubEquipmentPackList);
          that.getSwitchDetail(that.pdsSwitch.eqId, "pdsSwitch");
          that.getAllSwitchPower();
          if (that.selectIndex == 1) {
            let extra = {
              box: "表箱1",
              id: that["meterList1"].list[0]
                ? that["meterList1"].list[0]["eqId"]
                : "",
            };
            that.meterClick(null, 1, extra);
          }
        },
        error: function (err) {
          that.isLoading = false;
          console.log("查询档案信息异常: ", err);
        },
      });
    },
    initList(arr) {
      //初始化表箱数据
      let meterData = {};
      let that = this;
      that.allList = [];
      arr.forEach(function (item) {
        let type = item["attachedEquipment"];
        let category = item["eqType"];
        that.getMeterList(type, category, item, meterData);
      });
      for (let key in meterData) {
        if (
          [
            "pdsSwitch",
            "switchBr",
            "switchBr1",
            "switchBr2",
            "switchBr3",
            "switchBr4",
          ].indexOf(key) > -1
        ) {
          that[key] = Object.assign(that[key], meterData[key]);
        } else {
          that[key] = meterData[key];
        }
      }
      console.log("++++++++++++++", meterData);
    },
    resetInfoData(obj) {
      //重置档案信息数据  （中文字段转英文字段）
      let list = {};
      let pubEquipmentPackList = [];
      var arr22 = obj["设备档案"] || [];
      for (var i = 0; i < arr22.length; i++) {
        var item = arr22[i];
        var o = item["设备"];
        var tempObj = {};
        tempObj.eqId = o["设备编号"];
        tempObj.parentEqId = o["上一级设备编号"];
        tempObj.eqFrom = o["设备类别"];
        tempObj.eqType = o["设备类型"];
        tempObj.eqName = o["设备名称"];
        tempObj.eqModel = o["设备型号"];
        tempObj.isCollect = o["是否具备采集功能"];
        tempObj.eachOther = o["相别"];
        tempObj.openStatus = o["开合状态"] == "合" ? "0" : "1";
        tempObj.electrificationStatus = o["得失电状态"];
        tempObj.attachedEquipment = o["隶属设备集合"];
        pubEquipmentPackList.push(tempObj);
      }
      list.pubEquipmentPackList = pubEquipmentPackList;
      return list;
    },
    getMeterList(from, category, item, meterData) {
      //组装电表信息
      var that = this;
      if ("" == from || undefined == from) {
        //变压器和低压配电总开关
        if (!meterData.pdsArr) {
          meterData.pdsArr = [];
        }
        if (category.indexOf("开关") > -1) {
          meterData.pdsSwitch = item;
        }
        meterData.pdsArr.push(item);
      } else if ("配电柜1" == from) {
        //四路低压分支开关
        if (!meterData.switchArr) {
          meterData.switchArr = [];
        }
        if (item.eqName.indexOf("低压分支开关1") > -1) {
          meterData.switchBr1 = item;
        }
        if (item.eqName.indexOf("低压分支开关2") > -1) {
          meterData.switchBr2 = item;
        }
        if (item.eqName.indexOf("低压分支开关3") > -1) {
          meterData.switchBr3 = item;
        }
        if (item.eqName.indexOf("低压分支开关4") > -1) {
          meterData.switchBr4 = item;
        }
        meterData.switchArr.push(item);
      } else if ("低压分支箱1" == from) {
        //四路低压分支开关
        if (item.eqName.indexOf("低压分支箱总开关1") > -1) {
          meterData.switchBr = item;
        }
      } else if (from.indexOf("表箱") > -1) {
        //获取表箱数据
        let index = from.slice(2);
        if (!meterData["meterList" + index]) {
          meterData["meterList" + index] = {
            switchItem: {},
            list: [],
            terminal: {},
            detail: { dataTime: "", event: "" },
          };
        }
        if (category === "开关") {
          meterData["meterList" + index].switchItem = item;
        } else if (this.searchMeter(category)) {
          if (item.eachOther == "三相") {
            item.eachOtherType = "3";
          } else {
            item.eachOtherType = "1";
          }
          if (that.powerList.indexOf(item.eqId) == -1) {
            item.isPowerOff = 0;
          }
          that.allList.push(item.eqId);
          meterData["meterList" + index].list.push(item);
        } else if (category == "分支监测终端") {
          meterData["meterList" + index].terminal = item;
        }
      }
    },
    searchMeter(str) {
      return str.indexOf("电表") > -1 || str.indexOf("电能表") > -1;
    },
    startTimer() {
      //开启电表定时切换
      var that = this;
      that.timer = setInterval(function () {
        if (that.selectIndex == that.totalMeter) {
          that.selectIndex = 0;
        }
        that.selectIndex++;
        let rate = Math.ceil(that.selectIndex / that.perNum);
        let num = that.selectIndex % that.perNum;
        if (num == 0) {
          num = that.perNum;
        }

        //if(rate == 1){
        let extra = {
          box: "表箱" + rate,
          id: that["meterList" + rate].list[num - 1]
            ? that["meterList" + rate].list[num - 1]["eqId"]
            : "",
        };
        that.meterClick(null, num, extra);
        //}
      }, 5000);
    },
    meterClick(e, index, extra) {
      //电表点击事件
      let that = this;
      let dataset = e ? e.target.dataset : extra;
      let boxName = dataset.box;
      //定时切换电表
      let rate = boxName.slice(2);
      that.selectIndex = (rate - 1) * this.perNum + index;
      console.log("selectIndex has changed: ", that.selectIndex);
      clearInterval(that.timer); //清除之前的定时器
      that.startTimer(); //启动新的定时器
      let id = dataset.id;
      let title1 = boxName;
      let title2 = index + "号表用电信息";
      that.getMeterDetail(id, title1, title2);
    },
    getMeterDetail(eqNo, title1, title2) {
      //获取电表详细信息
      let that = this;
      that.meterDetail.title1 = title1;
      that.meterDetail.title2 = title2;
      $.ajax({
        type: "post",
        url: baseURL + "/pub/equipment/场景2/" + eqNo,
        //url: "http://zjyum.cn:9235/pub/equipment/场景2/"+ eqNo,
        data: "",
        dataType: "json",
        success: function (res) {
          //清空原始数据
          that.meterDetail = {
            //电表详情数据
            title1: title1,
            title2: title2,
            chartData: [],
            elec: "",
            num: "",
            voltageA: "",
            voltageB: "",
            voltageC: "",
            currentA: "",
            currentB: "",
            currentC: "",
            geyser: {},
            fridge: {},
            conditioner: {},
          };
          //查找热水器/冰箱/空调设备
          let arr = that.userArr.filter(function (item) {
            return item["parentEqId"] == id;
          });
          if (arr && arr.length > 0) {
            arr.forEach(function (item) {
              if (item["eqType"] == "空调") {
                that.meterDetail.conditioner = item;
              }
              if (item["eqType"] == "冰箱") {
                that.meterDetail.fridge = item;
              }
              if (item["eqType"] == "热水器") {
                that.meterDetail.geyser = item;
              }
            });
          }
          if (res && res.data && res.data.dataInsaneous) {
            that.meterDetail.num = res.data.dataInsaneous.zhYoZo
              ? res.data.dataInsaneous.zhYoZo.slice(0, -2)
              : "";
            that.meterDetail.voltageA = res.data.dataInsaneous.voltageA;
            that.meterDetail.voltageB = res.data.dataInsaneous.voltageB;
            that.meterDetail.voltageC = res.data.dataInsaneous.voltageC;
            that.meterDetail.currentA = res.data.dataInsaneous.electricityA;
            that.meterDetail.currentB = res.data.dataInsaneous.electricityB;
            that.meterDetail.currentC = res.data.dataInsaneous.electricityC;
          }
          if (res && res.data && res.data.dataIndication) {
            that.meterDetail.elec = res.data.dataIndication.zhYoZo
              ? res.data.dataIndication.zhYoZo.slice(0, -3)
              : "";
          }
          //绘制连接线，绘制功率曲线
          setTimeout(function () {
            // that.createDetailLine();
            if (res.data && res.data.curveData) {
              that.drawElecChart(res.data.curveData);
            } else {
              that.drawElecChart([]);
            }
          }, 300);
        },
        error: function (err) {
          console.log("search all data error: ", err);
        },
      });
    },
    getMeterSwitchDetail(eqNo, index) {
      //获取电表开关详细信息
      var that = this;
      $.ajax({
        type: "post",
        url: baseURL + "/pub/equipment/场景2/" + eqNo,
        //url: "http://zjyum.cn:9235/pub/equipment/场景2/"+ eqNo,
        data: "",
        dataType: "json",
        success: function (res) {
          that["meterList" + index].detail.dataTime = res.data.timeScaleStr;
          if (res.data.eventDataList && res.data.eventDataList.length > 0) {
            that["meterList" + index].detail.event = res.data.eventDataList;
          } else {
            that["meterList" + index].detail.event = [];
          }
          if (res.data.dataInsaneous) {
            that["meterList" + index].switchItem.zhYoZo =
              res.data.dataInsaneous.zhYoZo;
            that["meterList" + index].detail.volA =
              res.data.dataInsaneous.voltageA;
            that["meterList" + index].detail.volB =
              res.data.dataInsaneous.voltageB;
            that["meterList" + index].detail.volC =
              res.data.dataInsaneous.voltageC;
            that["meterList" + index].detail.eleA =
              res.data.dataInsaneous.electricityA;
            that["meterList" + index].detail.eleB =
              res.data.dataInsaneous.electricityB;
            that["meterList" + index].detail.eleC =
              res.data.dataInsaneous.electricityC;
          }
        },
        error: function (err) {
          console.log("获取电表开关详细信息 error: ", err);
        },
      });
    },
    getSwitchDetail(eqNo, _target) {
      //获取低压配电室和分支箱开关详情
      var that = this;
      $.ajax({
        type: "post",
        //url: "http://zjyum.cn:9235/pub/equipment/场景2/"+ eqNo,
        url: baseURL + "/pub/equipment/场景2/" + eqNo,
        data: "",
        dataType: "json",
        success: function (res) {
          that[_target].detail.dataTime = res.data.timeScaleStr;
          if (res.data.eventDataList && res.data.eventDataList.length > 0) {
            that[_target].detail.event = res.data.eventDataList;
          } else {
            that[_target].detail.event = [];
          }
          if (res.data.dataInsaneous) {
            that[_target].zhYoZo = res.data.dataInsaneous.zhYoZo;
            that[_target].detail.volA = res.data.dataInsaneous.voltageA;
            that[_target].detail.volB = res.data.dataInsaneous.voltageB;
            that[_target].detail.volC = res.data.dataInsaneous.voltageC;
            that[_target].detail.eleA = res.data.dataInsaneous.electricityA;
            that[_target].detail.eleB = res.data.dataInsaneous.electricityB;
            that[_target].detail.eleC = res.data.dataInsaneous.electricityC;
          }
        },
        error: function (err) {
          console.log("获取开关详细信息 error: ", err);
        },
      });
    },
    switchEnter(e, index, id) {
      //鼠标移入开关
      let that = this;
      this["switchBox" + index] = "show";
      this.getMeterSwitchDetail(id, index);
    },
    switchLeave(e, index, id) {
      //鼠标离开开关
      this["switchBox" + index] = "false";
    },
    pdsSwitchEnter(e, id, _target) {
      //配电室 ==》 鼠标移入
      this.pds_showBox = "show";
      this.getSwitchDetail(id, _target);
    },
    fzxSwitchEnter(e, id, _target, index) {
      //分支箱  ==》 鼠标移入
      this["fzx_showBox" + index] = "show";
      this.getSwitchDetail(id, _target);
    },
    getAllSwitchPower() {
      if (this.meterList1.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList1.switchItem["eqId"], 1);
      }
      if (this.meterList2.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList2.switchItem["eqId"], 2);
      }
      if (this.meterList3.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList3.switchItem["eqId"], 3);
      }
      if (this.meterList4.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList4.switchItem["eqId"], 4);
      }
      if (this.meterList5.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList5.switchItem["eqId"], 5);
      }
      if (this.meterList6.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList6.switchItem["eqId"], 6);
      }
      if (this.meterList7.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList7.switchItem["eqId"], 7);
      }
      if (this.meterList8.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList8.switchItem["eqId"], 8);
      }
      if (this.meterList9.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList9.switchItem["eqId"], 9);
      }
      if (this.meterList10.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList10.switchItem["eqId"], 10);
      }
      if (this.meterList11.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList12.switchItem["eqId"], 11);
      }
      if (this.meterList12.switchItem["eqId"]) {
        this.getMeterSwitchDetail(this.meterList12.switchItem["eqId"], 12);
      }
    },
    powerOff(eqId) {
      //停电
      if (!eqId) return;
      let num = parseInt(eqId.slice(-2));
      let meterIndex = Math.ceil(num / 8);
      console.log("meterIndex", meterIndex);
      let oldArr = this["meterList" + meterIndex].list;
      oldArr.forEach((item) => {
        if (item.eqId == eqId) {
          item.isPowerOff = 1;
        }
      });
      this["meterList" + meterIndex].list = oldArr;
    },
    powerOn(eqId) {
      //复电
      if (!eqId) return;
      let num = parseInt(eqId.slice(-2));
      let meterIndex = Math.ceil(num / 8);
      console.log("meterIndex", meterIndex);
      let oldArr = this["meterList" + meterIndex].list;
      oldArr.forEach((item) => {
        if (item.eqId == eqId) {
          item.isPowerOff = 0;
        }
      });
      this["meterList" + meterIndex].list = oldArr;
    },
    drawElecChart(list) {
      let that = this;
      let xAxisData = [];
      let yAxisData = [];
      list.forEach((item) => {
        if (item.zhYoZo) {
          var xdata = item.timeScaleStr.slice(11, 16);
          var ydata = item.zhYoZo ? item.zhYoZo.slice(0, -2) : 0;
          xAxisData.push(xdata);
          yAxisData.push(ydata);
        }
      });
      let myChart = echarts.init(document.getElementById("electric-chart"));
      let option = {
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            splitLine: false,
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
            data: xAxisData,
          },
        ],
        yAxis: [
          {
            name: "KW",
            type: "value",
            nameTextStyle: {
              color: "#fff",
            },
            splitLine: {
              show: true,
              color: "#212B4D",
            },
            axisLine: {
              color: "#0A1338",
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
          },
        ],
        series: [
          {
            name: "功率",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#07FFF3",
                },
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00FFF2",
                  },
                  {
                    offset: 1,
                    color: "transparent",
                  },
                ]),
              },
            },
            //data:[8, 10, 12, 17, 13]
            //data: that.createRandom()
            data: yAxisData,
          },
        ],
      };
      myChart.setOption(option);
    },
    createRandom() {
      let arr = [];
      for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * 100 + 10);
        arr.push(num);
      }
      return arr;
    },
    getTime(time) {
      if (!time) {
        time = new Date().getTime();
      }
      let date = new Date(time); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + "-";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      let D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      let h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      let m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      let s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

      let strDate = Y + M + D + h + m + s;
      return strDate;
    },
  },
});
