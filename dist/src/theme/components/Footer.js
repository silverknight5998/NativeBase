Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _platform=require("./../variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;

var iconCommon={
"NativeBase.Icon":{
color:variables.tabBarActiveTextColor}};


var iconNBCommon={
"NativeBase.IconNB":{
color:variables.tabBarActiveTextColor}};


var textCommon={
"NativeBase.Text":{
color:variables.tabBarActiveTextColor}};


var footerTheme={
"NativeBase.Left":{
"NativeBase.Button":_extends({
".transparent":_extends({
backgroundColor:"transparent",
borderColor:null,
elevation:0,
shadowColor:null,
shadowOffset:null,
shadowRadius:null,
shadowOpacity:null},
iconCommon,
iconNBCommon,
textCommon),

alignSelf:null},
iconCommon,
iconNBCommon,
textCommon),

flex:1,
alignSelf:"center",
alignItems:"flex-start"},

"NativeBase.Body":{
flex:1,
alignItems:"center",
alignSelf:"center",
flexDirection:"row",
"NativeBase.Button":_extends({
alignSelf:"center",
".transparent":_extends({
backgroundColor:"transparent",
borderColor:null,
elevation:0,
shadowColor:null,
shadowOffset:null,
shadowRadius:null,
shadowOpacity:null},
iconCommon,
iconNBCommon,
textCommon),

".full":{
height:variables.footerHeight,
paddingBottom:variables.footerPaddingBottom,
flex:1}},

iconCommon,
iconNBCommon,
textCommon)},


"NativeBase.Right":{
"NativeBase.Button":_extends({
".transparent":_extends({
backgroundColor:"transparent",
borderColor:null,
elevation:0,
shadowColor:null,
shadowOffset:null,
shadowRadius:null,
shadowOpacity:null},
iconCommon,
iconNBCommon,
textCommon),

alignSelf:null},
iconCommon,
iconNBCommon,
textCommon),

flex:1,
alignSelf:"center",
alignItems:"flex-end"},

backgroundColor:variables.footerDefaultBg,
flexDirection:"row",
justifyContent:"center",
borderTopWidth:
platform==="ios"&&platformStyle!=="material"?
variables.borderWidth:
undefined,
borderColor:
platform==="ios"&&platformStyle!=="material"?
"#cbcbcb":
undefined,
height:variables.footerHeight,
paddingBottom:variables.footerPaddingBottom,
elevation:3,
left:0,
right:0};

return footerTheme;
};
//# sourceMappingURL=Footer.js.map