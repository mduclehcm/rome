# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 370`

```javascript
Program {
	comments: Array []
	corrupt: false
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
			index: 20
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "enum is a reserved word"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "script"
				end: Object {
					column: 10
					index: 10
					line: 1
				}
				start: Object {
					column: 6
					index: 6
					line: 1
				}
			}
		}
	]
	body: Array [
		VariableDeclarationStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 19
					index: 19
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: VariableDeclaration {
				kind: "const"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 19
						index: 19
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				declarations: Array [
					VariableDeclarator {
						id: BindingIdentifier {
							name: "enum"
							loc: Object {
								filename: "input.js"
								identifierName: "enum"
								end: Object {
									column: 10
									index: 10
									line: 1
								}
								start: Object {
									column: 6
									index: 6
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 18
								index: 18
								line: 1
							}
							start: Object {
								column: 6
								index: 6
								line: 1
							}
						}
						init: CallExpression {
							arguments: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 18
									index: 18
									line: 1
								}
								start: Object {
									column: 13
									index: 13
									line: 1
								}
							}
							callee: ReferenceIdentifier {
								name: "foo"
								loc: Object {
									filename: "input.js"
									identifierName: "foo"
									end: Object {
										column: 16
										index: 16
										line: 1
									}
									start: Object {
										column: 13
										index: 13
										line: 1
									}
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
