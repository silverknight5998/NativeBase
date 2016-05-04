/* @flow */
'use strict';

import React, {Text } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import _ from 'lodash';


export default class TextNB extends NativeBaseComponent {
    
	prepareRootProps() {

	    var type = { 
	    	color: this.getTheme().textColor,
	    	fontSize: this.getTheme().fontSizeBase,
	    	lineHeight: this.getTheme().lineHeight
	    }
	  
	    var defaultProps = {
	        style: type
	    }	  
	  
	    return computeProps(this.props, defaultProps);

	}
    render() {
        return(
            <Text {...this.prepareRootProps()}>{this.props.children}</Text>
        );
    }    

}

