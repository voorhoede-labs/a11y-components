# Tooltip

## Functionality

The tooltip is a cntextual popup which displays extra information about an element. A tooltip consists of a button and accompanying descriptive information. When hovering or focusing on the button the tooltip is shown but visually as for assistive technology.

### More information

The tabs component is based on the [Tooltip widget](https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tooltip) best practice of the W3C and makes use of the aria role [tooltip](https://www.w3.org/TR/wai-aria/roles#tooltip).

## Usage

The tab component consists of a `button` and a `span` element.

To the `span`, add:

-  an id
-  a role of `tooltip`

To the `button`, add:

- the attribute `aria-describedby="[ID]"`, where `[ID]` is the `id` of the span
- the attribute `aria-label="[DESCRIPTION]"`, where `[DESCRIPTION]` is a description of the button

## Example

```html
<div class="tooltip">
	<button class="tooltip__button" aria-describedby="tooltip" aria-label="More info on Lorem Ipsum"></button>

	<span id="tooltip" class="tooltip__message" role="tooltip">
		  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
	</span>
</div>
```
