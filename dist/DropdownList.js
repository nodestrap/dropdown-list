// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// nodestrap utilities:
import { 
// utilities:
isTypeOf, } from '@nodestrap/utilities';
import { 
// hooks:
usePropEnabled, } from '@nodestrap/accessibilities';
// nodestrap components:
import { ListItem, ListSeparatorItem, List, } from '@nodestrap/list';
import { Dropdown, } from '@nodestrap/dropdown';
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
export function DropdownListComponent(props) {
    // rest props:
    const { 
    // accessibilities:
    active, // from accessibilities  , removed
    inheritActive, // from accessibilities  , removed
    tabIndex = -1, // from DropdownComponent, moved to List
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
    return (React.createElement(List, { ...restProps, ...{
            tabIndex,
        }, 
        // behaviors:
        actionCtrl: actionCtrl, 
        // variants:
        theme: props.theme ?? 'secondary', listStyle: props.listStyle ?? 'joined' }, propEnabled
        ?
            (React.Children.map(children, (child, index) => (isTypeOf(child, ListItem)
                ?
                    (((child.props.enabled ?? true) && (child.props.actionCtrl ?? actionCtrl))
                        ?
                            React.createElement(child.type
                            // other props:
                            , { ...child.props, 
                                // essentials:
                                key: child.key ?? index, 
                                // events:
                                onClick: (e) => {
                                    child.props.onClick?.(e);
                                    handleClose?.(e, index);
                                } })
                        :
                            child)
                :
                    (actionCtrl
                        ?
                            React.createElement(ListItem
                            // essentials:
                            , { 
                                // essentials:
                                key: index, 
                                // events:
                                onClick: (e) => {
                                    handleClose?.(e, index);
                                } }, child)
                        :
                            child))))
        :
            children));
}
export function DropdownList(props) {
    // jsx:
    return (React.createElement(Dropdown, { ...props, 
        // semantics:
        semanticTag: props.semanticTag ?? [null], semanticRole: props.semanticRole ?? calculateSemanticRole(props) },
        React.createElement(DropdownListComponent, { ...props })));
}
export { DropdownList as default };
