# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > declaration-function > migrated_0013`

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
			index: 33
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
				name: "universe"
				loc: Object {
					filename: "input.js"
					identifierName: "universe"
					end: Object {
						column: 17
						index: 17
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
					column: 32
					index: 32
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
						column: 32
						index: 32
						line: 1
					}
					start: Object {
						column: 29
						index: 29
						line: 1
					}
				}
			}
			head: FunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 28
						index: 28
						line: 1
					}
					start: Object {
						column: 17
						index: 17
						line: 1
					}
				}
				params: Array [
					BindingIdentifier {
						name: "__proto__"
						loc: Object {
							filename: "input.js"
							identifierName: "__proto__"
							end: Object {
								column: 27
								index: 27
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
									column: 27
									index: 27
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
				]
			}
		}
	]
}
```
