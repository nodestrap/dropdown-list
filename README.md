# &lt;DropdownList&gt;&lt;/DropdownList&gt;
Overlays a list element (menu).

## Preview

```jsx
<DropdownList tag='div' theme='primary' size='lg' gradient={true} outlined={true} active={true} >
    <ListItem>hello</ListItem>
    <ListItem>world</ListItem>
    <ListSeparatorItem />
    <ListItem theme='danger'>important</ListItem>
    <ListItem actionCtrl={true} onClick={() => console.log('tadaa!')}>click me</ListItem>
    // ...
</DropdownList>
```
Rendered to:
```html
<div class="c1 actived">
    <ul class="c2 thPrimary szLg gradient outlined">
        <li>/* ... */</li>
        <li>/* ... */</li>
        <li>/* ... */</li>
    </ul>
</div>
```

## Features
* Includes all features in [`<Dropdown />`](https://www.npmjs.com/package/@nodestrap/dropdown).
* Includes all features in [`<List />`](https://www.npmjs.com/package/@nodestrap/list).
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/dropdown-list
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
