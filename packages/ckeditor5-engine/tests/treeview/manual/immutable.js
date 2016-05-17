/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

import Document from '/ckeditor5/engine/treeview/document.js';
import MutationObserver from '/ckeditor5/engine/treeview/observer/mutationobserver.js';
import SelectionObserver from '/ckeditor5/engine/treeview/observer/selectionobserver.js';
import KeyObserver from '/ckeditor5/engine/treeview/observer/keyobserver.js';
import { setData } from '/tests/engine/_utils/view.js';

const viewDocument = new Document();
viewDocument.createRoot( document.getElementById( 'editor' ) );

viewDocument.addObserver( MutationObserver );
viewDocument.addObserver( SelectionObserver );
viewDocument.addObserver( KeyObserver );

setData( viewDocument,
	'<container:p><attribute:strong>foo</attribute:strong>[]<attribute:strong>bar</attribute:strong></container:p>' +
	'<container:p></container:p>' +
	'<container:p><attribute:strong></attribute:strong></container:p>' +
	'<container:p>bom</container:p>' );

viewDocument.render();
