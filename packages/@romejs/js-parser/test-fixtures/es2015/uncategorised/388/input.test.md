# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 388`

```javascript
Program {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 22
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "js-parser"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Expected an identifier"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "module"
				end: Object {
					column: 15
					index: 15
					line: 1
				}
				start: Object {
					column: 15
					index: 15
					line: 1
				}
			}
		}
	]
	body: Array [
		ExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 20
					index: 20
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: FunctionDeclaration {
				id: BindingIdentifier {
					name: ""
					loc: Object {
						filename: "input.js"
						identifierName: ""
						end: Object {
							column: 16
							index: 16
							line: 1
						}
						start: Object {
							column: 15
							index: 15
							line: 1
						}
					}
				}
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 20
						index: 20
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
				body: BlockStatement {
					body: Array []
					directives: Array []
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
				head: FunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 17
							index: 17
							line: 1
						}
						start: Object {
							column: 16
							index: 16
							line: 1
						}
					}
				}
			}
		}
		EmptyStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 21
					index: 21
					line: 1
				}
				start: Object {
					column: 20
					index: 20
					line: 1
				}
			}
		}
	]
}
```
