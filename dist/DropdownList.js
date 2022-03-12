// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// nodestrap utilities:
import { 
// utilities:
isTypeOf, setRef, } from '@nodestrap/utilities';
import { 
// hooks:
usePropEnabled, } from '@nodestrap/accessibilities';
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
    // essentials:
    elmRef, listRef, 
    // accessibilities:
    onActiveChange, tabIndex = -1, // from DropdownComponent, moved to List
    // behaviors:
    actionCtrl = true, // set default to true
    // components:
    list = React.createElement(List, null), 
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
    const defaultListProps = {
        // other props:
        ...restProps,
        // essentials:
        elmRef: (elm) => {
            setRef(elmRef, elm);
            setRef(listRef, elm);
        },
        // accessibilities:
        ...{
            tabIndex, // turns <List> to <ControlList>
        },
        // behaviors:
        actionCtrl,
    };
    return React.cloneElement(React.cloneElement(list, defaultListProps, (propEnabled
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
            children)), list.props);
}
export function DropdownList(props) {
    // rest props:
    const { 
    // essentials:
    listRef, 
    // components:
    list, 
    // children:
    children, ...restDropdownProps } = props;
    const { 
    // layouts:
    size, orientation, 
    // nude,
    // colors:
    theme = 'secondary', // set default to secondary
    gradient, outlined, mild, 
    // variants:
    listStyle = 'joined', // set default to joined
    // behaviors:
    actionCtrl, 
    // <Indicator> states:
    enabled, inheritEnabled, readOnly, inheritReadOnly,
    // active,
    // inheritActive,
     } = restDropdownProps;
    // jsx:
    return (React.createElement(Dropdown, { ...restDropdownProps, 
        // semantics:
        semanticTag: props.semanticTag ?? [null], semanticRole: props.semanticRole ?? calculateSemanticRole(props) },
        React.createElement(DropdownListComponent, { 
            // essentials:
            listRef: listRef, 
            // components:
            list: list, 
            // variants:
            // layouts:
            size: size, orientation: orientation, 
            // nude={nude}
            // colors:
            theme: theme, gradient: gradient, outlined: outlined, mild: mild, 
            // variants:
            listStyle: listStyle, 
            // behaviors:
            actionCtrl: actionCtrl, 
            // <Indicator> states:
            enabled: enabled, inheritEnabled: inheritEnabled, readOnly: readOnly, inheritReadOnly: inheritReadOnly, active: false, inheritActive: false }, children)));
}
export { DropdownList as default };
