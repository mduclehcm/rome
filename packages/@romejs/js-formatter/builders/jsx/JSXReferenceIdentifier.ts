/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Token} from "../../tokens";
import Builder from "../../Builder";
import {JSXReferenceIdentifier} from "@romejs/js-ast";

export default function JSXReferenceIdentifier(
	builder: Builder,
	node: JSXReferenceIdentifier,
): Token {
	return node.name;
}
