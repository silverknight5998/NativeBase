/* @flow */
'use strict';

import React from 'react';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import { Platform, View } from 'react-native';
import { Icon, Icon as IconNB, Button , Badge as BadgeB } from 'native-base';
import { Badge } from './Badge';
import { Text } from './Text';

class FooterTab extends NativeBaseComponent {



    renderFooter() {
        var childrenArray = React.Children.toArray(this.props.children);
        let length = childrenArray.length;
        var newChildren = [];

        {childrenArray.map((child, i) => {
        	let children = _.clone(child.props.children);
            if (typeof children==='string') {
                newChildren.push(React.cloneElement(child, {
                    active: (this.props.active) ? true : false,
                    vertical: true,
                    capitalize: false,
                    transparent:true,
                    key: i}));
            }
            else {
                let iconElement = [];
                iconElement = _.remove(children, function(item) {
                    if(item.type == IconNB) {
                        return true;
                    }
                });
                let badgeElement = [];
                badgeElement = _.remove(children, function(item) {
                    if(item.type == Badge) {
                        return true;
                    }
                });
                if (iconElement.length>0) {
                    if (badgeElement.length>0) {
                      newChildren.push(
                          <Button style={child.props.style} transparent vertical
                              key={i}
                              active={(child.props.active)? true : false }
                              onPress={child.props.onPress}>
                              <View  style={(Platform.OS === 'ios') ? {alignSelf: 'center', zIndex: 999} : {alignSelf: 'center'}}>
                                <BadgeB {...badgeElement[0].props}>
                                  <Text style={badgeElement[0].props.textStyle}>{badgeElement[0].props.children}</Text>
                                </BadgeB>
                              </View>
                              <Icon {...iconElement[0].props} active={(child.props.active)? true : false }
                                  name={iconElement[0].props.name} />

                              <Text style={child.props.textStyle}>{children}</Text>
                          </Button>
                      );
                    }
                    else {
                      newChildren.push(
                          React.cloneElement(child)
                      );
                    }
                }
                else {
                    newChildren.push(
                        React.cloneElement(child)
                    );
                }
            };
        })}
        return newChildren;
    }

    render() {

        return(
            <View ref={c => this._root = c} {...this.props} >
                {this.renderFooter()}
            </View>
        );
    }
}

FooterTab.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledFooterTab = connectStyle('NativeBase.FooterTab', {}, mapPropsToStyleNames)(FooterTab);

export {
  StyledFooterTab as FooterTab,
};
