/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Scope} from "../../scopes";
import {AnyNode, JSXNamespacedName, jsxNamespacedName} from "@romejs/js-ast";

export default function JSXNamespacedName(node: AnyNode, scope: Scope) {
	node = jsxNamespacedName.assert(node);
	scope;
	throw new Error("unimplemented");
}
