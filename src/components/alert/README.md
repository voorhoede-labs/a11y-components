# Alert

## Functionality

The content of an alert will be announced to the assistive technology user. There are three levels of intrusiveness, defined in the `aria-live` attribute.

- Polite: updates are announced only when the user is doing nothing.
- Assertive: updates are announced as soon as possible.
- Rude: updates are immediately announced, interrupting the user if necessary.

### Keyboard interaction

No special keyboard interaction is necessary for this component.

### More information

The alert component is based on the [Alert component](https://www.w3.org/TR/wai-aria-practices/#alert) best practice of the W3C and has a role of [alert](https://www.w3.org/TR/wai-aria-1.1/#alert). An alert can have a attribute of [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) and [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic).

## Usage

Give a `div` the aria role of `alert`. Use JavaScript to update the content in this `div`. When the content updates, the assistive technology will issue an alert.

## Example

```html
<div role="alert"></div>
```
