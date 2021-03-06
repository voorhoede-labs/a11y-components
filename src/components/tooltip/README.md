# Tooltip

## Functionality

The tooltip is a contextual popup which displays extra information about an element. A tooltip consists of a button (or other element) and accompanying descriptive information. When hovering or focusing on the button the tooltip is shown both visually and for assistive technology.

### More information

The tooltip component is based on the [Tooltip widget](https://www.w3.org/TR/wai-aria-practices/#tooltip) best practice of the W3C and makes use of the following roles:

- [tooltip](https://www.w3.org/TR/wai-aria/roles#tooltip) 

The tooltip component also makes use of:

- aria property [aria-describedby](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)

## Usage

The tooltip component consists of a `button` and a `span` element.

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
