import { default as React } from 'react';
import type { ElementProps } from '@nodestrap/element';
import { ListStyle, ListVariant, ListItemProps, ListItem, ListSeparatorItem, ListProps } from '@nodestrap/list';
import { PopupPlacement, PopupMiddleware, PopupStrategy, OrientationName, OrientationVariant, DropdownCloseType, DropdownComponentProps, DropdownProps } from '@nodestrap/dropdown';
export declare const calculateSemanticRole: <TElement extends HTMLElement = HTMLElement>(props: React.PropsWithChildren<Omit<ListProps<TElement>, keyof React.DOMAttributes<TElement>>>) => "dialog" | "menu" | null;
export type { ListItemProps, ListItemProps as DropdownListItemProps, ListItemProps as ItemProps };
export { ListItem, ListItem as DropdownListItem, ListItem as Item };
export { ListSeparatorItem, ListSeparatorItem as DropdownListSeparatorItem, ListSeparatorItem as SeparatorItem };
export declare type DropdownListCloseType = number | DropdownCloseType;
export interface DropdownListComponentProps<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownListCloseType> extends DropdownComponentProps<TElement, TCloseType>, ListProps<TElement> {
    listRef?: React.Ref<HTMLElement>;
    list?: React.ReactComponentElement<any, ElementProps>;
}
export declare function DropdownListComponent<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownListCloseType>(props: DropdownListComponentProps<TElement, TCloseType>): React.FunctionComponentElement<any>;
export interface DropdownListProps<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownListCloseType> extends DropdownProps<TElement, TCloseType>, DropdownListComponentProps<TElement, TCloseType> {
}
export declare function DropdownList<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownListCloseType>(props: DropdownListProps<TElement, TCloseType>): JSX.Element;
export { DropdownList as default };
export type { OrientationName, OrientationVariant };
export type { PopupPlacement, PopupMiddleware, PopupStrategy };
export type { ListStyle, ListVariant };
