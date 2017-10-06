# Modal

## Functionality

A modal is a dialog window containing information. When the user activates the modal by pressing a button, a dialog window will show which requires the user to take an action. The modal can be close by pressing a button.

### Keyboard interaction

The user can open and close the modal by pressing the enter key on the open and close button. Additionally, the user can close the modal using the escape key.

> **BEWARE**  
  The keyboard user, once inside the modal, cannot access any other content on the page. Until the user closes the modal, only the content in the modal is accessible.

### More information

The modal component is based on the [dialog modal widget](https://www.w3.org/TR/wai-aria-practices/#dialog_modal) best practice of the W3C and makes use of the following roles:

- [dialog](https://www.w3.org/TR/wai-aria/roles#dialog)

The tabs component also makes use of:

- aria property [aria-modal](https://www.w3.org/TR/wai-aria-1.1/#aria-modal)
- aria property [aria-labelledby](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)
- attribute [tabindex](https://www.w3.org/TR/html5/editing.html#attr-tabindex)

## Usage

A modal consists of an overlay `div` containing a `div` of the actual modal. The modal contains at least a `h1` element describing the content of the modal and a button to close the modal.

> **BEWARE**  
  Make sure the overlay `div` is a direct child of the `body` in order to get the content blocking to work.

To the overlay `div`, add:

- a class of `modal`
- the data-attribute `data-model-overlay="[MODAL-NAME]"`
- the attribute `hidden`

To the containing modal `div`, add:

- a class of `modal-window`
- a role of `dialog`
- the attribute `aria-labelledby="[DESCRIPTION-NAME]"`
- the attribute `tabindex="0"`
- the data-attribute `data-modal-window`

In the modal `div`, add:

- a `h1` element with an id of `[DESCRIPTION-NAME]` as used in the `aria-labelledby` attribute of the modal
- a `button` with the data-attribute `data-modal-close`
- the content of the modal

To trigger the modal, add:

- a `button` with `data-model-trigger="[MODAL-NAME]"` where `[MODAL-NAME]` is the same as the name in the `data-modal-overlay` data-attribute of the overlay.

## Example

```html
<button data-modal-trigger="delete-account-warning">Delete account</button>

<div class="modal" data-modal-overlay="delete-account-warning" hidden>
	<div class="modal-window" role="alertdialog" aria-labelledby="description" tabindex="0" data-modal-window>
		<h1 id="description">More information</h1>
		
		<p>42 is the Answer to the Ultimate Question of Life, the Universe, and Everything</p>

		<button data-modal-close>OK</button>
	</div>
</div>
```
