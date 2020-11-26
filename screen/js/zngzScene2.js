var basicCommon = {
  anchor: ["Bottom", "Top"],
  paintStyle: { stroke: "lightgray", strokeWidth: 4 },
  connector: ["Flowchart", { cornerRadius: 5 }],
  endpoint: ["Rectangle", { width: 1, height: 1 }],
};
function creawteLine(source, target, other) {
  var tempCommon = basicCommon;
  if (other) {
    tempCommon = Object.assign({}, basicCommon, other);
  }
  jsPlumb.connect({
    ...tempCommon,
    source: source,
    target: target,
  });
}
let top5 = [0.5, 0, 0, -1, 0, 5];
$(function () {
  jsPlumb.ready(function () {
    setTimeout(function () {
      creawteLine("pds-switch", "branch-switch", { anchor: [top5, "Bottom"] });
      creawteLine("branch-switch", "branch-switch-sub1", {
        anchor: [top5, "Bottom"],
      });
      creawteLine("branch-switch", "branch-switch-sub2", {
        anchor: [top5, "Bottom"],
      });
      creawteLine("branch-switch", "branch-switch-sub3", {
        anchor: [top5, "Bottom"],
      });
      // creawteLine('branch-switch', 'branch-switch-sub4',{anchor: [top5,'Bottom']});
      creawteLine("branch-switch-sub1", "temp-anchor1", {
        anchor: [
          [0.5, 1, 0, 1],
          [0.5, 1, 0, 1, 0, -5],
        ],
      });
      creawteLine("temp-anchor1", "temp-anchor2", {
        anchor: ["Right", "Left"],
      });
      creawteLine("bx1_switch", "bx3_switch", {
        anchor: [
          [0.5, 1, 0, 1, 0, -4],
          [0.5, 0, 0, -1, 0, 4],
        ],
      });
      creawteLine("temp-anchor5", "bx2_switch", { anchor: [top5, "Bottom"] });
      creawteLine("temp-anchor5", "temp-anchor2", {
        anchor: ["Left", "Right"],
      });
      creawteLine("branch-switch-sub2", "bx4_switch", {
        anchor: ["Bottom", top5],
      });
      creawteLine("branch-switch-sub2", "bx5_switch", {
        anchor: ["Bottom", top5],
      });
      creawteLine("branch-switch-sub2", "bx6_switch", {
        anchor: ["Bottom", top5],
      });
      creawteLine("branch-switch-sub3", "bx7_switch", {
        anchor: ["Bottom", top5],
      });
      creawteLine("branch-switch-sub3", "bx8_switch", {
        anchor: ["Bottom", top5],
      });
      creawteLine("branch-switch-sub3", "bx9_switch", {
        anchor: ["Bottom", top5],
      });
      // creawteLine('branch-switch-sub4', 'temp-anchor3',{anchor: ['Bottom',[0.25,1,0,1,0,-5]]});
      creawteLine("temp-anchor3", "temp-anchor4", {
        anchor: ["Right", "Left"],
      });
      creawteLine("bx10_switch", "bx11_switch", {
        anchor: [
          [0.5, 1, 0, 1, 0, -4],
          [0.5, 0, 0, -1, 0, 4],
        ],
      });
      creawteLine("bx10_switch", "bx12_switch", { anchor: ["Bottom", top5] });
      createBxLine();
      createLine1And10();
    }, 200);
  });
});

//绘制表箱1和表箱10 连线
function createLine1And10() {
  // creawteLine("meter1_01","meter1_05");
  // creawteLine("meter1_02","meter1_06");
  // creawteLine("meter1_03","meter1_07");
  // creawteLine("meter1_04","meter1_08");
  creawteLine("bx1_switch", "meter1_01");
  creawteLine("bx1_switch", "meter1_02");
  creawteLine("bx1_switch", "meter1_03");
  creawteLine("bx1_switch", "meter1_04");
  // creawteLine("meter10_01","meter10_05");
  // creawteLine("meter10_02","meter10_06");
  // creawteLine("meter10_03","meter10_07");
  // creawteLine("meter10_04","meter10_08");
  creawteLine("bx10_switch", "meter10_01");
  creawteLine("bx10_switch", "meter10_02");
  creawteLine("bx10_switch", "meter10_03");
  creawteLine("bx10_switch", "meter10_04");
}

function createBxLine() {
  $(".meter-box").each(function () {
    var meterList = $(this).find(".meter-item");
    var switchDom = $(this).find(".switch")[0];
    var id = $(switchDom).attr("id");
    if (id != "bx1_switch" && id != "bx10_switch") {
      jsPlumb.ready(function () {
        creawteLine(switchDom, meterList[0]);
        creawteLine(switchDom, meterList[1]);
        creawteLine(switchDom, meterList[2]);
        creawteLine(switchDom, meterList[3]);
        // creawteLine(meterList[0],meterList[4]);
        // creawteLine(meterList[1],meterList[5]);
        // creawteLine(meterList[2],meterList[6]);
        // creawteLine(meterList[3],meterList[7]);
      });
    }
  });
}
