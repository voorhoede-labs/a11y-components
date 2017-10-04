# Alert dialog

## Functionality

When the user activates the alert dialog by pressing a button, a dialog window will show which requires the user to take an action. The alert dialog can be close by pressing a button.

When opening the window, assistive technology will announce that a alert dialog is opened. After that, assistive technology will announce the name of the alert dialog as defined in the containing heading.

> **BEWARE**  
  The keyboard user, once inside the alert dialog, cannot access any other content on the page. Until the user closes the alert dialog, only the content in the alert dialog is accessible. Use this component only if it is absolutely necessary that a user provides input.

### More information

The alert dialog has an ARIA role of `alertdialog`; you can find more information in the [W3C recommendation](https://www.w3.org/TR/wai-aria/roles#alertdialog).

## Usage

A alert dialog consists of an overlay `div` containing a `div` of the actual alert dialog. The alert dialog contains at least a `h1` element describing the content of the alert dialog and a button to close the alert dialog.

> **BEWARE**  
  Make sure the overlay `div` is a direct child of the `body` in order to get the content blocking to work.

To the overlay `div`, add:

- a class of `modal`
- the data-attribute `data-model-overlay="[MODAL-NAME]"`
- the attribute `hidden`

To the containing alert dialog `div`, add:

- a class of `modal-window`
- a role of `alertdialog`
- the attribute `aria-labelledby="[DESCRIPTION-NAME]"`
- the attribute `tabindex="0"`
- the data-attribute `data-modal-window`

In the alert dialog `div`, add:

- a `h1` element with an id of `[DESCRIPTION-NAME]` as used in the `aria-labelledby` attribute of the alert dialog
- a `button` with the data-attribute `data-modal-close`
- the content of the alert dialog

To trigger the alert dialog, add:

- a `button` with `data-model-trigger="[MODAL-NAME]"` where `[MODAL-NAME]` is the same as the name in the `data-modal-overlay` data-attribute of the overlay.

## Example

```html
<button data-modal-trigger="delete-account-warning">Delete account</button>

<div class="modal" data-modal-overlay="delete-account-warning" hidden>
	<div class="modal-window" role="alertdialog" aria-labelledby="delete-account-description" tabindex="0" data-modal-window>
		<h1 id="delete-account-description">Are you sure you want to delete your account?</h1>
		
		<p>Deleting your account is irreversible. Do you really want to delete your account?</p>

		<button data-modal-close>No</button>
		<button>Yes, delete my account</button>
	</div>
</div>
```
