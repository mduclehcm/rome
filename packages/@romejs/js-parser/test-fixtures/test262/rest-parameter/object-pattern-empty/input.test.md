# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `test262 > rest-parameter > object-pattern-empty`

```javascript
Program {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 25
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		FunctionDeclaration {
			id: BindingIdentifier {
				name: "empty"
				loc: Object {
					filename: "input.js"
					identifierName: "empty"
					end: Object {
						column: 14
						index: 14
						line: 1
					}
					start: Object {
						column: 9
						index: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 24
					index: 24
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			body: BlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 24
						index: 24
						line: 1
					}
					start: Object {
						column: 22
						index: 22
						line: 1
					}
				}
			}
			head: FunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 21
						index: 21
						line: 1
					}
					start: Object {
						column: 14
						index: 14
						line: 1
					}
				}
				rest: BindingObjectPattern {
					properties: Array []
					rest: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 20
							index: 20
							line: 1
						}
						start: Object {
							column: 18
							index: 18
							line: 1
						}
					}
					meta: PatternMeta {
						optional: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 20
								index: 20
								line: 1
							}
							start: Object {
								column: 18
								index: 18
								line: 1
							}
						}
					}
				}
			}
		}
	]
}
```
