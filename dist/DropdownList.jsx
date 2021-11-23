// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, 
// rules:
variants, rule, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import { 
// utilities:
isTypeOf, } from '@nodestrap/utilities';
import { 
// hooks:
usePropEnabled, } from '@nodestrap/accessibilities';
// nodestrap components:
import { ListItem, ListSeparatorItem, List, } from '@nodestrap/list';
import { 
// styles:
usesDropdownElementLayout, DropdownElement, Dropdown, } from '@nodestrap/dropdown';
// styles:
export const usesDropdownListElementLayout = () => {
    return composition([
        imports([
            // layouts:
            usesDropdownElementLayout(),
        ]),
        layout({
            // customize:
            ...usesGeneralProps(usesPrefixedProps(cssProps, 'items')), // apply general cssProps starting with items***
        }),
    ]);
};
export const useDropdownListElementSheet = createUseSheet(() => [
    mainComposition([
        variants([
            rule('&&', [
                imports([
                    // layouts:
                    usesDropdownListElementLayout(),
                ]),
            ]),
        ]),
    ]),
]);
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
    /* no config props yet */
    };
}, { prefix: 'ddwnlst' });
// utilities:
export const calculateSemanticRole = (props) => {
    if (props.role)
        return null;
    const children = props.children;
    const actionCtrl = props.actionCtrl ?? true;
    if (React.Children.toArray(children).some((child) => isTypeOf(child, ListItem)
        ?
            !(child.props.actionCtrl ?? actionCtrl) // ListItem is not an actionCtrl => not a menu item => role='dialog'
        :
            !actionCtrl // default ListItem wrapper is not an actionCtrl => not a menu item => role='dialog'
    ))
        return 'dialog';
    return 'menu';
};
export { ListItem, ListItem as DropdownListItem, ListItem as Item };
// ListSeparatorItem => DropdownListSeparatorItem
export { ListSeparatorItem, ListSeparatorItem as DropdownListSeparatorItem, ListSeparatorItem as SeparatorItem };
export function DropdownListElement(props) {
    // styles:
    const sheet = useDropdownListElementSheet();
    // rest props:
    const { 
    // accessibilities:
    active, // from accessibilities, removed
    inheritActive, // from accessibilities, removed
    tabIndex = -1, // from ModalElement   , moved to List
    // behaviors:
    actionCtrl = true, // set default to true
    // actions:
    onActiveChange, 
    // children:
    children, ...restProps } = props;
    // fn props:
    const propEnabled = usePropEnabled(props);
    // handlers:
    const handleClose = onActiveChange && ((e, index) => {
        if (!e.defaultPrevented) {
            onActiveChange?.(false, index);
            e.preventDefault();
        } // if
    });
    // jsx:
    return (<List 
    // other props:
    {...restProps} 
    // accessibilities:
    {...{
        tabIndex,
    }} 
    // behaviors:
    actionCtrl={actionCtrl} 
    // variants:
    theme={props.theme ?? 'secondary'} listStyle={props.listStyle ?? 'joined'} 
    // classes:
    classes={[
            sheet.main, // inject DropdownListElement class
        ]}>
            {propEnabled
            ?
                (React.Children.map(children, (child, index) => (isTypeOf(child, ListItem)
                    ?
                        (((child.props.enabled ?? true) && (child.props.actionCtrl ?? actionCtrl))
                            ?
                                <child.type 
                                // other props:
                                {...child.props} 
                                // essentials:
                                key={child.key ?? index} 
                                // events:
                                onClick={(e) => {
                                        child.props.onClick?.(e);
                                        handleClose?.(e, index);
                                    }}/>
                            :
                                child)
                    :
                        (actionCtrl
                            ?
                                <ListItem 
                                // essentials:
                                key={index} 
                                // events:
                                onClick={(e) => {
                                        handleClose?.(e, index);
                                    }}>
                                {child}
                            </ListItem>
                            :
                                child))))
            :
                children}
        </List>);
}
DropdownListElement.prototype = DropdownElement.prototype; // mark as DropdownElement compatible
export function DropdownList(props) {
    // jsx:
    return (<Dropdown 
    // other props:
    {...props} 
    // semantics:
    semanticTag={props.semanticTag ?? [null]} semanticRole={props.semanticRole ?? calculateSemanticRole(props)}>
            <DropdownListElement 
    // other props:
    {...props}/>
        </Dropdown>);
}
export { DropdownList as default };
