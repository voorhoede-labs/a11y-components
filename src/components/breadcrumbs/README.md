# Breadcrumbs

## Functionality

The breadcrumbs component consists ordered list referencing the parend pages of the current page in a hierarchical order.

### Keyboard interaction

No special keyboard interaction is necessary for this component.

### More information

The breadcrumbs component is based on the [Breadcrumb component](https://www.w3.org/TR/wai-aria-practices/#breadcrumb) best practice of the W3C and makes use of [aria label](https://www.w3.org/TR/wai-aria-1.1/#aria-label) and state [aria-current](https://www.w3.org/TR/wai-aria-1.1/#aria-current).

## Usage

The breadcrumbs component consists of a `nav` containing an ordered list containing links to the pages mentioned in the breadcrumbs.

> **NOTE**  
  Do not add dividers between the list items in the HTML, as assistive technology might announce them (which adds unnecessary noice). Instead, style dividers using CSS.

Add the attribute `aria-current="page"` to the link referencing the current page. If the element representing the current page is not a link, `aria-current` is optional.

## Example

```html
<nav aria-label="Breadcrumbs" class="breadcrumbs">
	<ol>
		<li>
			<a href="#">Books</a>
		</li>
		<li>
			<a href="#">Science Fiction &amp; Fantasy</a>
		</li>
		<li>
			<a href="#">Science Fiction</a>
		</li>
		<li>
			<a href="#" aria-current="page">The Hitchhiker's Guide to the Galaxy</a>
		</li>
	</ol>
</nav>
```
