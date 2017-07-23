Object.defineProperty(exports,"__esModule",{value:true});exports.SwipeRow=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/SwipeRow.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactNative=require("react-native");
var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _Text=require("./Text");
var _Left=require("./Left");
var _Right=require("./Right");
var _Body=require("./Body");
var _ListItem=require("./ListItem");
var _mapPropsToStyleNames=require("../Utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var PREVIEW_OPEN_DELAY=700;
var PREVIEW_CLOSE_DELAY=300;var

SwipeRow=function(_Component){_inherits(SwipeRow,_Component);












function SwipeRow(props){_classCallCheck(this,SwipeRow);var _this=_possibleConstructorReturn(this,(SwipeRow.__proto__||Object.getPrototypeOf(SwipeRow)).call(this,
props));
_this.horizontalSwipeGestureBegan=false;
_this.swipeInitialX=null;
_this.parentScrollEnabled=true;
_this.ranPreview=false;
_this.state={
dimensionsSet:false,
hiddenHeight:0,
hiddenWidth:0};

_this._translateX=new _reactNative.Animated.Value(0);return _this;
}_createClass(SwipeRow,[{key:"componentWillMount",value:function componentWillMount()

{var _this2=this;
this._panResponder=_reactNative.PanResponder.create({
onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(e,gs){return _this2.handleOnMoveShouldSetPanResponder(e,gs);},
onPanResponderMove:function onPanResponderMove(e,gs){return _this2.handlePanResponderMove(e,gs);},
onPanResponderRelease:function onPanResponderRelease(e,gs){return _this2.handlePanResponderEnd(e,gs);},
onPanResponderTerminate:function onPanResponderTerminate(e,gs){return _this2.handlePanResponderEnd(e,gs);},
onShouldBlockNativeResponder:function onShouldBlockNativeResponder(_){return false;}});

}},{key:"getPreviewAnimation",value:function getPreviewAnimation(

toValue,delay){
return _reactNative.Animated.timing(this._translateX,{duration:this.props.previewDuration,toValue:toValue,delay:delay});
}},{key:"onContentLayout",value:function onContentLayout(

e){var _this3=this;
this.setState({
dimensionsSet:!this.props.recalculateHiddenLayout,
hiddenHeight:e.nativeEvent.layout.height,
hiddenWidth:e.nativeEvent.layout.width});


if(this.props.preview&&!this.ranPreview){
this.ranPreview=true;
var previewOpenValue=this.props.previewOpenValue||this.props.rightOpenValue*0.5;
this.getPreviewAnimation(previewOpenValue,PREVIEW_OPEN_DELAY).start(function(_){
_this3.getPreviewAnimation(0,PREVIEW_CLOSE_DELAY).start();
});
}
}},{key:"handleOnMoveShouldSetPanResponder",value:function handleOnMoveShouldSetPanResponder(

e,gs){var
dx=gs.dx;
return Math.abs(dx)>this.props.directionalDistanceChangeThreshold;
}},{key:"handlePanResponderMove",value:function handlePanResponderMove(

e,gestureState){var
dx=gestureState.dx,dy=gestureState.dy;
var absDx=Math.abs(dx);
var absDy=Math.abs(dy);



if(
absDx>this.props.directionalDistanceChangeThreshold||
absDy>this.props.directionalDistanceChangeThreshold)
{

if(absDy>absDx&&!this.horizontalSwipeGestureBegan){

return;
}


if(this.parentScrollEnabled){

this.parentScrollEnabled=false;
this.props.setScrollEnabled&&this.props.setScrollEnabled(false);
}

if(this.swipeInitialX===null){

this.swipeInitialX=this._translateX._value;
}
if(!this.horizontalSwipeGestureBegan){
this.horizontalSwipeGestureBegan=true;
this.props.swipeGestureBegan&&this.props.swipeGestureBegan();
}

var newDX=this.swipeInitialX+dx;
if(this.props.disableLeftSwipe&&newDX<0){
newDX=0;
}
if(this.props.disableRightSwipe&&newDX>0){
newDX=0;
}

if(this.props.stopLeftSwipe&&newDX>this.props.stopLeftSwipe){
newDX=this.props.stopLeftSwipe;
}
if(this.props.stopRightSwipe&&newDX<this.props.stopRightSwipe){
newDX=this.props.stopRightSwipe;
}

this._translateX.setValue(newDX);
}
}},{key:"handlePanResponderEnd",value:function handlePanResponderEnd(

e,gestureState){

if(!this.parentScrollEnabled){
this.parentScrollEnabled=true;
this.props.setScrollEnabled&&this.props.setScrollEnabled(true);
}


var toValue=0;
if(this._translateX._value>=0){

if(this._translateX._value>this.props.leftOpenValue*(this.props.swipeToOpenPercent/100)){

toValue=this.props.leftOpenValue;
}
}else{

if(this._translateX._value<this.props.rightOpenValue*(this.props.swipeToOpenPercent/100)){

toValue=this.props.rightOpenValue;
}
}

this.manuallySwipeRow(toValue);
}},{key:"closeRow",value:function closeRow()




{
this.manuallySwipeRow(0);
}},{key:"manuallySwipeRow",value:function manuallySwipeRow(

toValue){var _this4=this;
_reactNative.Animated.spring(this._translateX,{
toValue:toValue,
friction:this.props.friction,
tension:this.props.tension}).
start(function(_){
if(toValue===0){
_this4.props.onRowDidClose&&_this4.props.onRowDidClose();
}else{
_this4.props.onRowDidOpen&&_this4.props.onRowDidOpen();
}
});

if(toValue===0){
this.props.onRowClose&&this.props.onRowClose();
}else{
this.props.onRowOpen&&this.props.onRowOpen(toValue);
}


this.swipeInitialX=null;
this.horizontalSwipeGestureBegan=false;
}},{key:"renderMainContent",value:function renderMainContent()

{var _this5=this;


if(this.state.dimensionsSet){
return(
_react2.default.createElement(_reactNative.Animated.View,_extends({},
this._panResponder.panHandlers,{
style:{
transform:[{translateX:this._translateX}],
zIndex:2},__source:{fileName:_jsxFileName,lineNumber:190}}),


!this.props.list?
_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:198}},
this.props.body):

_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:201}},
this.props.body)));



}else{
return(
_react2.default.createElement(_reactNative.Animated.View,_extends({},
this._panResponder.panHandlers,{
onLayout:function onLayout(e){return _this5.onContentLayout(e);},
style:{
transform:[{translateX:this._translateX}],
zIndex:2},__source:{fileName:_jsxFileName,lineNumber:208}}),


!this.props.list?
_react2.default.createElement(_ListItem.ListItem,{__source:{fileName:_jsxFileName,lineNumber:217}},
this.props.body):

_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:220}},
this.props.body)));



}
}},{key:"render",value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:this.props.style?this.props.style:undefined,__source:{fileName:_jsxFileName,lineNumber:230}},
_react2.default.createElement(_reactNative.View,{
style:[
styles.hidden,
{
height:this.state.hiddenHeight,
width:this.state.hiddenWidth,
flexDirection:"row",
justifyContent:"space-between"}],__source:{fileName:_jsxFileName,lineNumber:231}},



_react2.default.createElement(_Left.Left,{style:{width:this.props.leftOpenValue,zIndex:1},__source:{fileName:_jsxFileName,lineNumber:242}},
this.props.left),

_react2.default.createElement(_Body.Body,{style:{flex:0},__source:{fileName:_jsxFileName,lineNumber:245}}),
_react2.default.createElement(_Right.Right,{style:{width:-this.props.rightOpenValue,zIndex:1},__source:{fileName:_jsxFileName,lineNumber:246}},
this.props.right)),


this.renderMainContent()));


}}]);return SwipeRow;}(_react.Component);SwipeRow.defaultProps={leftOpenValue:0,rightOpenValue:0,closeOnRowPress:true,disableLeftSwipe:false,disableRightSwipe:false,recalculateHiddenLayout:false,preview:false,previewDuration:300,directionalDistanceChangeThreshold:2,swipeToOpenPercent:50};


var styles={
container:{},



hidden:{
bottom:0,
left:0,
overflow:"hidden",
position:"absolute",
right:0,
top:0}};



var StyledSwipeRow=(0,_nativeBaseShoutemTheme.connectStyle)("NativeBase.SwipeRow",{},_mapPropsToStyleNames2.default)(SwipeRow);exports.
SwipeRow=StyledSwipeRow;
//# sourceMappingURL=SwipeRow.js.map