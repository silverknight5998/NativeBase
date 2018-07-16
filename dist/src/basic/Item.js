Object.defineProperty(exports,"__esModule",{value:true});exports.Item=undefined;var _jsxFileName="src/basic/Item.js";var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require("react-native");






var _Input=require("./Input");
var _Label=require("./Label");
var _Icon=require("./Icon");

var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _platform=require("../theme/variables/platform");var _platform2=_interopRequireDefault(_platform);
var _computeProps=require("../utils/computeProps");var _computeProps2=_interopRequireDefault(_computeProps);
var _mapPropsToStyleNames=require("../utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);
var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Item=function(_Component){_inherits(Item,_Component);
function Item(props){_classCallCheck(this,Item);var _this=_possibleConstructorReturn(this,(Item.__proto__||Object.getPrototypeOf(Item)).call(this,
props));
_this.state={
text:'',
topAnim:new _reactNative.Animated.Value(18),
opacAnim:new _reactNative.Animated.Value(1),
isFocused:false};return _this;

}_createClass(Item,[{key:"componentDidMount",value:function componentDidMount()

{
if(this.props.floatingLabel){
if(this.inputProps&&this.inputProps.value){
this.setState({isFocused:true});
this.floatUp(-16);
}
if(this.inputProps&&this.inputProps.getRef){
this.inputProps.getRef(this._inputRef);
}
}
}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(

nextProps){var _this2=this;
var childrenArray=_react2.default.Children.toArray(nextProps.children);
_lodash2.default.remove(childrenArray,function(item){
if(item.type.displayName==='Styled(Input)'){
_this2.inputProps=item.props;
return item;
}
return false;
});
if(this.props.floatingLabel){
if(this.inputProps&&this.inputProps.value){
this.setState({isFocused:true});
this.floatUp(-16);
}
if(this.inputProps&&this.inputProps.getRef){
this.inputProps.getRef(this._inputRef);
}
}
}},{key:"floatBack",value:function floatBack()

{
_reactNative.Animated.timing(this.state.topAnim,{
toValue:18,
duration:150}).
start();
_reactNative.Animated.timing(this.state.opacAnim,{
toValue:1,
duration:150}).
start();
}},{key:"floatUp",value:function floatUp(

e){
_reactNative.Animated.timing(this.state.topAnim,{
toValue:e||-22,
duration:150}).
start();
_reactNative.Animated.timing(this.state.opacAnim,{
toValue:0.7,
duration:150}).
start();
}},{key:"renderLabel",value:function renderLabel(

label,labelProps){
if(!label){
return _react2.default.createElement(_Label.Label,_extends({},labelProps));
}

if(this.props.floatingLabel){
if(this.state.isFocused){
var labelStyle=_reactNative.StyleSheet.flatten(
{fontSize:15,lineHeight:30},
labelProps.style);

this.floatUp(-16);
return _react2.default.cloneElement(label,_extends({},
labelProps,{
key:'newFLabel',
float:true,
style:labelStyle}));

}
this.floatBack();
return label;
}
return _react2.default.cloneElement(label,_extends({},
labelProps,{
key:'newLabel'}));

}},{key:"renderInput",value:function renderInput(

inputElement,inputProps){var _this3=this;
var props=_extends({
value:this.state.text},
inputProps,{
ref:function ref(c){_this3._inputRef=c;},
key:'l2',
onFocus:function onFocus(){
_this3.setState({isFocused:true});
inputProps.onFocus&&inputProps.onFocus();
},
onBlur:function onBlur(){
inputProps.value?
_this3.setState({
isFocused:true}):

!_this3.state.text.length&&_this3.setState({isFocused:false});
inputProps.onBlur&&inputProps.onBlur();
},
onChangeText:function onChangeText(text){
_this3.setState({text:text});
inputProps.onChangeText&&_this3.inputProps.onChangeText(text);
}});


if(!inputElement){
return _react2.default.createElement(_Input.Input,props);
}
return _react2.default.cloneElement(inputElement,props);
}},{key:"renderChildren",value:function renderChildren()

{var _this4=this;
var labelChild=null;
var labelProps={};
var inputChild=null;
var inputProps={};
var icon=[];
var iconProps={};
var newChildren=[];

_react2.default.Children.toArray(this.props.children).
forEach(function(item){
if(item.type.displayName==='Styled(Label)'){
labelChild=item;
labelProps=item.props;
}else if(item.type.displayName==='Styled(Input)'){
inputChild=item;
inputProps=item.props;
_this4.inputProps=item.props;
}else if(item.type.displayName==='Styled(Icon)'){
icon.push({iconItem:item,isRight:!!inputChild});
iconProps=item.props;
}
});

if(this.props.floatingLabel){
var hasIcon=icon&&icon.length;
newChildren.push(
_react2.default.createElement(_reactNative.Animated.View,{
key:"float",
style:{
position:'absolute',
left:
this.props.last&&hasIcon?
40:
this.props.last?
15:
hasIcon?
26:
0,
right:0,
top:this.state.topAnim,
opacity:this.state.opacAnim,
paddingTop:_reactNative.Platform.OS==='ios'?undefined:undefined,
paddingBottom:_reactNative.Platform.OS==='ios'?undefined:12},__source:{fileName:_jsxFileName,lineNumber:170}},


this.renderLabel(labelChild,labelProps)));


newChildren.push(this.renderInput(inputChild,inputProps));
if(hasIcon){
icon.forEach(function(_ref){var iconItem=_ref.iconItem,isRight=_ref.isRight;
var iconComponent=_react2.default.createElement(_Icon.Icon,_extends({key:iconItem.key},iconItem.props,{__source:{fileName:_jsxFileName,lineNumber:195}}));
if(isRight){
newChildren.push(iconComponent);
}else{
newChildren.unshift(iconComponent);
}
});
}
}else if(this.props.stackedLabel&&icon.length){
newChildren.push(
_react2.default.createElement(_reactNative.View,{
key:"s",
style:{
flexDirection:'row',
flex:1,
width:_platform2.default.deviceWidth-15},__source:{fileName:_jsxFileName,lineNumber:205}},


_react2.default.createElement(_Icon.Icon,_extends({key:"s1"},iconProps,{__source:{fileName:_jsxFileName,lineNumber:213}})),
_react2.default.createElement(_reactNative.View,{style:{flexDirection:'column'},__source:{fileName:_jsxFileName,lineNumber:214}},
_react2.default.createElement(_Label.Label,_extends({key:"s2"},labelProps,{__source:{fileName:_jsxFileName,lineNumber:215}})),
_react2.default.cloneElement(inputChild,_extends({},
inputProps,{
key:'s3',
style:{width:_platform2.default.deviceWidth-40}})))));




}else{
newChildren=this.props.children;
}
return newChildren;
}},{key:"getInitialStyle",value:function getInitialStyle()

{
return{
roundedInputGroup:{
borderWidth:this.props.rounded?_platform2.default.borderWidth*2:undefined,
borderRadius:this.props.rounded?
_platform2.default.inputGroupRoundedBorderRadius:
undefined}};


}},{key:"prepareRootProps",value:function prepareRootProps()

{
var defaultProps={
style:this.getInitialStyle().roundedInputGroup};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:"render",value:function render()

{var _this5=this;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({
ref:function ref(c){_this5._root=c;}},
this.prepareRootProps(),{
activeOpacity:1,__source:{fileName:_jsxFileName,lineNumber:251}}),

this.renderChildren()));


}}]);return Item;}(_react.Component);


var childrenType=function childrenType(props,propName,component){
var error=void 0;
var prop=props[propName];
if(!props.children.length){
error=new Error(
component+" should have both Label and Input components");

}else if(
props.children[0].type.displayName!=="Styled(Label)"||
props.children[1].type.displayName!=="Styled(Input)")
{
error=new Error(
component+" should have Label and Input components only");

}
return error;
};

Item.propTypes=_extends({},
_reactNative.TouchableOpacity.propTypes,{
style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.number,
_propTypes2.default.array]),

inlineLabel:_propTypes2.default.bool,
floatingLabel:_propTypes2.default.bool,
stackedLabel:_propTypes2.default.bool,
fixedLabel:_propTypes2.default.bool,
success:_propTypes2.default.bool,
error:_propTypes2.default.bool});


var StyledItem=(0,_nativeBaseShoutemTheme.connectStyle)("NativeBase.Item",{},_mapPropsToStyleNames2.default)(
Item);exports.


Item=StyledItem;
//# sourceMappingURL=Item.js.map