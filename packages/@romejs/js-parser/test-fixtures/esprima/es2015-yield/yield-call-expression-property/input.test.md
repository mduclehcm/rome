# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-yield > yield-call-expression-property`

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
			index: 31
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
				name: "g"
				loc: Object {
					filename: "input.js"
					identifierName: "g"
					end: Object {
						column: 11
						index: 11
						line: 1
					}
					start: Object {
						column: 10
						index: 10
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 30
					index: 30
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			head: FunctionHead {
				async: false
				generator: true
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 13
						index: 13
						line: 1
					}
					start: Object {
						column: 11
						index: 11
						line: 1
					}
				}
			}
			body: BlockStatement {
				directives: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 30
						index: 30
						line: 1
					}
					start: Object {
						column: 14
						index: 14
						line: 1
					}
				}
				body: Array [
					ExpressionStatement {
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 28
								index: 28
								line: 1
							}
							start: Object {
								column: 16
								index: 16
								line: 1
							}
						}
						expression: CallExpression {
							arguments: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 27
									index: 27
									line: 1
								}
								start: Object {
									column: 16
									index: 16
									line: 1
								}
							}
							callee: MemberExpression {
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 25
										index: 25
										line: 1
									}
									start: Object {
										column: 16
										index: 16
										line: 1
									}
								}
								object: ReferenceIdentifier {
									name: "obj"
									loc: Object {
										filename: "input.js"
										identifierName: "obj"
										end: Object {
											column: 19
											index: 19
											line: 1
										}
										start: Object {
											column: 16
											index: 16
											line: 1
										}
									}
								}
								property: StaticMemberProperty {
									value: Identifier {
										name: "yield"
										loc: Object {
											filename: "input.js"
											identifierName: "yield"
											end: Object {
												column: 25
												index: 25
												line: 1
											}
											start: Object {
												column: 20
												index: 20
												line: 1
											}
										}
									}
									loc: Object {
										filename: "input.js"
										identifierName: "yield"
										end: Object {
											column: 25
											index: 25
											line: 1
										}
										start: Object {
											column: 20
											index: 20
											line: 1
										}
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
