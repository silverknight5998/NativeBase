var _jsxFileName="__tests__/basic/Actionsheet.android.js",_this=this;require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Button=require("./../../src/basic/Button");
var _ActionSheet=require("./../../src/basic/ActionSheet");
var _Text=require("./../../src/basic/Text");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var REGULAR_BUTTONS=["Option 0","Option 1","Option 2","Delete","Cancel"];
var DESTRUCTIVE_INDEX=3;
var CANCEL_INDEX=4;
var ICON_BUTTONS=[
{text:"Option 0",icon:"american-football",iconColor:"#2c8ef4"},
{text:"Option 1",icon:"analytics",iconColor:"#f42ced"},
{text:"Option 2",icon:"aperture",iconColor:"#ea943b"},
{text:"Delete",icon:"trash",iconColor:"#fa213b"},
{text:"Cancel",icon:"close",iconColor:"#25de5b"}];




jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="android";
return Platform;
});

it("renders Regular ActionSheet",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Button.Button,{
onPress:function onPress(){return(
_ActionSheet.ActionSheet.show(
{
options:REGULAR_BUTTONS,
cancelButtonIndex:CANCEL_INDEX,
destructiveButtonIndex:DESTRUCTIVE_INDEX,
title:"Select an option"},

function(buttonIndex){
_this.setState({clicked:REGULAR_BUTTONS[buttonIndex]});
}));},__source:{fileName:_jsxFileName,lineNumber:30}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:45}},"Actionsheet"))).


toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Icon ActionSheet",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Button.Button,{
onPress:function onPress(){return(
_ActionSheet.ActionSheet.show(
{
options:ICON_BUTTONS,
cancelButtonIndex:CANCEL_INDEX,
destructiveButtonIndex:DESTRUCTIVE_INDEX,
title:"Select an option"},

function(buttonIndex){
_this.setState({clicked:ICON_BUTTONS[buttonIndex]});
}));},__source:{fileName:_jsxFileName,lineNumber:55}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:70}},"Actionsheet"))).


toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Actionsheet.android.js.map