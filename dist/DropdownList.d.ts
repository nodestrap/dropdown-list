/// <reference types="react" />
import { ListStyle, ListVariant, ListItemProps, ListItem, ListSeparatorItem, ListProps } from '@nodestrap/list';
import { PopupPlacement, PopupModifier, PopupPosition, OrientationName, OrientationVariant, DropdownCloseType, DropdownElementProps, DropdownProps } from '@nodestrap/dropdown';
export declare const usesDropdownListElementLayout: () => import("@cssfn/cssfn").Rule;
export declare const useDropdownListElementSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{}>, cssDecls: import("@cssfn/css-config").Decls<{}>, cssVals: import("@cssfn/css-config").Vals<{}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export declare const calculateSemanticRole: <TElement extends HTMLElement = HTMLElement, TCloseType = DropdownListCloseType>(props: DropdownListProps<TElement, TCloseType>) => "menu" | "dialog" | null;
export type { ListItemProps, ListItemProps as DropdownListItemProps, ListItemProps as ItemProps };
export { ListItem, ListItem as DropdownListItem, ListItem as Item };
export { ListSeparatorItem, ListSeparatorItem as DropdownListSeparatorItem, ListSeparatorItem as SeparatorItem };
export declare type DropdownListCloseType = number | DropdownCloseType;
export interface DropdownListElementProps<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownListCloseType> extends DropdownElementProps<TElement, TCloseType>, ListProps<TElement> {
}
export declare function DropdownListElement<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownListCloseType>(props: DropdownListElementProps<TElement, TCloseType>): JSX.Element;
export declare namespace DropdownListElement {
    var prototype: any;
}
export interface DropdownListProps<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownListCloseType> extends DropdownProps<TElement, TCloseType>, DropdownListElementProps<TElement, TCloseType> {
}
export declare function DropdownList<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownListCloseType>(props: DropdownListProps<TElement, TCloseType>): JSX.Element;
export { DropdownList as default };
export type { OrientationName, OrientationVariant };
export type { PopupPlacement, PopupModifier, PopupPosition };
export type { ListStyle, ListVariant };
