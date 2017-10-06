# Expandable

## Functionality

An expandable component is controlled by a button, which toggles the visibility of the content of the expandable. The content of the expandable is initially hidden.

### More information

The expandable component is based on the [Disclosure widget](https://www.w3.org/TR/wai-aria-practices/#disclosure) best practice of the W3C and makes use of:

- aria property [aria-controls](https://www.w3.org/TR/wai-aria-1.1/#aria-controls)
- aria property [aria-labelledby](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)
- aria state [aria-expanded](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded)
- aria state [aria-hidden](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden)

## Usage

An expandable contsists of a heading with a `button` as the trigger and a `div` containing the content.

To the `div`, add:

- an id `id="[CONTENT-NAME]"`
- the attribute `aria-hidden="true"`
- the data-attribute `data-expandable-content="[EXPANDABLE-NAME]"`

To the `button`, add:

- the attribute `aria-expanded="false"`
- the attribute `aria-controls="[CONTENT-NAME]"` with the same name as the id of the `div`
- the data-attribute `data-expandable-trigger="[EXPANDABLE-NAME]"` with the same name as the data-attribute of the `button`

## Example

```html
<div class="expandable">
	<h3>
		<button id="item1" class="h3 expandable__trigger" aria-expanded="false" aria-controls="expandable-content" data-expandable-trigger="name">Expandable</button>
	</h3>

	<div id="expandable-content" class="expandable__content" aria-labelledby="item1" aria-hidden="true" data-expandable-content="name">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices tellus nibh, vel molestie enim gravida efficitur. Ut et interdum odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis tortor vulputate, pellentesque dui id, auctor nisi. In ac felis enim. Proin tristique bibendum tempus. Curabitur eget lorem porttitor nunc semper condimentum. Praesent feugiat, turpis quis suscipit egestas, lectus velit finibus quam, id aliquam lorem ligula at ipsum.</p>
	</div>
</div>
```
