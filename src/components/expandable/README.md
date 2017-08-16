# Expandable

## Functionality

An expandable component is controlled by a button, which toggles the visibility of the content of the expandable. The content of the expandable is initially hidden.

### More information

An expandable makes use of the ARIA state of `aria-expanded`; you can find more information in the [W3C recommendation](https://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded).

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
		<button class="h3 expandable__trigger" aria-expanded="false" aria-controls="expandable-content" data-expandable-trigger="name">Expandable</button>
	</h3>

	<div id="expandable-content" class="expandable__content" aria-hidden="true" data-expandable-content="name">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices tellus nibh, vel molestie enim gravida efficitur. Ut et interdum odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis tortor vulputate, pellentesque dui id, auctor nisi. In ac felis enim. Proin tristique bibendum tempus. Curabitur eget lorem porttitor nunc semper condimentum. Praesent feugiat, turpis quis suscipit egestas, lectus velit finibus quam, id aliquam lorem ligula at ipsum.</p>
	</div>
</div>
```
