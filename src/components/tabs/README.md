# Tabs

## Functionality

The tabs component consists of a series of contentpanels controlled by tabs. One content panel is shown at a time. The user can make a content panel visible by clicking the associated tab.

Keyboard users can interact with the tab component by focusing on the list of tabs. They can then use the arrow keys to show the associated content panels.

### More information

The tabs component is based on the [Tab Panel widget](https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel) best practice of the W3C and makes use of the aria roles [tab](https://www.w3.org/TR/wai-aria/roles#tab), [tablist](https://www.w3.org/TR/wai-aria/roles#tablist) and [tabpanel](https://www.w3.org/TR/wai-aria/roles#tabpanel).

## Usage

The tab component consists of a `div` containing a list of tabs en content panels. 

To the containing `div`, add:

- the class `tabs`
- the data-attribute `data-tabs

Add an `ul` to the `div`, and add to the list:

- the class `tabs-list`
- the data-attribute `data-tabs-list`

To each list item, add:

- the class `tab`
- the data-attribute `data-tabs-tab`

To each link inside a list-item, add:

- the id of the referenced content panel to the `href`
- the attribute `aria-controls` with the id of the referenced content panel
- the data-attribute `data-tabs-trigger="[NUMBER]"`, where number is 1 for the first link, 2 for the second link, et cetera

To each content content panel, add:

- an id as referenced in the previously defined links
- a class of `tab-content`
- the data-attribute `data-tabs-content="[NUMBER]"`, where number references the number as defined in `data-tabs-trigger` of the corresponding link

## Example

```html
<div class="tabs" data-tabs>
	<ul class="tabs-list flat-list" data-tabs-list>
		<li class="tab" data-tabs-tab>
			<a href="#section1" aria-controls="section1" data-tabs-trigger="1">Section 1</a>
		</li>
		<li class="tab" data-tabs-tab>
			<a href="#section2" aria-controls="section2" data-tabs-trigger="2">Section 2</a>
		</li>
		<li class="tab" data-tabs-tab>
			<a href="#section3" aria-controls="section3" data-tabs-trigger="3">Section 3</a>
		</li>
	</ul>

	<section id="section1" class="tab-content" data-tabs-content="1">
		<h3>Section 1</h3>

		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</section>

	<section id="section2" class="tab-content" data-tabs-content="2">
		<h3>Section 2</h3>

		<p>Phasellus ex neque, ullamcorper ut faucibus ac, suscipit a nibh.</p>
	</section>

	<section id="section3" class="tab-content" data-tabs-content="3">
		<h3>Section 3</h3>

		<p>Duis congue velit eget eros tempor molestie.</p>
	</section>
</div>
```
